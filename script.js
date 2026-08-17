/*====================================================
                    URBAN STYLE
                    SCRIPT.JS
                    PARTE 1/3
====================================================*/


/*====================================================
                    CONFIGURACIÓN
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    iniciarPagina();

});


/*====================================================
                    INICIAR PÁGINA
====================================================*/

function iniciarPagina() {

    console.log("Urban Style cargado correctamente.");

    iniciarAnimaciones();

    iniciarAnimacionesScroll();

    iniciarNavegacion();

    iniciarBuscador();

    iniciarBotonesHeader();

    cargarProductosDestacados();

}


/*====================================================
                    ANIMACIONES INICIALES
====================================================*/

function iniciarAnimaciones() {

    const logo = document.querySelector(".logo");

    if (logo) {

        logo.classList.add("animar-logo");

    }


    const hero = document.querySelector(".hero");

    if (hero) {

        hero.classList.add("animar-hero");

    }


    const categorias = document.querySelectorAll(".categoria");

    categorias.forEach((categoria, index) => {

        categoria.style.transitionDelay =
            `${index * 0.08}s`;

    });


    const beneficios = document.querySelectorAll(".beneficio");

    beneficios.forEach((beneficio, index) => {

        beneficio.style.transitionDelay =
            `${index * 0.08}s`;

    });

}


/*====================================================
                ANIMACIONES AL HACER SCROLL
====================================================*/

