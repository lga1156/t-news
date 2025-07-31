export function renderLogin() {
  return `
    <header class="site-header">
      <div class="site-header__inner">
        <a href="#/home" class="header-logo" aria-label="На главную страницу">
          <img src="public/pics/logo.svg" alt="Логотип T-News"/>
        </a>
    </header>

  <main class="main-content">
    <section class="register-form">
  <div class="register-form__container">
    <h3 class="register-form__title">Вход</h3>
    
    <form class="register-form__form" action="#" method="POST">
      <input 
        type="text" 
        name="login" 
        class="register-form__input" 
        placeholder="Логин" 
        required
      />
      <input 
        type="password" 
        name="password" 
        class="register-form__input" 
        placeholder="Пароль" 
        required
      />
      
      <div class="register-form__actions">
        <button 
          type="button" 
          class="register-form__link"
        >
          Зарегистрироваться
        </button>
        <button 
          type="submit" 
          class="register-form__submit"
        >
          Войти
        </button>
      </div>
    </form>
  </div>
</section>
</main>
  `;
}
