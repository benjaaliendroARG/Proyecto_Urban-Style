/*====================================================
                    FILTROS
====================================================*/


/*====================================================
            OBTENER TIPOS DISPONIBLES
====================================================*/

function obtenerTiposDisponibles(categoria = "Todos") {

    let productosFiltrados = productos;

    if (categoria !== "Todos") {

        productosFiltrados = productos.filter(
            producto => producto.categoria === categoria
        );

    }

    const tipos = [
        ...new Set(
            productosFiltrados.map(
                producto => producto.tipo
            )
        )
    ];

    return tipos;

}


/*====================================================
                FILTRAR PRODUCTOS
====================================================*/

function filtrarProductos(
    categoria = "Todos",
    tipo = "Todos"
) {

    let resultado = productos;

    if (categoria !== "Todos") {

        resultado = resultado.filter(
            producto =>
                producto.categoria === categoria
        );

    }

    if (tipo !== "Todos") {

        resultado = resultado.filter(
            producto =>
                producto.tipo === tipo
        );

    }

    return resultado;

}


/*====================================================
                PRODUCTOS DESTACADOS
====================================================*/

function obtenerProductosDestacados() {

    return productos.filter(
        producto => producto.destacado === true
    );

}

/*====================================================
                ORDENAR PRODUCTOS
====================================================*/

function ordenarProductos(
    lista,
    orden = "destacados"
) {

    const resultado = [...lista];


    switch (orden) {


        /*------------------------------------------
                    DESTACADOS
        ------------------------------------------*/

        case "destacados":

            resultado.sort(
                (a, b) =>
                    Number(b.destacado) -
                    Number(a.destacado)
            );

            break;


        /*------------------------------------------
                    MENOR PRECIO
        ------------------------------------------*/

        case "menor":

            resultado.sort(
                (a, b) =>
                    a.precio - b.precio
            );

            break;


        /*------------------------------------------
                    MAYOR PRECIO
        ------------------------------------------*/

        case "mayor":

            resultado.sort(
                (a, b) =>
                    b.precio - a.precio
            );

            break;


        /*------------------------------------------
                    NOMBRE
        ------------------------------------------*/

        case "nombre":

            resultado.sort(
                (a, b) =>
                    a.nombre.localeCompare(
                        b.nombre,
                        "es"
                    )
            );

            break;


        /*------------------------------------------
                    POR DEFECTO
        ------------------------------------------*/

        default:

            resultado.sort(
                (a, b) =>
                    Number(b.destacado) -
                    Number(a.destacado)
            );

            break;

    }


    return resultado;

}