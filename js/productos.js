/*====================================================
                    URBAN STYLE
                    PRODUCTOS.JS
                    PARTE 1/3
====================================================*/
/*====================================================
                FORMATEAR PRECIOS
====================================================*/

function formatearPrecio(precio) {

    return precio.toLocaleString("es-AR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

}

const productos = [

    /*================================================
                        HOMBRE
    ================================================*/


    /*================================================
                        BUZOS
    ================================================*/

    {
        id: 1,
        nombre: "Buzo Oversize Negro Hombre",
        categoria: "Hombre",
        tipo: "Buzos",
        precio: 54999,
        imagen: "img/productos/hombre/buzos1.jpg",
        destacado: true
    },

    {
        id: 2,
        nombre: "Buzo Oversize Beige Hombre",
        categoria: "Hombre",
        tipo: "Buzos",
        precio: 54999,
        imagen: "img/productos/hombre/buzos2.jpg",
        destacado: true
    },

    {
        id: 3,
        nombre: "Buzo Oversize Gris Hombre",
        categoria: "Hombre",
        tipo: "Buzos",
        precio: 56999,
        imagen: "img/productos/hombre/buzos3.jpg",
        destacado: false
    },

    {
        id: 4,
        nombre: "Buzo Oversize Negro NY Hombre",
        categoria: "Hombre",
        tipo: "Buzos",
        precio: 56999,
        imagen: "img/productos/hombre/buzos4.jpg",
        destacado: false
    },


    /*================================================
                        REMERAS
    ================================================*/

    {
        id: 5,
        nombre: "Remera Oversize Negra Hombre",
        categoria: "Hombre",
        tipo: "Remeras",
        precio: 28999,
        imagen: "img/productos/hombre/remeras1.jpg",
        destacado: true
    },

    {
        id: 6,
        nombre: "Remera Oversize Blanca Hombre",
        categoria: "Hombre",
        tipo: "Remeras",
        precio: 28999,
        imagen: "img/productos/hombre/remeras2.jpg",
        destacado: false
    },

    {
        id: 7,
        nombre: "Remera Urbana Gris Hombre",
        categoria: "Hombre",
        tipo: "Remeras",
        precio: 29999,
        imagen: "img/productos/hombre/remeras3.jpg",
        destacado: false
    },

    {
        id: 8,
        nombre: "Remera Street Negra Hombre",
        categoria: "Hombre",
        tipo: "Remeras",
        precio: 31999,
        imagen: "img/productos/hombre/remeras4.jpg",
        destacado: true
    },


    /*================================================
                        CAMPERAS
    ================================================*/

    {
        id: 9,
        nombre: "Campera Urbana Negra Hombre",
        categoria: "Hombre",
        tipo: "Camperas",
        precio: 68999,
        imagen: "img/productos/hombre/camperas1.jpg",
        destacado: true
    },

    {
        id: 10,
        nombre: "Campera Urbana Beige Hombre",
        categoria: "Hombre",
        tipo: "Camperas",
        precio: 69999,
        imagen: "img/productos/hombre/camperas2.jpg",
        destacado: false
    },

    {
        id: 11,
        nombre: "Campera Street Gris Hombre",
        categoria: "Hombre",
        tipo: "Camperas",
        precio: 71999,
        imagen: "img/productos/hombre/camperas3.jpg",
        destacado: false
    },

    {
        id: 12,
        nombre: "Campera Oversize Negra Hombre",
        categoria: "Hombre",
        tipo: "Camperas",
        precio: 74999,
        imagen: "img/productos/hombre/camperas4.jpg",
        destacado: true
    },


    /*================================================
                    PANTALONES
    ================================================*/

    {
        id: 13,
        nombre: "Pantalón Cargo Negro Hombre",
        categoria: "Hombre",
        tipo: "Pantalones",
        precio: 49999,
        imagen: "img/productos/hombre/pantalones1.jpg",
        destacado: true
    },

    {
        id: 14,
        nombre: "Pantalón Cargo Beige Hombre",
        categoria: "Hombre",
        tipo: "Pantalones",
        precio: 49999,
        imagen: "img/productos/hombre/pantalones2.jpg",
        destacado: false
    },

    {
        id: 15,
        nombre: "Pantalón Urbano Gris Hombre",
        categoria: "Hombre",
        tipo: "Pantalones",
        precio: 51999,
        imagen: "img/productos/hombre/pantalones3.jpg",
        destacado: false
    },

    {
        id: 16,
        nombre: "Pantalón Street Negro Hombre",
        categoria: "Hombre",
        tipo: "Pantalones",
        precio: 52999,
        imagen: "img/productos/hombre/pantalones4.jpg",
        destacado: true
    },


    /*================================================
                        CALZADO
    ================================================*/

    {
        id: 17,
        nombre: "Zapatillas Urbanas Negras Hombre",
        categoria: "Hombre",
        tipo: "Calzado",
        precio: 89999,
        imagen: "img/productos/hombre/calzado1.jpg",
        destacado: true
    },

    {
        id: 18,
        nombre: "Zapatillas Urbanas Blancas Hombre",
        categoria: "Hombre",
        tipo: "Calzado",
        precio: 92999,
        imagen: "img/productos/hombre/calzado2.jpg",
        destacado: false
    },

    {
        id: 19,
        nombre: "Zapatillas Street Gris Hombre",
        categoria: "Hombre",
        tipo: "Calzado",
        precio: 94999,
        imagen: "img/productos/hombre/calzado3.jpg",
        destacado: false
    },

    {
        id: 20,
        nombre: "Zapatillas Urbanas Negras y Blancas Hombre",
        categoria: "Hombre",
        tipo: "Calzado",
        precio: 97999,
        imagen: "img/productos/hombre/calzado4.jpg",
        destacado: true
    },
    /*================================================
                        MUJER
    ================================================*/


    /*================================================
                        BUZOS
    ================================================*/

    {
        id: 21,
        nombre: "Buzo Oversize Negro Mujer",
        categoria: "Mujer",
        tipo: "Buzos",
        precio: 53999,
        imagen: "img/productos/mujer/buzosM1.jpg",
        destacado: true
    },

    {
        id: 22,
        nombre: "Buzo Oversize Blanco Mujer",
        categoria: "Mujer",
        tipo: "Buzos",
        precio: 53999,
        imagen: "img/productos/mujer/buzosM2.jpg",
        destacado: false
    },

    {
        id: 23,
        nombre: "Buzo Oversize Gris Mujer",
        categoria: "Mujer",
        tipo: "Buzos",
        precio: 55999,
        imagen: "img/productos/mujer/buzosM3.jpg",
        destacado: false
    },

    {
        id: 24,
        nombre: "Buzo Street Negro Mujer",
        categoria: "Mujer",
        tipo: "Buzos",
        precio: 55999,
        imagen: "img/productos/mujer/buzosM4.jpg",
        destacado: true
    },


    /*================================================
                        REMERAS
    ================================================*/

    {
        id: 25,
        nombre: "Remera Oversize Negra Mujer",
        categoria: "Mujer",
        tipo: "Remeras",
        precio: 27999,
        imagen: "img/productos/mujer/remerasM1.jpg",
        destacado: true
    },

    {
        id: 26,
        nombre: "Remera Oversize Blanca Mujer",
        categoria: "Mujer",
        tipo: "Remeras",
        precio: 27999,
        imagen: "img/productos/mujer/remerasM2.jpg",
        destacado: false
    },

    {
        id: 27,
        nombre: "Remera Urbana Gris Mujer",
        categoria: "Mujer",
        tipo: "Remeras",
        precio: 28999,
        imagen: "img/productos/mujer/remerasM3.jpg",
        destacado: false
    },

    {
        id: 28,
        nombre: "Remera Street Beige Mujer",
        categoria: "Mujer",
        tipo: "Remeras",
        precio: 29999,
        imagen: "img/productos/mujer/remerasM4.jpg",
        destacado: true
    },


    /*================================================
                        CAMPERAS
    ================================================*/

    {
        id: 29,
        nombre: "Campera Urbana Negra Mujer",
        categoria: "Mujer",
        tipo: "Camperas",
        precio: 67999,
        imagen: "img/productos/mujer/camperasM1.jpg",
        destacado: true
    },

    {
        id: 30,
        nombre: "Campera Urbana Beige Mujer",
        categoria: "Mujer",
        tipo: "Camperas",
        precio: 68999,
        imagen: "img/productos/mujer/camperasM2.jpg",
        destacado: false
    },

    {
        id: 31,
        nombre: "Campera Street Gris Mujer",
        categoria: "Mujer",
        tipo: "Camperas",
        precio: 70999,
        imagen: "img/productos/mujer/camperasM3.jpg",
        destacado: false
    },

    {
        id: 32,
        nombre: "Campera Oversize Negra Mujer",
        categoria: "Mujer",
        tipo: "Camperas",
        precio: 73999,
        imagen: "img/productos/mujer/camperasM4.jpg",
        destacado: true
    },


    /*================================================
                    PANTALONES
    ================================================*/

    {
        id: 33,
        nombre: "Pantalón Cargo Negro Mujer",
        categoria: "Mujer",
        tipo: "Pantalones",
        precio: 48999,
        imagen: "img/productos/mujer/pantalonesM1.jpg",
        destacado: true
    },

    {
        id: 34,
        nombre: "Pantalón Cargo Beige Mujer",
        categoria: "Mujer",
        tipo: "Pantalones",
        precio: 48999,
        imagen: "img/productos/mujer/pantalonesM2.jpg",
        destacado: false
    },

    {
        id: 35,
        nombre: "Pantalón Urbano Gris Mujer",
        categoria: "Mujer",
        tipo: "Pantalones",
        precio: 50999,
        imagen: "img/productos/mujer/pantalonesM3.jpg",
        destacado: false
    },

    {
        id: 36,
        nombre: "Pantalón Street Negro Mujer",
        categoria: "Mujer",
        tipo: "Pantalones",
        precio: 51999,
        imagen: "img/productos/mujer/pantalonesM4.jpg",
        destacado: true
    },


    /*================================================
                        CALZADO
    ================================================*/

    {
        id: 37,
        nombre: "Zapatillas Urbanas Negras Mujer",
        categoria: "Mujer",
        tipo: "Calzado",
        precio: 88999,
        imagen: "img/productos/mujer/calzadoM1.jpg",
        destacado: true
    },

    {
        id: 38,
        nombre: "Zapatillas Urbanas Blancas Mujer",
        categoria: "Mujer",
        tipo: "Calzado",
        precio: 91999,
        imagen: "img/productos/mujer/calzadoM2.jpg",
        destacado: false
    },

    {
        id: 39,
        nombre: "Zapatillas Street Gris Mujer",
        categoria: "Mujer",
        tipo: "Calzado",
        precio: 93999,
        imagen: "img/productos/mujer/calzadoM3.jpg",
        destacado: false
    },

    {
        id: 40,
        nombre: "Zapatillas Urbanas Beige Mujer",
        categoria: "Mujer",
        tipo: "Calzado",
        precio: 96999,
        imagen: "img/productos/mujer/calzadoM4.jpg",
        destacado: true
    },

        /*================================================
                    ACCESORIOS
    ================================================*/

    /*================================================
                        GORRAS
    ================================================*/

    {
        id: 41,
        nombre: "Gorra Urban Negra",
        categoria: "Accesorios",
        tipo: "Gorras",
        precio: 15999,
        imagen: "img/productos/accesorios/gorras1.jpg",
        destacado: true
    },

    {
        id: 42,
        nombre: "Gorra Urban Blanca",
        categoria: "Accesorios",
        tipo: "Gorras",
        precio: 15999,
        imagen: "img/productos/accesorios/gorras2.jpg",
        destacado: false
    },

    {
        id: 43,
        nombre: "Gorra Street Gris",
        categoria: "Accesorios",
        tipo: "Gorras",
        precio: 16999,
        imagen: "img/productos/accesorios/gorras3.jpg",
        destacado: false
    },

    {
        id: 44,
        nombre: "Gorra Urban Beige",
        categoria: "Accesorios",
        tipo: "Gorras",
        precio: 17999,
        imagen: "img/productos/accesorios/gorras4.jpg",
        destacado: true
    },


    /*================================================
                        MOCHILAS
    ================================================*/

    {
        id: 45,
        nombre: "Mochila Street Negra",
        categoria: "Accesorios",
        tipo: "Mochilas",
        precio: 39999,
        imagen: "img/productos/accesorios/mochilas1.jpg",
        destacado: true
    },

    {
        id: 46,
        nombre: "Mochila Urban Gris",
        categoria: "Accesorios",
        tipo: "Mochilas",
        precio: 41999,
        imagen: "img/productos/accesorios/mochilas2.jpg",
        destacado: false
    },

    {
        id: 47,
        nombre: "Mochila Street Beige",
        categoria: "Accesorios",
        tipo: "Mochilas",
        precio: 42999,
        imagen: "img/productos/accesorios/mochilas3.jpg",
        destacado: false
    },

    {
        id: 48,
        nombre: "Mochila Urban Negra Premium",
        categoria: "Accesorios",
        tipo: "Mochilas",
        precio: 45999,
        imagen: "img/productos/accesorios/mochilas4.jpg",
        destacado: true
    },


    /*================================================
                    RIÑONERAS
    ================================================*/

    {
        id: 49,
        nombre: "Riñonera Urban Negra",
        categoria: "Accesorios",
        tipo: "Riñoneras",
        precio: 24999,
        imagen: "img/productos/accesorios/riñoneras1.jpg",
        destacado: true
    },

    {
        id: 50,
        nombre: "Riñonera Street Gris",
        categoria: "Accesorios",
        tipo: "Riñoneras",
        precio: 25999,
        imagen: "img/productos/accesorios/riñoneras2.jpg",
        destacado: false
    },

    {
        id: 51,
        nombre: "Riñonera Urban Beige",
        categoria: "Accesorios",
        tipo: "Riñoneras",
        precio: 26999,
        imagen: "img/productos/accesorios/riñoneras3.jpg",
        destacado: false
    },

    {
        id: 52,
        nombre: "Riñonera Street Negra Premium",
        categoria: "Accesorios",
        tipo: "Riñoneras",
        precio: 28999,
        imagen: "img/productos/accesorios/riñoneras4.jpg",
        destacado: true
    },


    /*================================================
                    BILLETERAS
    ================================================*/

    {
        id: 53,
        nombre: "Billetera Urban Negra",
        categoria: "Accesorios",
        tipo: "Billeteras",
        precio: 18999,
        imagen: "img/productos/accesorios/billeteras1.jpg",
        destacado: false
    },

    {
        id: 54,
        nombre: "Billetera Street Negra",
        categoria: "Accesorios",
        tipo: "Billeteras",
        precio: 19999,
        imagen: "img/productos/accesorios/billeteras2.jpg",
        destacado: false
    },

    {
        id: 55,
        nombre: "Billetera Urban Gris",
        categoria: "Accesorios",
        tipo: "Billeteras",
        precio: 20999,
        imagen: "img/productos/accesorios/billeteras3.jpg",
        destacado: true
    },

    {
        id: 56,
        nombre: "Billetera Street Beige",
        categoria: "Accesorios",
        tipo: "Billeteras",
        precio: 21999,
        imagen: "img/productos/accesorios/billeteras4.jpg",
        destacado: false
    },


    /*================================================
                    CINTURONES
    ================================================*/

    {
        id: 57,
        nombre: "Cinturón Urban Negro",
        categoria: "Accesorios",
        tipo: "Cinturones",
        precio: 16999,
        imagen: "img/productos/accesorios/cinturones1.jpg",
        destacado: false
    },

    {
        id: 58,
        nombre: "Cinturón Urban Marrón",
        categoria: "Accesorios",
        tipo: "Cinturones",
        precio: 16999,
        imagen: "img/productos/accesorios/cinturones2.jpg",
        destacado: false
    },

    {
        id: 59,
        nombre: "Cinturón Street Negro",
        categoria: "Accesorios",
        tipo: "Cinturones",
        precio: 17999,
        imagen: "img/productos/accesorios/cinturones3.jpg",
        destacado: true
    },

    {
        id: 60,
        nombre: "Cinturón Urban Beige",
        categoria: "Accesorios",
        tipo: "Cinturones",
        precio: 18999,
        imagen: "img/productos/accesorios/cinturones4.jpg",
        destacado: false
    }

];

/*====================================================
                FIN DE PRODUCTOS
====================================================*/
