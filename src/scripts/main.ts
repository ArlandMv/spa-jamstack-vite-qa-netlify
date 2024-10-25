import '../styles/main.css';
//import typescriptLogo from './typescript.svg'
//import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts';

function initializeApp() {
  const appElement = document.querySelector<HTMLDivElement>('#app');
  if (appElement) {
    appElement.innerHTML = `
      <div>
        <!--h1>Hello World</h1-->
      </div>
    `;

    // Inicializa el contador
    setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
  } else {
    console.error('App element not found!');
  }
}

// Ejecutar la función de inicialización wooo
initializeApp();

// Rotación de eslóganes
const slogans = [
  'Cada ocasión merece flores',
  'Dale vida a tus celebraciones',
  'La alegría florece aquí',
];
let currentSlogan = 0;

function rotateSlogan() {
  const sloganElement = document.getElementById('slogan');
  currentSlogan = (currentSlogan + 1) % slogans.length;
  sloganElement!.textContent = slogans[currentSlogan];
}

setInterval(rotateSlogan, 3000);

// Modal de contacto
function openModal() {
  document.getElementById('contactModal')!.style.display = 'block';
}

function closeModal() {
  document.getElementById('contactModal')!.style.display = 'none';
}

// Cerrar modal al hacer clic fuera
window.onclick = function (event) {
  const modal = document.getElementById('contactModal');
  if (event.target === modal) {
    closeModal();
  }
};

// Formulario de contacto
document
  .getElementById('contactForm')!
  .addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Gracias por tu mensaje. Te contactaremos pronto.');
    closeModal();
  });

// Cuestionario personalizado
function openQuiz() {
  alert('Próximamente: Cuestionario personalizado para crear tu arreglo ideal');
}

// Deshabilitar enlaces no disponibles
document.querySelectorAll('.disabled').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Esta función estará disponible próximamente');
  });
});
