/*
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

*/

//Код на jQuery
$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });

  //Функционал для кнопки прокрутки вверх
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
    });
      
    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
    var next = $('.swiper-button-next')
    var prev = $('.swiper-button-prev')
    var bullets = $('.swiper-pagination')

    next.css('left', prev.width() + 10 + bullets.width() + 10)  //Вычисляем расстояние до правой стрелки
    bullets.css('left', prev.width() + 10)

    //initialize swiper when document ready
    var Swiper2 = new Swiper ('.swiper-container-2', {
      loop: true,
      pagination: {
        el: '.swiper-pagination-2',
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
      }
    })
    var next2 = $('.swiper-button-next-2')
    var prev2 = $('.swiper-button-prev-2')
    var bullets2 = $('.swiper-pagination-2')

    next2.css('left', prev2.width() + 10 + bullets2.width() + 10)  //Вычисляем расстояние до правой стрелки
    bullets2.css('left', prev2.width() + 10)

});