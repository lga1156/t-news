document.addEventListener('DOMContentLoaded', () => {
  const button1 = document.querySelector('.register-button');
  if (button) {
    button.addEventListener('click', () => {
      window.location.href = 'main-auth.html'; // путь к нужной странице
    });
  }

  const button2 = document.querySelector('.register-button');
  if (button) {
    button.addEventListener('click', () => {
      window.location.href = 'main-auth.html'; // путь к нужной странице
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.switch-btn');

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      // здесь же можно вызвать логику показа нужного раздела
    });
  });
});