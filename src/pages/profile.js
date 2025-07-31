export function renderProfile() {
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

    <section class="profile">
  <!-- аватар + кнопка -->
  <div class="profile-avatar-wrapper">
    <img src="img/vkafcu2emkgl-gesiod.webp"
         alt="Аватар Луция Аннея Сенеки"
         class="profile-avatar">

    <button class="profile-photo-change" type="button">
      Изменить фото
    </button>
  </div>

  <!-- основная информация -->
  <div class="profile-info">
    <!-- имя + «карандаш» + «Подписаться» -->
    <div class="profile-header">
      <h1 class="profile-name">Луций&nbsp;Анней&nbsp;Сенека</h1>

      <button class="profile-edit" aria-label="Редактировать имя">
        <img src="img/MaterialSymbolsEditSquareOutline.svg" alt="" aria-hidden="true">
      </button>

      <button class="subscribe-btn" type="button">
        Подписаться
      </button>
    </div>

    <!-- биография -->
    <p class="profile-bio">
      Римский философ-стоик, поэт и государственный деятель.
      Воспитатель Нерона и один из крупнейших представителей стоицизма.
      Сын Луция (Марка) Аннея Сенеки Старшего (выдающегося оратора
      и историка) и Гельвии, младший брат Юния Галлиона. Автор
      «Нравственных писем к Луцилию», ряда философских трактатов и трагедий
      <button class="profile-edit" aria-label="Редактировать текст">
        <img src="img/MaterialSymbolsEditSquareOutline.svg" alt="" aria-hidden="true">
      </button>
    </p>
  </div>
</section>


  <!-- ===== Список комментариев ===== -->
<form class="add-post" action="#" method="post">
  <textarea class="post-input"
            placeholder="Введите свой пост"
            rows="3" required></textarea>

  <button class="send-btn" type="button">Отправить</button>
</form>

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
      Говорят, что Гай Цезарь отличался помимо прочих немалочисленных своих пороков каким-то удивительным сладострастием в оскорблениях; ему непременно нужно было на всякого повесить какой-нибудь обидный ярлык, при том что сам он представлял собой благодатнейший материал для насмешек
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
    `;
}
