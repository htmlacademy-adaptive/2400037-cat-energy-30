/* в этот файл добавляет скрипты*/

// НАВИГАЦИЯ ШАПКИ(mobile burger menu)
const navButton = document.querySelector('.nav__button');
const navMain = document.querySelector('.nav');

navMain.classList.remove('nav--no-js');
navButton.addEventListener('click', () => {
  if (navMain.classList.contains('nav--open')) {
    navMain.classList.remove('nav--open');
    navMain.classList.add('nav--close');
  } else {
    navMain.classList.remove('nav--close');
    navMain.classList.add('nav--open');
  }
});

