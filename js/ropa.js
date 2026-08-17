/*====================================================
                    URBAN STYLE
                    ROPA.JS
                    PARTE 1/3
====================================================*/


/*====================================================
                VARIABLES PRINCIPALES
====================================================*/

let productosMostrados = [];

let categoriaActual = "todos";

let tipoActual = "todos";

let busquedaActual = "";

let ordenActual = "destacados";


/*====================================================
                INICIALIZAR PÁGINA
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    iniciarPaginaRopa();

});


/*====================================================
                INICIAR PÁGINA
====================================================*/

function iniciarPaginaRopa() {

    if (typeof productos === "undefined") {

        console.error(
            "No se encontró la variable productos."
        );

        return;

    }


    productosMostrados = [...productos];


    mostrarProductosRopa();


    configurarFiltros();


    configurarBusqueda();


    configurarOrden();


    actualizarCantidad(
        productosMostrados.length
    );

}


/*====================================================
                MOSTRAR PRODUCTOS
====================================================*/

function mostrarProductosRopa(
    lista = productosMostrados
) {

    const contenedor =
        document.querySelector(
            "#productos-ropa"
        );

    const mensajeSinResultados =
        document.querySelector(
            "#sin-resultados"
        );


    if (!contenedor) {

        console.error(
            "No se encontró #productos-ropa."
        );

        return;

    }


    contenedor.innerHTML = "";


    /*----------------------------------------------
                SIN PRODUCTOS
    ----------------------------------------------*/

    if (!lista || lista.length === 0) {

        if (mensajeSinResultados) {

            mensajeSinResultados.classList.add(
                "mostrar"
            );

        }

        actualizarCantidad(0);

        return;

    }


    /*----------------------------------------------
                OCULTAR MENSAJE
    ----------------------------------------------*/

    if (mensajeSinResultados) {

        mensajeSinResultados.classList.remove(
            "mostrar"
        );

    }


    /*----------------------------------------------
                CREAR TARJETAS
    ----------------------------------------------*/

   lista.forEach(
    (producto, indice) => {


        const tarjeta =
            crearTarjetaProducto(
                producto,
                indice
            );

        contenedor.insertAdjacentHTML(
            "beforeend",
            tarjeta
        );
    }
);

    productosMostrados = 
       [...lista];


    actualizarCantidad(
        lista.length
    );


    activarAnimacionesTarjetas();

}






/*====================================================
            ANIMACIONES DE LAS TARJETAS
====================================================*/

