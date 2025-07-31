export function renderHome() {
  return `
    <header class="site-header">
      <div class="site-header__inner">
        <a href="#/home" class="header-logo" aria-label="На главную страницу">
          <img src="public/pics/logo.svg" alt="Логотип T-News"/>
        </a>

        <form class="header-search-form" role="search" aria-label="Поиск">
          <input
            type="text"
            id="header-search-input"
            class="header-search-input"
            placeholder="Поиск по T-News"
            aria-label="Поиск"
          />
        </form>

        <nav class="header-user-nav" aria-label="Пользовательские действия">
          <a href="#/signup" class="header-signup-btn" aria-label="На страницу регистрации">
            Зарегистрироваться
            <img src="public/pics/logout.svg" alt="Логотип регистрации"/>
          </a>
          <a href="#/login" class="header-login-btn" aria-label="На страницу авторизации">
            Войти
            <img src="public/pics/logout.svg" alt="Логотип авторизации"/>
          </a>
        </nav>
      </div>
    </header>

    <main class="main-content">
   
    <article class="post-card">
  <header class="post-header">
    <img 
      src="public/pics/profile-photo.webp" 
      alt="Аватар пользователя"
      class="post-avatar"
    />
    <h3 class="post-author">Луций Анней Сенека</h3>
  </header>

  <main class="post-main">
    <p class="post-text">
      Человек, которого застеклённые окна защищали от малейшего дуновения, на чьих ногах постоянно менялись мягкие согревающие повязки, у кого в столовой под полом и в стенах всегда работало отопление, подвергается смертельной опасности, даже если его коснётся самый лёгкий ветерок.
    </p>
  </main>

  <footer class="post-footer">
    <button class="like-btn">
      <img 
      src="public/pics/like.svg" 
      alt="Нравится"
      aria-hidden="true">
      <span class="like-count">21</span>
    </button>

    <button class="comment-btn">
      Комментарии <span class="comment-count">1</span>
    </button>
  </footer>
</article>

<article class="post-card">
  <header class="post-header">
    <img 
      src="public/pics/profile-photo.webp" 
      alt="Аватар пользователя"
      class="post-avatar"
    />
    <h3 class="post-author">Луций Анней Сенека</h3>
  </header>

  <main class="post-main">
    <p class="post-text">
      Говорят, что Гай Цезарь отличался помимо прочих немалочисленных своих пороков каким-то удивительным сладострастием в оскорблениях; ему непременно нужно было на всякого повесить какой-нибудь обидный ярлык, при том что сам он представлял собой благодатнейший материал для насмешек: омерзительная бледность, выдающая безумие; дикий взгляд глубоко спрятанных под старческим лбом глаз; неправильной формы безобразная лысая голова с торчащими там и сям жалкими волосёнками; прибавь к этому шею, заросшую толстенной щетиной, тонюсенькие ножки и чудовищно громадные ступни.
      При этом тот же Гай принимал за оскорбление любой пустяк, как это чаще всего и бывает: чем больше человек склонен обижать других, тем хуже он сам переносит обиды… 
    </p>
  </main>

  <footer class="post-footer">
    <button class="like-btn">
      <img 
      src="public/pics/like.svg" 
      alt="Нравится"
      aria-hidden="true">
      <span class="like-count">9</span>
    </button>

    <button class="comment-btn">
      Комментарии <span class="comment-count">5</span>
    </button>
  </footer>
</article>

    </main>
  `;
}
