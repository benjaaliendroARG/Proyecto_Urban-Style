/*====================================
        URBAN STYLE
        SCRIPT PRINCIPAL
=====================================*/

console.log("Urban Style cargado correctamente.");


/*====================================
        PRODUCTOS DESTACADOS
=====================================*/

const productos = [

    {
        id: 1,
        nombre: "Buzo Oversize Negro",
        categoria: "Hombre",
        tipo: "Buzos",
        precio: 54999,
        imagen: "img/productos/hombre/buzos1.jpg",
        destacado: true
    },

    {
        id: 2,
        nombre: "Campera Urbana",
        categoria: "Hombre",
        tipo: "Camperas",
        precio: 68999,
        imagen: "img/productos/hombre/camperas1.jpg",
        destacado: true
    },

    {
        id: 3,
        nombre: "Buzo Mujer Beige",
        categoria: "Mujer",
        tipo: "Buzos",
        precio: 52999,
        imagen: "img/productos/mujer/buzosM1.jpg",
        destacado: true
    },

    {
        id: 4,
        nombre: "Remera Mujer",
        categoria: "Mujer",
        tipo: "Remeras",
        precio: 28999,
        imagen: "img/productos/mujer/remerasM1.jpg",
        destacado: true
    },

    {
        id: 5,
        nombre: "Gorra Urban",
        categoria: "Accesorios",
        tipo: "Gorras",
        precio: 15999,
        imagen: "img/productos/accesorios/gorras1.jpg",
        destacado: true
    },

    {
        id: 6,
        nombre: "Mochila Street",
        categoria: "Accesorios",
        tipo: "Mochilas",
        precio: 39999,
        imagen: "img/productos/accesorios/mochilas1.jpg",
        destacado: true
    }

];


/*====================================
    MOSTRAR PRODUCTOS DESTACADOS
=====================================*/

function mostrarProductosDestacados() {

    const contenedor = document.getElementById("contenedor-productos");

    if (!contenedor) return;

    const destacados = productos.filter(producto => producto.destacado);

    contenedor.innerHTML = "";

    destacados.forEach(producto => {

        contenedor.innerHTML += `

       <article class="producto-card animacion-scroll" data-id="${producto.id}">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <div class="producto-info">

                <h3>${producto.nombre}</h3>

                <p>${producto.tipo}</p>

                <h2>$${producto.precio.toLocaleString("es-AR")}</h2>

                <div class="producto-botones">

                    <button class="btn-favorito">
                        ❤️
                    </button>

                    <button class="btn-comprar">
                        Agregar al carrito
                    </button>

                </div>

            </div>

        </article>

        `;

    });

}
/*====================================
        MOSTRAR PRODUCTOS
=====================================*/

function mostrarProductos(listaProductos) {

    const contenedor = document.getElementById("contenedor-productos");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    listaProductos.forEach(producto => {

        contenedor.innerHTML += `

        <article class="producto-card animacion-scroll">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <div class="producto-info">

                <h3>${producto.nombre}</h3>

                <p>${producto.tipo}</p>

                <h2>$${producto.precio.toLocaleString("es-AR")}</h2>

                <div class="producto-botones">

                    <button class="btn-favorito">

                        ❤️

                    </button>

                    <button class="btn-comprar">

                        Agregar al carrito

                    </button>

                </div>

            </div>

        </article>

        `;

    });

    activarBotonesProductos();
    
}



/*====================================
        BUSCADOR PRODUCTOS
=====================================*/

function iniciarBuscador() {

    const buscador = document.getElementById("busqueda");

    if (!buscador) return;

    buscador.addEventListener("input", () => {

        const texto = buscador.value.toLowerCase().trim();

        const filtrados = productos.filter(producto =>

            producto.nombre.toLowerCase().includes(texto) ||

            producto.tipo.toLowerCase().includes(texto) ||

            producto.categoria.toLowerCase().includes(texto)

        );

        mostrarProductos(filtrados);

    });

}
/*====================================
        CARRITO Y FAVORITOS
=====================================*/

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];



/*====================================
        ACTUALIZAR CONTADOR
=====================================*/

function actualizarContador() {

    const contador = document.getElementById("contador-carrito");

    if (!contador) return;

    contador.textContent = carrito.length;

}



/*====================================
        GUARDAR DATOS
=====================================*/

function guardarDatos() {

    localStorage.setItem("carrito", JSON.stringify(carrito));

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

}
/*====================================
        BUSCAR PRODUCTO POR ID
=====================================*/

function obtenerProducto(id){

    return productos.find(producto => producto.id === id);

}

/*====================================
        NOTIFICACIÓN
=====================================*/

function mostrarNotificacion(texto){

    const mensaje = document.createElement("div");

    mensaje.className = "notificacion";

    mensaje.textContent = texto;

    document.body.appendChild(mensaje);



    setTimeout(()=>{

        mensaje.classList.add("mostrar");

    },100);



    setTimeout(()=>{

        mensaje.classList.remove("mostrar");



        setTimeout(()=>{

            mensaje.remove();

        },300);

    },2200);

}
/*====================================
        ANIMACIÓN AL HACER SCROLL
=====================================*/

function iniciarAnimacionesScroll() {

    const elementos = document.querySelectorAll(".animacion-scroll");

    const observer = new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("mostrar");

            }

        });

    }, {
        threshold: 0.15
    });

    elementos.forEach((elemento) => {

        observer.observe(elemento);

    });

}







/*====================================
        EVENTOS PRODUCTOS
=====================================*/

function activarBotonesProductos(){

    const tarjetas = document.querySelectorAll(".producto-card");



    tarjetas.forEach((tarjeta)=>{

        const id = Number(tarjeta.dataset.id);

        const btnComprar = tarjeta.querySelector(".btn-comprar");

        const btnFavorito = tarjeta.querySelector(".btn-favorito");



        if(favoritos.includes(id)){

            btnFavorito.textContent = "❤️";

        }

        else{

            btnFavorito.textContent = "🤍";

        }



        btnComprar.addEventListener("click",()=>{

            carrito.push(id);

            guardarDatos();

            actualizarContador();

            mostrarNotificacion("Producto agregado al carrito.");

        });



        btnFavorito.addEventListener("click",()=>{

            if(favoritos.includes(id)){

                favoritos = favoritos.filter(f=>f!==id);

                btnFavorito.textContent="🤍";

            }

            else{

                favoritos.push(id);

                btnFavorito.textContent="❤️";

            }

            guardarDatos();

        });

    });

}

/*====================================
        INICIALIZAR PÁGINA
=====================================*/

document.addEventListener("DOMContentLoaded", () => {

    mostrarProductos(productos.filter(producto => producto.destacado));

    iniciarBuscador();

    actualizarContador();

    iniciarAnimacionesScroll();

    iniciarCarrusel();

});