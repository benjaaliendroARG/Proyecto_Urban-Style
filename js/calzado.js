/* =====================================================
   URBAN STYLE
   CALZADO.JS
===================================================== */


/* =====================================================
   VARIABLES
===================================================== */

let productosCalzado = [];

let generoCalzado = "todos";
let ordenCalzado = "default";


/* =====================================================
   INICIAR
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    iniciarCalzado();

});


/* =====================================================
   INICIAR CALZADO
===================================================== */

function iniciarCalzado() {

    if (
        typeof productos === "undefined" ||
        !Array.isArray(productos)
    ) {

        console.error(
            "No se encontró el array de productos."
        );

        return;
    }


    productosCalzado = productos.filter(
        producto => producto.tipo === "Calzado"
    );


    configurarFiltrosCalzado();

    mostrarProductosCalzado();

}


/* =====================================================
   FILTROS
===================================================== */

function configurarFiltrosCalzado() {

    const filtroGenero =
        document.getElementById("filtro-genero");

    const filtroOrden =
        document.getElementById("filtro-orden");


    if (filtroGenero) {

        filtroGenero.addEventListener(
            "change",
            () => {

                generoCalzado =
                    filtroGenero.value;

                mostrarProductosCalzado();

            }
        );

    }


    if (filtroOrden) {

        filtroOrden.addEventListener(
            "change",
            () => {

                ordenCalzado =
                    filtroOrden.value;

                mostrarProductosCalzado();

            }
        );

    }

}


/* =====================================================
   MOSTRAR PRODUCTOS
===================================================== */

function mostrarProductosCalzado() {

    const contenedor =
        document.getElementById(
            "productos-calzado"
        );

    const sinProductos =
        document.getElementById(
            "sin-productos"
        );

    const cantidad =
        document.getElementById(
            "cantidad-productos"
        );


    if (!contenedor) return;


    let resultado =
        [...productosCalzado];


    /* FILTRO POR GENERO */

    if (generoCalzado !== "todos") {

        resultado =
            resultado.filter(
                producto =>
                    producto.categoria ===
                    generoCalzado
            );

    }


    /* ORDEN */

    switch (ordenCalzado) {

        case "menor":

            resultado.sort(
                (a, b) =>
                    a.precio - b.precio
            );

            break;


        case "mayor":

            resultado.sort(
                (a, b) =>
                    b.precio - a.precio
            );

            break;


        case "nombre":

            resultado.sort(
                (a, b) =>
                    a.nombre.localeCompare(
                        b.nombre
                    )
            );

            break;

    }


    /* CANTIDAD */

    if (cantidad) {

        cantidad.textContent =
            resultado.length;

    }


    /* SIN PRODUCTOS */

    if (!resultado.length) {

        contenedor.innerHTML = "";

        if (sinProductos) {

            sinProductos.style.display =
                "block";

        }

        return;

    }


    if (sinProductos) {

        sinProductos.style.display =
            "none";

    }


    /* CREAR TARJETAS */

    contenedor.innerHTML = "";


    resultado.forEach(
        (producto, indice) => {

            contenedor.insertAdjacentHTML(
                "beforeend",
                crearTarjetaProducto(
                    producto,
                    indice
                )
            );

        }
    );


    /* CONFIGURAR TARJETAS */

    if (
        typeof configurarTarjetasProductos ===
        "function"
    ) {

        configurarTarjetasProductos();

    }


    activarAnimacionesCalzado();

}


/* =====================================================
   ANIMACIONES
===================================================== */

function activarAnimacionesCalzado() {

    const tarjetas =
        document.querySelectorAll(
            "#productos-calzado .producto-card"
        );


    tarjetas.forEach(
        (tarjeta, indice) => {

            tarjeta.classList.remove(
                "visible"
            );


            tarjeta.style.animationDelay =
                `${indice * 0.05}s`;


            setTimeout(
                () => {

                    tarjeta.classList.add(
                        "visible"
                    );

                },
                indice * 50
            );

        }
    );

}