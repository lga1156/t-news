// src/main.js
import { renderHome } from './pages/home.js';
import { renderSignup } from './pages/signup.js';
import { renderLogin } from './pages/login.js';
import { renderProfile } from './pages/profile.js';

// src/main.js
import './style.css'; // Глобальные стили
import './styles/home.css'; // Стили для главной
import './styles/authorization.css'; // Стили для окна регистрации
import './styles/profile.css'; // Стили для профиля
// ... остальной код
// Импортируйте другие страницы...

const app = document.getElementById('app');

function renderPage(page) {
  switch (page) {
    case 'home':
      app.innerHTML = renderHome();
      break;
    case 'signup':
      app.innerHTML = renderSignup();
      break;
    case 'login':
      app.innerHTML = renderLogin(); // Используем функцию для страницы входа
      break;
    case 'profile':
      app.innerHTML = renderProfile(); // Используем функцию для страницы профиля
      break;
    default:
      app.innerHTML = `<h1>404</h1><a href="#/home">Вернуться на главную</a>`;
  }
}

// Инициализация
window.addEventListener('hashchange', () => {
  const page = window.location.hash.replace('#/', '') || 'home';
  renderPage(page);
});

window.addEventListener('load', () => {
  const page = window.location.hash.replace('#/', '') || 'home';
  renderPage(page);
});
