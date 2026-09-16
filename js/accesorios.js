
document.addEventListener("DOMContentLoaded", function () {

    const contenedor = document.getElementById("productos-accesorios");
    const filtroTipo = document.getElementById("filtro-tipo");
    const filtroOrden = document.getElementById("filtro-orden");
    const cantidadProductos = document.getElementById("cantidad-productos");
    const sinProductos = document.getElementById("sin-productos");

    if (!contenedor) {
        return;
    }


    function obtenerAccesorios() {
        return productos.filter(function (producto) {
            return producto.categoria === "Accesorios";
        });
    }


    function mostrarProductos(lista) {

        contenedor.innerHTML = "";

        if (lista.length === 0) {

            sinProductos.style.display = "block";
            cantidadProductos.textContent = "0 productos";

            return;
        }

        sinProductos.style.display = "none";

        cantidadProductos.textContent =
            lista.length + (lista.length === 1 ? " producto" : " productos");


        lista.forEach(function (producto, indice) {

            const tarjeta = crearTarjetaProducto(producto, indice);

            contenedor.insertAdjacentHTML("beforeend", tarjeta);
        });


        configurarTarjetasProductos();

        activarAnimacionesTarjetas();
    }


    function filtrarYOrdenar() {

        let lista = obtenerAccesorios();

        const tipoSeleccionado = filtroTipo.value;
        const ordenSeleccionado = filtroOrden.value;


        if (tipoSeleccionado !== "todos") {

            lista = lista.filter(function (producto) {

                return producto.tipo === tipoSeleccionado;

            });

        }


        if (ordenSeleccionado === "menor") {

            lista.sort(function (a, b) {
                return a.precio - b.precio;
            });

        }


        if (ordenSeleccionado === "mayor") {

            lista.sort(function (a, b) {
                return b.precio - a.precio;
            });

        }


        if (ordenSeleccionado === "nombre") {

            lista.sort(function (a, b) {

                return a.nombre.localeCompare(
                    b.nombre,
                    "es",
                    { sensitivity: "base" }
                );

            });

        }


        mostrarProductos(lista);
    }


    function activarAnimacionesTarjetas() {

        const tarjetas =
            document.querySelectorAll(
                "#productos-accesorios .producto-card"
            );


        tarjetas.forEach(function (tarjeta, indice) {

            tarjeta.style.animationDelay =
                `${indice * 0.05}s`;


            setTimeout(function () {

                tarjeta.classList.add("visible");

            }, indice * 50);

        });

    }


    filtroTipo.addEventListener("change", filtrarYOrdenar);

    filtroOrden.addEventListener("change", filtrarYOrdenar);


    mostrarProductos(obtenerAccesorios());

});
