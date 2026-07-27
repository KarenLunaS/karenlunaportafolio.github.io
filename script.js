//Función para abrir CV

document.addEventListener("DOMContentLoaded", () => {
    const elementosARevelar = document.querySelectorAll(".revelar");

    const observador = new IntersectionObserver((entradas, obs) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("activo");
                obs.unobserve(entrada.target); // Deja de observarlo una vez mostrado
            }
        });
    }, {
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    });

    elementosARevelar.forEach(elemento => observador.observe(elemento));
});

//función para cambiarle el tema a la pagina
document.addEventListener('DOMContentLoaded', () => {
    const bgCheckbox = document.getElementById('toggle-bg-checkbox');
    const tarjetas = document.querySelectorAll('.card, .texto-presentacion');

    // Verificamos que el elemento exista antes de agregar el evento
    if (bgCheckbox) {
        bgCheckbox.addEventListener('change', () => {
            const sinFondo = bgCheckbox.checked;

            document.body.classList.toggle('no-bg', sinFondo);

            tarjetas.forEach(tarjeta => {
                tarjeta.classList.toggle('no-bg', sinFondo);
            });
        });
    }
});

//Función para el link a repo en GitHub
const linkToroForrajero = document.getElementById("link1");

linkToroForrajero.addEventListener("click", function (event) {
    event.preventDefault(); // Evita que siga el href="#"
    window.open(
        "https://github.com/D-a-v-i-d-Vargas/Toro-Forrajero-Ecommerce",
        "_blank"
    );
});


//Función para el link a repo en GitHub
const linkVexa = document.getElementById("link2");

linkVexa.addEventListener("click", function (event) {
    event.preventDefault();
    window.open(
        "https://github.com/AriVeraI/Hackathon-1-GJFS",
        "_blank"
    );
});

