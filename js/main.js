//Проверяет, прогрузилось ли DOM-дерево
document.addEventListener("DOMContentLoaded", function(event) { 
  //Записываем модальное окно в переменную
  const modal = document.querySelector('.modal'); 
  //Записываем кнопку, вызывающую модальное окно, в переменную (отслеживаем по аттрибуту)
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  
  const closeBtn = document.querySelector('.modal__close')
  //Функция для вызова моадльного окна
  const switchModal = () => {
    //При клике присваиваем кнопке класс "modal--visible"
    modal.classList.toggle('modal--visible');
  }

  //Перебираем все кнопки, отслеживаем, был ли клик, выводим моадльное окно
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal)

  });

  //Закрываем мод.окно (toggle убирает класс visible)
  closeBtn.addEventListener('click', switchModal)
});