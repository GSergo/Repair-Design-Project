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

    //анимация 
    new WOW().init();

    //валидация формы
    //вспылывающая форма
    $('.modal__form').validate({
      errorClass: "invalid",  //меняем название класса
      rules: {
        userName: {
          required: true,
          minlength: 2
        },
        userPhone: {
          required: true,
          minlength: 17
        },
        userEmail: {
          required: true,
          email: true
        }
      },
      //сообщения 
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя не короче 2-х букв"
        },
        userPhone: {
          required: "Телефон обязателен",
          minlength: "Номер слишком короткий, проверьте написание"
        },
        userEmail: {
          required: "Обязательно укажите email",
          email: "Укажите email в формате name@domain.com"
        }
      },
      //Отправляем форму через Ajax
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),                  //Передаем все данные с формы в виде одной строки
          success: function (response) {
            $(form)[0].reset();                      //Очистка формы после отправки
            modal.removeClass('modal--visible');     //Закрываем форму
          }
        })
      }
    });

    //форма в блоке онлайн контроль
    $('.control__form').validate({
      errorClass: "invalid",  //меняем название класса
      rules: {
        userName: {
          required: true,
          minlength: 2
        },
        userPhone: {
          required: true,
          minlength: 17
        }
      }, //сообщения 
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя не короче 2-х букв"
        },
        userPhone: {
          required: "Телефон обязателен",
          minlength: "Номер слишком короткий, проверьте написание"
        },
      },
      //Отправляем форму через Ajax
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),                  //Передаем все данные с формы в виде одной строки
          success: function (response) {
            $(form)[0].reset();                      //Очистка формы после отправки
          }
        })
      }
    });

    //форма в футере
    $('.footer__form').validate({
      errorClass: "invalid",  //меняем назвнаие класса
      rules: {
        userName: {
          required: true,
          minlength: 2
        },
        userPhone: {
          required: true,
          minlength: 17
        },
        userQuestion: {
          required: true,
          minlength: 10
        }
      }, //сообщения 
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя не короче 2-х букв"
        },
        userPhone: {
          required: "Телефон обязателен",
          minlength: "Номер слишком короткий, проверьте написание"
        },
        userQuestion: {
          required: "Вопрос обязателен",
          minlength: "Вопрос должен быть не короче 10 букв"
        }
      },
      //Отправляем форму через Ajax
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),                  //Передаем все данные с формы в виде одной строки
          success: function (response) {
            $(form)[0].reset();                      //Очистка формы после отправки
          }
        })
      }
    });
    //маска для номера телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});


});