function iniciarAnimacionesScroll() {

    const elementos = document.querySelectorAll(
        ".categoria, .producto-card, .beneficio"
    );


    if (!elementos.length) {

        return;

    }


    const observador = new IntersectionObserver(

        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                    observador.unobserve(
                        entrada.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    elementos.forEach((elemento) => {

        elemento.classList.add("animacion-scroll");

        observador.observe(elemento);

    });

}


/*====================================================
                    NAVEGACIÓN
====================================================*/

function iniciarNavegacion() {

    const enlaces = document.querySelectorAll(".nav-link");


    enlaces.forEach((enlace) => {

        enlace.addEventListener("click", () => {

            enlaces.forEach((item) => {

                item.classList.remove("activo");

            });


            enlace.classList.add("activo");

        });

    });

}


/*====================================================
                    BUSCADOR
====================================================*/

function iniciarBuscador() {

    const input = document.getElementById("buscador");

    const boton = document.getElementById("btn-buscar");


    if (!input || !boton) {

        return;

    }


    function realizarBusqueda() {

        const texto = input.value.trim();


        if (!texto) {

            input.focus();

            return;

        }


        console.log(
            "Buscando producto:",
            texto
        );


        const productos = document.querySelectorAll(
            ".producto-card"
        );


        if (!productos.length) {

            return;

        }


        const textoBusqueda =
            texto.toLowerCase();


        let encontrados = 0;


        productos.forEach((producto) => {

            const contenido =
                producto.textContent.toLowerCase();


            if (
                contenido.includes(textoBusqueda)
            ) {

                producto.style.display = "";

                encontrados++;

            } else {

                producto.style.display = "none";

            }

        });


        const contenedor =
            document.querySelector(".productos-destacados");


        if (
            contenedor &&
            encontrados > 0
        ) {

            contenedor.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }


    boton.addEventListener(
        "click",
        realizarBusqueda
    );


    input.addEventListener(
        "keydown",
        (evento) => {

            if (evento.key === "Enter") {

                realizarBusqueda();

            }

        }
    );


    input.addEventListener(
        "input",
        () => {

            if (!input.value.trim()) {

                const productos =
                    document.querySelectorAll(
                        ".producto-card"
                    );


                productos.forEach((producto) => {

                    producto.style.display = "";

                });

            }

        }
    );

}


/*====================================================
                BOTONES DEL HEADER
====================================================*/

function iniciarBotonesHeader() {

    const botones =
        document.querySelectorAll(".btn-header");


    botones.forEach((boton) => {

        boton.addEventListener(
            "click",
            () => {

                boton.classList.add(
                    "boton-presionado"
                );


                setTimeout(() => {

                    boton.classList.remove(
                        "boton-presionado"
                    );

                }, 180);

            }
        );

    });


    const carrito =
        document.getElementById(
            "btn-carrito"
        );


    if (carrito) {

        carrito.addEventListener(
            "click",
            () => {

                console.log(
                    "Carrito seleccionado."
                );

            }
        );

    }


    const favoritos =
        document.getElementById(
            "btn-favoritos"
        );


    if (favoritos) {

        favoritos.addEventListener(
            "click",
            () => {

                console.log(
                    "Favoritos seleccionados."
                );

            }
        );

    }

}


/*====================================================
                FIN PARTE 1/3
====================================================*/
/*====================================================
                PRODUCTOS E INTERACCIONES
                    SCRIPT.JS
                    PARTE 2/3
====================================================*/


/*====================================================
                CONFIGURAR TARJETAS
====================================================*/

function configurarTarjetasProductos() {

    const tarjetas =
        document.querySelectorAll(
            ".producto-card"
        );


    if (!tarjetas.length) {

        return;

    }


    tarjetas.forEach((tarjeta) => {

        configurarFavorito(tarjeta);

        configurarCarrito(tarjeta);

        configurarAnimacionTarjeta(tarjeta);

    });

}


/*====================================================
                    FAVORITOS
====================================================*/

function configurarFavorito(tarjeta) {

    const boton =
        tarjeta.querySelector(
            ".btn-favorito"
        );


    if (!boton) {

        return;

    }


    boton.addEventListener(
        "click",
        (evento) => {

            evento.preventDefault();

            evento.stopPropagation();


            const activo =
                boton.classList.toggle(
                    "favorito-activo"
                );


            if (activo) {

                boton.innerHTML =
                    "❤️";

                boton.setAttribute(
                    "title",
                    "Quitar de favoritos"
                );


                boton.classList.add(
                    "animacion-favorito"
                );


                setTimeout(() => {

                    boton.classList.remove(
                        "animacion-favorito"
                    );

                }, 350);


            } else {

                boton.innerHTML =
                    "🤍";

                boton.setAttribute(
                    "title",
                    "Agregar a favoritos"
                );

            }

        }
    );

}


/*====================================================
                    CARRITO
====================================================*/

function configurarCarrito(tarjeta) {

    const boton =
        tarjeta.querySelector(
            ".btn-comprar"
        );


    if (!boton) {

        return;

    }


    boton.addEventListener(
        "click",
        (evento) => {

            evento.preventDefault();

            evento.stopPropagation();


            agregarProductoAlCarrito(
                tarjeta
            );

        }
    );

}


/*====================================================
            AGREGAR PRODUCTO AL CARRITO
====================================================*/

function agregarProductoAlCarrito(
    tarjeta
) {

    const nombreElemento =
        tarjeta.querySelector("h3");


    const precioElemento =
        tarjeta.querySelector("h2");


    if (
        !nombreElemento ||
        !precioElemento
    ) {

        return;

    }


    const nombre =
        nombreElemento.textContent.trim();


    const precioTexto =
        precioElemento.textContent.trim();


    console.log(
        "Producto agregado:",
        nombre,
        precioTexto
    );


    animarCarrito();


    mostrarNotificacion(
        `${nombre} fue agregado al carrito.`
    );

}


/*====================================================
                ANIMACIÓN DEL CARRITO
====================================================*/

function animarCarrito() {

    const carrito =
        document.getElementById(
            "btn-carrito"
        );


    if (!carrito) {

        return;

    }


    carrito.classList.add(
        "carrito-animado"
    );


    setTimeout(() => {

        carrito.classList.remove(
            "carrito-animado"
        );

    }, 450);

}


/*====================================================
                NOTIFICACIÓN
====================================================*/

function mostrarNotificacion(
    mensaje
) {

    let notificacion =
        document.querySelector(
            ".notificacion"
        );


    if (!notificacion) {

        notificacion =
            document.createElement(
                "div"
            );

        notificacion.className =
            "notificacion";

        document.body.appendChild(
            notificacion
        );

    }


    notificacion.textContent =
        mensaje;


    notificacion.classList.add(
        "mostrar"
    );


    clearTimeout(
        notificacion._temporizador
    );


    notificacion._temporizador =
        setTimeout(() => {

            notificacion.classList.remove(
                "mostrar"
            );

        }, 2500);

}


/*====================================================
            ANIMACIÓN TARJETAS PRODUCTO
====================================================*/

function configurarAnimacionTarjeta(
    tarjeta
) {

    tarjeta.addEventListener(
        "mouseenter",
        () => {

            tarjeta.classList.add(
                "producto-hover"
            );

        }
    );


    tarjeta.addEventListener(
        "mouseleave",
        () => {

            tarjeta.classList.remove(
                "producto-hover"
            );

        }
    );

}


/*====================================================
                ACTUALIZAR CONTADOR
====================================================*/

function actualizarContadorCarrito(
    cantidad
) {

    const contador =
        document.getElementById(
            "contador-carrito"
        );


    if (!contador) {

        return;

    }


    contador.textContent =
        cantidad;


    contador.classList.add(
        "contador-actualizado"
    );


    setTimeout(() => {

        contador.classList.remove(
            "contador-actualizado"
        );

    }, 300);

}
/*====================================================
                CREAR TARJETA PRODUCTO
====================================================*/

function crearTarjetaProducto(
    producto,
    indice = 0
) {

    return `

        <article
            class="producto-card animacion-scroll"
            data-id="${producto.id}"
            style="--delay: ${indice * 0.05}s"
        >

            <div class="producto-imagen">

                <img
                    src="${window.location.pathname.includes("/html/") ? "../" : ""}${producto.imagen}"
                    alt="${producto.nombre}"
                    loading="lazy"
                >

            </div>


            <div class="producto-info">

                <p class="producto-categoria">
                    ${producto.tipo}
                </p>


                <h3>
                    ${producto.nombre}
                </h3>


                <h2>
                    ${formatearPrecio(
                        producto.precio
                    )}
                </h2>


                <div class="producto-botones">

                    <button
                        class="btn-favorito"
                        type="button"
                        data-id="${producto.id}"
                        title="Agregar a favoritos"
                        aria-label="Agregar ${producto.nombre} a favoritos"
                    >

                        <i class="fa-regular fa-heart"></i>

                    </button>


                    <button
                        class="btn-comprar"
                        type="button"
                        data-id="${producto.id}"
                    >

                        Agregar al carrito

                    </button>

                </div>

            </div>

        </article>

    `;

}

/*====================================================
                PRODUCTOS DESTACADOS
====================================================*/

function cargarProductosDestacados() {

    const contenedor =
        document.getElementById(
            "productos-destacados"
        );


    if (!contenedor) {

        return;

    }


    /*----------------------------------------------
                VERIFICAR PRODUCTOS
    ----------------------------------------------*/

    if (
        typeof productos === "undefined" ||
        !Array.isArray(productos)
    ) {

        console.error(
            "No se encontró el array de productos."
        );

        return;

    }


    /*----------------------------------------------
                SELECCIONAR DESTACADOS
    ----------------------------------------------*/

    const destacados =
        productos.slice(0, 6);


    /*----------------------------------------------
                LIMPIAR CONTENEDOR
    ----------------------------------------------*/

    contenedor.innerHTML = "";


    /*----------------------------------------------
                CREAR TARJETAS
    ----------------------------------------------*/

    destacados.forEach(
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


    /*----------------------------------------------
                CONFIGURAR TARJETAS
    ----------------------------------------------*/

    configurarTarjetasProductos();


    /*----------------------------------------------
                ANIMACIONES
    ----------------------------------------------*/

    iniciarAnimacionesScroll();

}

/*====================================================
                OBSERVAR NUEVAS TARJETAS
====================================================*/

function observarProductos() {

    const contenedor =
        document.getElementById(
            "productos-destacados"
        );


    if (!contenedor) {

        return;

    }


    const observador =
        new MutationObserver(() => {

            configurarTarjetasProductos();

            iniciarAnimacionesScroll();

        });


    observador.observe(
        contenedor,
        {
            childList: true,
            subtree: true
        }
    );

}


/*====================================================
                INICIAR PRODUCTOS
====================================================*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        configurarTarjetasProductos();

        observarProductos();

    }
);


/*====================================================
                FIN PARTE 2/3
====================================================*/
/*====================================================
                CONFIGURACIÓN FINAL
                    SCRIPT.JS
                    PARTE 3/3
====================================================*/


/*====================================================
                ANIMACIÓN DEL LOGO
====================================================*/

function configurarAnimacionLogo() {

    const logo =
        document.querySelector(".logo");


    if (!logo) {

        return;

    }


    logo.addEventListener(
        "mouseenter",
        () => {

            logo.classList.add(
                "logo-hover"
            );

        }
    );


    logo.addEventListener(
        "mouseleave",
        () => {

            logo.classList.remove(
                "logo-hover"
            );

        }
    );

}


/*====================================================
                ANIMACIÓN DE BOTONES
====================================================*/

function configurarAnimacionBotones() {

    const botones =
        document.querySelectorAll(
            "button, .btn-hero"
        );


    botones.forEach((boton) => {

        boton.addEventListener(
            "mousedown",
            () => {

                boton.classList.add(
                    "boton-presionado"
                );

            }
        );


        boton.addEventListener(
            "mouseup",
            () => {

                boton.classList.remove(
                    "boton-presionado"
                );

            }
        );


        boton.addEventListener(
            "mouseleave",
            () => {

                boton.classList.remove(
                    "boton-presionado"
                );

            }
        );

    });

}


/*====================================================
                ANIMACIÓN DEL HERO
====================================================*/

function configurarHero() {

    const hero =
        document.querySelector(
            ".hero"
        );


    if (!hero) {

        return;

    }


    setTimeout(() => {

        hero.classList.add(
            "hero-cargado"
        );

    }, 100);

}


/*====================================================
                ENLACES EXTERNOS
====================================================*/

function configurarEnlaces() {

    const enlaces =
        document.querySelectorAll(
            "a"
        );


    enlaces.forEach((enlace) => {

        enlace.addEventListener(
            "click",
            () => {

                enlace.classList.add(
                    "enlace-seleccionado"
                );


                setTimeout(() => {

                    enlace.classList.remove(
                        "enlace-seleccionado"
                    );

                }, 200);

            }
        );

    });

}


/*====================================================
                BOTÓN VOLVER ARRIBA
====================================================*/

function crearBotonArriba() {

    const boton =
        document.createElement(
            "button"
        );


    boton.className =
        "btn-volver-arriba";


    boton.innerHTML =
        '<i class="fa-solid fa-arrow-up"></i>';


    boton.setAttribute(
        "aria-label",
        "Volver arriba"
    );


    document.body.appendChild(
        boton
    );


    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 500
            ) {

                boton.classList.add(
                    "mostrar"
                );

            } else {

                boton.classList.remove(
                    "mostrar"
                );

            }

        }
    );


    boton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/*====================================================
                DETECTAR PÁGINA ACTUAL
====================================================*/

function detectarPaginaActual() {

    const ruta =
        window.location.pathname
            .split("/")
            .pop();


    const enlaces =
        document.querySelectorAll(
            ".nav-link"
        );


    enlaces.forEach((enlace) => {

        const href =
            enlace
                .getAttribute("href")
                ?.split("/")
                .pop();


        if (
            href &&
            href === ruta
        ) {

            enlace.classList.add(
                "activo"
            );

        }

    });

}


/*====================================================
                CARGA COMPLETA
====================================================*/

function iniciarTodo() {

    configurarAnimacionLogo();

    configurarAnimacionBotones();

    configurarHero();

    configurarEnlaces();

    detectarPaginaActual();

    crearBotonArriba();

    configurarTarjetasProductos();

}


/*====================================================
                INICIAR TODO
====================================================*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        iniciarTodo();

    }
);


/*====================================================
                FIN SCRIPT.JS
====================================================*/