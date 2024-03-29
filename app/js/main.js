const objektHtml = document.querySelector('._active');
const text = 'фрипсы';

let i = 0;
function runLine() {
  if (i++ < text.length) {
    objektHtml.innerHTML = text.substring(0, i) + '|'
  }
  else {
    objektHtml.innerHTML = "";
    i = 0;
  }
  dossne = setTimeout('runLine()', 500)
}
runLine();


document.addEventListener('DOMContentLoaded', function() {
  let openBlock = document.querySelectorAll('.open');
  let openText = document.querySelectorAll('.catalog-pastil__description-product');

  for(let i = 0; i < openBlock.length;i++) {
    openBlock[i].addEventListener('click', function() {
      openText[i].classList.toggle('open-text')
      openBlock[i].classList.toggle('open_active')
    });
  }
});





let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.anim');
for (let elm of elements){
  observer.observe(elm);
}

function onEntry(entry){
  entry.forEach(change => {
      if(change.isIntersecting){
          change.target.classList.add('scrol');
      } else{
      change.target.classList.remove('scrol');
      }
  });
}



// создание светлой и темной темы при обновлении страницы тема запоминается и остается 

const body = document.body;
const theme = document.querySelector('.theme');
let mode = 'light';

if (!localStorage.getItem('mode')) {
  localStorage.setItem('mode', mode);
} else {
  mode = localStorage.getItem('mode');
}

if (mode === 'dark') {
  themeModeToggle(mode);
}
// делается клик на 2 кнопки для смены иконки при изменении темы
theme.addEventListener('click', () => {
  document.querySelector('.theme__light').classList.toggle('active');
  document.querySelector('.theme__dark').classList.toggle('active');
  // если переменная mode = светлой теме тогда при клике включается функция прописаная ниже с темной темой
  // если = темной то включается переменная со светлой темой
  if (mode === 'light') {
    themeModeToggle('dark');
  } else {
    themeModeToggle('light')
  }
  localStorage.setItem('mode', mode);
});

// нажимаем на кнопку добавляется класс dark-mode вкл темная тема ,нажимаем еще раз dark-mode очищается и включается светлая тема
function themeModeToggle(newMode) {
  if (newMode === 'dark') {
    body.className = 'dark-mode';
    mode = 'dark';
  } else {
    body.className = '';
    mode = 'light';
  }
}











