/*====================================================
                    URBAN STYLE
                    CONTACTO.JS
                    PARTE 3/3
====================================================*/


/*====================================================
                    CONFIGURACIÓN
====================================================*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        iniciarContacto();

    }
);


/*====================================================
                    INICIAR CONTACTO
====================================================*/

function iniciarContacto() {

    console.log(
        "Página de contacto cargada correctamente."
    );


    iniciarFormulario();

    iniciarAnimacionesContacto();

    iniciarBotonesContacto();

}


/*====================================================
                    FORMULARIO
====================================================*/

function iniciarFormulario() {

    const formulario =
        document.getElementById(
            "formulario-contacto"
        );


    if (!formulario) {

        return;

    }


    formulario.addEventListener(
        "submit",
        (evento) => {

            evento.preventDefault();


            const nombre =
                document.getElementById(
                    "nombre"
                );


            const email =
                document.getElementById(
                    "email"
                );


            const asunto =
                document.getElementById(
                    "asunto"
                );


            const mensaje =
                document.getElementById(
                    "mensaje"
                );


            if (
                !nombre ||
                !email ||
                !asunto ||
                !mensaje
            ) {

                return;

            }


            const nombreValor =
                nombre.value.trim();


            const emailValor =
                email.value.trim();


            const asuntoValor =
                asunto.value.trim();


            const mensajeValor =
                mensaje.value.trim();


            if (
                !nombreValor ||
                !emailValor ||
                !asuntoValor ||
                !mensajeValor
            ) {

                mostrarMensajeFormulario(
                    "Completá todos los campos antes de enviar.",
                    "error"
                );

                return;

            }


            if (!validarEmail(emailValor)) {

                mostrarMensajeFormulario(
                    "Ingresá un correo electrónico válido.",
                    "error"
                );

                return;

            }


            mostrarMensajeFormulario(
                `¡Gracias, ${nombreValor}! Tu mensaje fue enviado correctamente.`,
                "exito"
            );


            formulario.reset();

        }
    );

}


/*====================================================
                VALIDAR CORREO
====================================================*/

function validarEmail(email) {

    const expresion =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    return expresion.test(email);

}


/*====================================================
            MENSAJE DEL FORMULARIO
====================================================*/

function mostrarMensajeFormulario(
    mensaje,
    tipo
) {

    let mensajeElemento =
        document.querySelector(
            ".mensaje-formulario"
        );


    if (!mensajeElemento) {

        mensajeElemento =
            document.createElement(
                "div"
            );

        mensajeElemento.className =
            "mensaje-formulario";


        const formulario =
            document.getElementById(
                "formulario-contacto"
            );


        if (formulario) {

            formulario.prepend(
                mensajeElemento
            );

        }

    }


    mensajeElemento.textContent =
        mensaje;


    mensajeElemento.className =
        `mensaje-formulario ${tipo}`;


    mensajeElemento.classList.add(
        "mostrar"
    );


    clearTimeout(
        mensajeElemento._temporizador
    );


    mensajeElemento._temporizador =
        setTimeout(
            () => {

                mensajeElemento.classList.remove(
                    "mostrar"
                );

            },
            4000
        );

}


/*====================================================
                ANIMACIONES CONTACTO
====================================================*/

function iniciarAnimacionesContacto() {

    const elementos =
        document.querySelectorAll(
            ".contacto-card, .contacto-formulario, .contacto-info, .contacto-item"
        );


    if (!elementos.length) {

        return;

    }


    const observador =
        new IntersectionObserver(

            (entradas) => {

                entradas.forEach(
                    (entrada) => {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target.classList.add(
                                "visible"
                            );


                            observador.unobserve(
                                entrada.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    elementos.forEach(
        (elemento) => {

            elemento.classList.add(
                "animacion-scroll"
            );


            observador.observe(
                elemento
            );

        }
    );

}


/*====================================================
                BOTONES CONTACTO
====================================================*/

function iniciarBotonesContacto() {

    const botones =
        document.querySelectorAll(
            ".contacto-boton, .btn-contacto"
        );


    botones.forEach(
        (boton) => {

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

        }
    );

}


/*====================================================
                FIN PARTE 3/3
====================================================*/