function activarAnimacionesTarjetas() {

    const tarjetas =
        document.querySelectorAll(
            "#productos-ropa .producto-card"
        );


    tarjetas.forEach(
        (tarjeta, indice) => {

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

/*====================================================
                ACTUALIZAR CANTIDAD
====================================================*/

function actualizarCantidad(
    cantidad
) {

    const contador =
        document.querySelector(
            "#cantidad-productos"
        );


    if (!contador) {

        return;

    }


    contador.textContent =
        `Mostrando ${cantidad} productos`;

}


/*====================================================
                FIN PARTE 1/3
====================================================*/
/*====================================================
                    URBAN STYLE
                    ROPA.JS
                    PARTE 2/3
====================================================*/


/*====================================================
                CONFIGURAR FILTROS
====================================================*/

function configurarFiltros() {

    const filtroCategoria =
        document.querySelector(
            "#filtro-categoria"
        );


    const filtroTipo =
        document.querySelector(
            "#filtro-tipo"
        );


    const botonLimpiar =
        document.querySelector(
            "#btn-limpiar-filtros"
        );


    /*----------------------------------------------
                    CATEGORÍA
    ----------------------------------------------*/

    if (filtroCategoria) {

        filtroCategoria.addEventListener(
            "change",
            () => {

                categoriaActual =
                    filtroCategoria.value;

                tipoActual = "todos";

                actualizarTipos();

                aplicarFiltros();

            }
        );

    }


    /*----------------------------------------------
                        TIPO
    ----------------------------------------------*/

    if (filtroTipo) {

        filtroTipo.addEventListener(
            "change",
            () => {

                tipoActual =
                    filtroTipo.value;

                aplicarFiltros();

            }
        );

    }


    /*----------------------------------------------
                    LIMPIAR FILTROS
    ----------------------------------------------*/

    if (botonLimpiar) {

        botonLimpiar.addEventListener(
            "click",
            limpiarFiltros
        );

    }


    actualizarTipos();

}


/*====================================================
                ACTUALIZAR TIPOS
====================================================*/

function actualizarTipos() {

    const filtroTipo =
        document.querySelector(
            "#filtro-tipo"
        );


    if (!filtroTipo) {

        return;

    }


    const tipos =
        obtenerTiposDisponibles(
            categoriaActual
        );


    filtroTipo.innerHTML = `

        <option value="todos">
            Todas
        </option>

    `;


    tipos.forEach(
        tipo => {

            filtroTipo.insertAdjacentHTML(
                "beforeend",
                `
                    <option value="${tipo}">
                        ${tipo}
                    </option>
                `
            );

        }
    );


    if (
        tipos.some(
            tipo =>
                tipo.toLowerCase() ===
                tipoActual.toLowerCase()
        )
    ) {

        filtroTipo.value =
            tipoActual;

    } else {

        filtroTipo.value =
            "todos";

        tipoActual =
            "todos";

    }

}


/*====================================================
                CONFIGURAR BÚSQUEDA
====================================================*/

function configurarBusqueda() {

    const buscador =
        document.querySelector(
            "#buscador"
        );


    const botonBuscar =
        document.querySelector(
            "#btn-buscar"
        );


    if (!buscador) {

        return;

    }


    /*----------------------------------------------
                    ESCRIBIR
    ----------------------------------------------*/

    buscador.addEventListener(
        "input",
        () => {

            busquedaActual =
                buscador.value;

            aplicarFiltros();

        }
    );


    /*----------------------------------------------
                    BOTÓN BUSCAR
    ----------------------------------------------*/

    if (botonBuscar) {

        botonBuscar.addEventListener(
            "click",
            () => {

                busquedaActual =
                    buscador.value;

                aplicarFiltros();

            }
        );

    }


    /*----------------------------------------------
                    TECLA ENTER
    ----------------------------------------------*/

    buscador.addEventListener(
        "keydown",
        evento => {

            if (
                evento.key === "Enter"
            ) {

                busquedaActual =
                    buscador.value;

                aplicarFiltros();

            }

        }
    );

}


/*====================================================
                CONFIGURAR ORDEN
====================================================*/

function configurarOrden() {

    const selectorOrden =
        document.querySelector(
            "#orden-productos"
        );


    if (!selectorOrden) {

        return;

    }


    selectorOrden.addEventListener(
        "change",
        () => {

            const valor =
                selectorOrden.value;


            switch (valor) {

                case "menor":

                    ordenActual =
                        "precio-menor";

                    break;


                case "mayor":

                    ordenActual =
                        "precio-mayor";

                    break;


                case "nombre":

                    ordenActual =
                        "nombre-az";

                    break;


                case "destacados":

                default:

                    ordenActual =
                        "destacados";

                    break;

            }


            aplicarFiltros();

        }
    );

}


/*====================================================
                APLICAR FILTROS
====================================================*/

function aplicarFiltros() {

    let resultado;


    /*----------------------------------------------
                FILTRADO
    ----------------------------------------------*/

    resultado =
        filtrarProductos(
            categoriaActual,
            tipoActual,
            busquedaActual
        );


    /*----------------------------------------------
                    ORDEN
    ----------------------------------------------*/

    resultado =
        ordenarProductos(
            resultado,
            ordenActual
        );


    /*----------------------------------------------
                    MOSTRAR
    ----------------------------------------------*/

    mostrarProductosRopa(
        resultado
    );


    /*----------------------------------------------
                    CANTIDAD
    ----------------------------------------------*/

    actualizarCantidad(
        resultado.length
    );

}


/*====================================================
                LIMPIAR FILTROS
====================================================*/

function limpiarFiltros() {

    /*----------------------------------------------
                    RESTABLECER VARIABLES
    ----------------------------------------------*/

    categoriaActual =
        "todos";

    tipoActual =
        "todos";

    busquedaActual =
        "";

    ordenActual =
        "destacados";


    /*----------------------------------------------
                    RESTABLECER SELECTS
    ----------------------------------------------*/

    const filtroCategoria =
        document.querySelector(
            "#filtro-categoria"
        );


    const filtroTipo =
        document.querySelector(
            "#filtro-tipo"
        );


    const selectorOrden =
        document.querySelector(
            "#orden-productos"
        );


    const buscador =
        document.querySelector(
            "#buscador"
        );


    if (filtroCategoria) {

        filtroCategoria.value =
            "todos";

    }


    if (filtroTipo) {

        filtroTipo.value =
            "todos";

    }


    if (selectorOrden) {

        selectorOrden.value =
            "destacados";

    }


    if (buscador) {

        buscador.value =
            "";

    }


    /*----------------------------------------------
                ACTUALIZAR TIPOS
    ----------------------------------------------*/

    actualizarTipos();


    /*----------------------------------------------
                    MOSTRAR TODO
    ----------------------------------------------*/

    productosMostrados =
        [...productos];


    mostrarProductosRopa(
        productosMostrados
    );

}


/*====================================================
                FIN PARTE 2/3
====================================================*/
/*====================================================
                    URBAN STYLE
                    ROPA.JS
                    PARTE 3/3
====================================================*/


/*====================================================
            CONFIGURAR BOTONES DE PRODUCTOS
====================================================*/

document.addEventListener(
    "click",
    evento => {

        const botonComprar =
            evento.target.closest(
                ".btn-comprar"
            );


        const botonFavorito =
            evento.target.closest(
                ".btn-favorito"
            );


        /*------------------------------------------
                    AGREGAR AL CARRITO
        ------------------------------------------*/

        if (botonComprar) {

            const id =
                botonComprar.dataset.id;


            const producto =
                obtenerProductoPorId(id);


            if (!producto) {

                console.error(
                    "No se encontró el producto:",
                    id
                );

                return;

            }


            agregarProductoAlCarrito(
                producto
            );

        }


        /*------------------------------------------
                        FAVORITOS
        ------------------------------------------*/

        if (botonFavorito) {

            const id =
                botonFavorito.dataset.id;


            const producto =
                obtenerProductoPorId(id);


            if (!producto) {

                return;

            }


            alternarFavorito(
                producto,
                botonFavorito
            );

        }

    }
);


/*====================================================
            AGREGAR PRODUCTO AL CARRITO
====================================================*/

function agregarProductoAlCarrito(
    producto
) {

    /*
        Si carrito.js tiene una función
        global para agregar productos,
        la utilizamos.

        No creamos otro carrito acá.
    */


    if (
        typeof agregarAlCarrito ===
        "function"
    ) {

        agregarAlCarrito(
            producto
        );

        mostrarNotificacion(
            `${producto.nombre} agregado al carrito`
        );

        return;

    }


    /*
        Compatibilidad con una función
        alternativa.
    */

    if (
        typeof agregarProducto ===
        "function"
    ) {

        agregarProducto(
            producto
        );

        mostrarNotificacion(
            `${producto.nombre} agregado al carrito`
        );

        return;

    }


    console.warn(
        "No se encontró una función para agregar productos al carrito."
    );

}


/*====================================================
                    FAVORITOS
====================================================*/

let favoritos =
    JSON.parse(
        localStorage.getItem(
            "urbanStyleFavoritos"
        )
    ) || [];


/*====================================================
                ALTERNAR FAVORITO
====================================================*/

function alternarFavorito(
    producto,
    boton
) {

    const id =
        Number(producto.id);


    const posicion =
        favoritos.indexOf(id);


    /*----------------------------------------------
                    QUITAR
    ----------------------------------------------*/

    if (posicion !== -1) {

        favoritos.splice(
            posicion,
            1
        );


        boton.classList.remove(
            "activo"
        );


        boton.innerHTML =
            `
                <i class="fa-regular fa-heart"></i>
            `;


        mostrarNotificacion(
            "Producto eliminado de favoritos"
        );

    }


    /*----------------------------------------------
                    AGREGAR
    ----------------------------------------------*/

    else {

        favoritos.push(
            id
        );


        boton.classList.add(
            "activo"
        );


        boton.innerHTML =
            `
                <i class="fa-solid fa-heart"></i>
            `;


        mostrarNotificacion(
            "Producto agregado a favoritos"
        );

    }


    /*----------------------------------------------
                    GUARDAR
    ----------------------------------------------*/

    localStorage.setItem(
        "urbanStyleFavoritos",
        JSON.stringify(
            favoritos
        )
    );

}


/*====================================================
            MARCAR FAVORITOS GUARDADOS
====================================================*/

function actualizarBotonesFavoritos() {

    const botones =
        document.querySelectorAll(
            ".btn-favorito"
        );


    botones.forEach(
        boton => {

            const id =
                Number(
                    boton.dataset.id
                );


            if (
                favoritos.includes(id)
            ) {

                boton.classList.add(
                    "activo"
                );


                boton.innerHTML =
                    `
                        <i class="fa-solid fa-heart"></i>
                    `;

            }

        }
    );

}


/*====================================================
                NOTIFICACIONES
====================================================*/

function mostrarNotificacion(
    mensaje
) {

    let notificacion =
        document.querySelector(
            ".notificacion-urban"
        );


    /*----------------------------------------------
                CREAR NOTIFICACIÓN
    ----------------------------------------------*/

    if (!notificacion) {

        notificacion =
            document.createElement(
                "div"
            );


        notificacion.className =
            "notificacion-urban";


        document.body.appendChild(
            notificacion
        );

    }


    notificacion.textContent =
        mensaje;


    notificacion.classList.add(
        "mostrar"
    );


    /*----------------------------------------------
                OCULTAR AUTOMÁTICAMENTE
    ----------------------------------------------*/

    clearTimeout(
        notificacion._timeout
    );


    notificacion._timeout =
        setTimeout(
            () => {

                notificacion.classList.remove(
                    "mostrar"
                );

            },
            2500
        );

}


/*====================================================
            ANIMACIÓN DE TARJETAS
====================================================*/

function iniciarAnimacionesProductos() {

    const tarjetas =
        document.querySelectorAll(
            "#productos-ropa .producto-card"
        );


    if (!tarjetas.length) {

        return;

    }


    tarjetas.forEach(
        (tarjeta, indice) => {

            tarjeta.style.setProperty(
                "--delay",
                `${indice * 0.05}s`
            );


            tarjeta.classList.add(
                "producto-visible"
            );

        }
    );


    actualizarBotonesFavoritos();

}


/*====================================================
            OBSERVAR CAMBIOS EN PRODUCTOS
====================================================*/

const observadorProductos =
    new MutationObserver(
        () => {

            iniciarAnimacionesProductos();

        }
    );


document.addEventListener(
    "DOMContentLoaded",
    () => {

        const contenedor =
            document.querySelector(
                "#productos-ropa"
            );


        if (!contenedor) {

            return;

        }


        observadorProductos.observe(
            contenedor,
            {
                childList: true
            }
        );


        iniciarAnimacionesProductos();

    }
);


/*====================================================
                FIN ROPA.JS
====================================================*/