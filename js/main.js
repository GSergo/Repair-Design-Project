//Проверяет, прогрузилось ли DOM-дерево
document.addEventListener("DOMContentLoaded", function(event) { 
  //Записываем модальное окно в переменную
  const modal = document.querySelector('.modal'); 
  //Записываем кнопку, вызывающую модальное окно, в переменную (отслеживаем по аттрибуту)
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');

  
  //Функция для вызова модального окна
  const switchModal = () => {
    //При клике присваиваем класс "modal--visible"
    modal.classList.toggle('modal--visible');
  }

  //Перебираем все кнопки, отслеживаем, был ли клик, выводим модальное окно
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);

  });

  //Закрываем мод.окно (toggle убирает класс visible)
  closeBtn.addEventListener('click', switchModal);

  //Убирает модальное окно при нажатии на Esc
  document.addEventListener('keydown', function (esc) {
    if (esc.keyCode === 27) {
      modal.classList.remove('modal--visible');
    };
  });

  //Убирает модальное окно при клике вне модального окна
  //Пока не работает!
  document.addEventListener('click', function (e) {

    if (!body) {
      modal.classList.remove('modal--visible');
    };
  });

  console.log(modal.classList);


});