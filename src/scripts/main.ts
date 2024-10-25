import '../styles/main.css';
//import typescriptLogo from './typescript.svg'
//import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts';

function initializeApp() {
  const appElement = document.querySelector<HTMLDivElement>('#app');
  if (appElement) {
    appElement.innerHTML = `
      <div>
        <h1>Hello World</h1>
        <button id="counter">Count</button>
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
