window.addEventListener('DOMContentLoaded', function(){

  

  // new SimpleBar(document.getElementById('priceDiv'));

  // Бургерное меню

  // Создаём плавность анимации появления мобильного меню
  // Сначала объявим функцию FadeIn

  const fadeIn = (el, timeout, display) => {
    el.style.opacity = 0;
    el.style.display = display || 'block';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
      el.style.opacity = 1;
    }, 10);
  }

  // Объявим функцию FadeOut

  const fadeOut = (el, timeout) => {
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;

    setTimeout(() => {
      el.style.display = 'none';
    }, timeout);
  };

  var menu = document.querySelector('#menu')
      ,burger = document.querySelector('#burger')
      ,burgerClose = document.querySelector('#burger.open')
      ,flag = false;

  burger.addEventListener('click', function(){      
      if(!flag) {
        fadeIn(menu, 300, 'flex');
        flag = true;
        document.querySelector('body').classList.add('closed');

      } else {
        fadeOut(menu, 300);
        flag = false;
        document.querySelector('body').classList.remove('closed');
      }       

      burger.classList.toggle('open');

      // Скрытие меню при нажатии на один из пунктов меню

      document.querySelectorAll('.menu__link').forEach(function(oneItem){
          oneItem.addEventListener('click', function(){          

            fadeOut(menu, 300);
            flag = false;
            document.querySelector('body').classList.remove('closed');
          
            burger.classList.remove('open');
          });
      });

      burgerClose.addEventListener('click', function(){
        fadeOut(menu, 300);
        flag = false;
        document.querySelector('body').classList.remove('closed');
      
        burger.classList.remove('open');
      });
    }); 


  // Слайдер в блоке Docs

  new Swiper('.docs-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 700,    
    

    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },

    // Управлять слайдером с клавиатуры
    keyboard: {
        //включаем
        enabled: true,
        //управление клавишами pageUp/pageDown
        pageUpDown: true,
    },

    freeMode: {
        enabled: true,
    },

    // autoplay: {
    //     delay: 3000,            
    //     waitForTransition: true,
    // },
    
    breakpoints: {  
      500: {
        slidesPerView: 2            
      },        
      768: {
        slidesPerView: 3            
      },
      1400: {
        slidesPerView: 4         
      }
    }

  });


  // Сайдбар / Sidebar

  const blogDetails = document.querySelector(".single-main__article");
  const blogSidebar = document.querySelector(".single-sidebar");
  const blogSidebarContent = document.querySelector(".blog-sidebar");
   
  //1
  const controller = new ScrollMagic.Controller();   
   
  //2
  const blogscene = new ScrollMagic.Scene({
    triggerElement: blogSidebar,
    triggerHook: 0,
    duration: blogDetails.offsetHeight - blogSidebarContent.offsetHeight
  }).addTo(controller);
   
  //3
  if (window.matchMedia("(min-width: 992px)").matches) {
    blogscene.setPin(blogSidebar, {pushFollowers: false});
  }
   
  //4
  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 992px)").matches) {
      blogscene.setPin(blogSidebar, {pushFollowers: false});
    } else {
      blogscene.removePin(blogSidebar, true);
    }
  });

  
  // function getDurationBlog() {
  //   return blogDetails.offsetHeight - blogSidebarContent.offsetHeight;
  // }
  


  
   
});

jQuery (function($) { 
  $( "#accordion" ).accordion({
    collapsible: true,
    active: false,
    heightStyle: 'content',
    animate: 700
  });


  // Выбор плитка/список на странице Блог

  let listButton = $('#block2')
    ,tableButton = $('#block1')
    ,listBlock = $('#list')
    ,tableBlock = $('#table')
    ,listImg = $('.level-btn__list')
    ,tableImg = $('.level-btn__table');
  

  listButton.on('click', function(){
    listBlock.css('display', 'block');
    tableBlock.css('display', 'none');
    listButton.css('opacity', '.4');
    tableButton.css('opacity', '1');    
    listImg.css('background-image', 'url("/wp-content/themes/radionova/img/spisok-active.svg")'); 
    tableImg.css('background-image', 'url("/wp-content/themes/radionova/img/plitka.svg")');    
  });
  
  tableButton.on('click', function(){
    listBlock.css('display', 'none');
    tableBlock.css('display', 'flex');
    tableButton.css('opacity', '.4');
    listButton.css('opacity', '1');
    tableImg.css('background-image', 'url("/wp-content/themes/radionova/img/plitka-active.svg")');
    listImg.css('background-image', 'url("/wp-content/themes/radionova/img/spisok.svg")');    
  });


  // Открытие попапа Заявка на личную консультацию

  let joinOpen = $('.js-getJoin')
  ,joinContainer = $('.js-join')
  ,joinClose = $('.js-joinClose');

  joinOpen.on('click', function(e){
  event.preventDefault();

  joinContainer.fadeIn(400);

    $('body').css ({
        'height': '100vh',
        'overflow-y': 'hidden',
        'padding-right': '15px' 
    }); 
  });

  joinClose.on('click', function(){
    joinContainer.fadeOut(300);

    $('body').css ({
        'height': '',
        'overflow-y': '',
        'padding-right': '' 
    }); 
  });

  $('.js-join').on('click', function(event){
  if(this == event.target) {
      joinContainer.fadeOut('300', function(){
      });
  }

    $('body').css ({
        'height': '',
        'overflow-y': '',
        'padding-right': '' 
    });   

  });  


  // Открытие попапа Заявка на семейную консультацию

  let joinOpen2 = $('.js-getJoin2')
  ,joinContainer2 = $('.js-join2')
  ,joinClose2 = $('.js-joinClose2');

  joinOpen2.on('click', function(e){
  event.preventDefault();

  joinContainer2.fadeIn(400);

    $('body').css ({
        'height': '100vh',
        'overflow-y': 'hidden',
        'padding-right': '15px' 
    }); 
  });

  joinClose2.on('click', function(){
    joinContainer2.fadeOut(300);

    $('body').css ({
        'height': '',
        'overflow-y': '',
        'padding-right': '' 
    }); 
  });

  $('.js-join2').on('click', function(event){
  if(this == event.target) {
      joinContainer2.fadeOut('300', function(){
      });
  }

    $('body').css ({
        'height': '',
        'overflow-y': '',
        'padding-right': '' 
    });   

  }); 

  /*-----Скроллинг плавный------*/
 
   $('.js-slideTo').on('click', function(e){
     event.preventDefault();
 
     let href = $(this).attr('href');
 
     let headerHeight = $('.header').height();
 
     let offset = $(href).offset().top - headerHeight;
 
     $('body, html').animate({
       scrollTop: offset,
     }, 800);
   }); 

});

/*-----Контактная форма на главной--------*/

jQuery(document).ready(function($) {	
	$('#Form1').submit(function() {
		var formData = new FormData();		
		var userName = $('#Form1 input[name="first_name"]').val();
    var userPhone = $('#Form1 input[name="phone"]').val();    
		
		//не забываем проверить поля на заполнение

		
		//присоединяем поля 
		
    formData.append('first_name', userName);
    formData.append('phone', userPhone);
    formData.append('message', $('#Form1 textarea').val());    

    console.log(formData);		  

    $.ajax({
    url: "https://radionova-psy.ru/wp-content/themes/radionova/mailing.php",
    type: "POST",
    dataType : "json", 
    cache: false,
    contentType: false,
    processData: false,  
    data: formData, //указываем что отправляем		
    success: function(msg) {
      if(msg == 'Message has been sent') {
      var result = '<section class="thanks"><div class="container"><h1 class="thanks__heading">Спасибо за запрос! Свяжусь с вами в ближайшее время!</h1><a href="/" class="blue-button destinations__button"><span class="button__text">на главную</span></a></div></section>';
      
      
      }
      
      
      else {result = msg;}
      $('.note1').html(result);
      $('.note1').show();
  
      $("#Form1").find('input, textarea').each(function() {
      $(this).val('');
      $('input:checked').prop('checked', false);
      });   
      
      setTimeout(function() {
      $('.note1').hide();
      }, 4000);  
      
      $('.destinations__button').click (function(){
        $('.note1').hide();               
      });
      
    }

    
    });	 
    
    return false;    

	});
});


/*---Контактная форма в попапе Индивидуальная консультация---*/

jQuery(document).ready(function($) {	
  $('#Form2').submit(function() {
    var formData = new FormData();		
    var userName = $('#Form2 input[name="first_name"]').val();
    var userPhone = $('#Form2 input[name="phone"]').val();  
    
    
    formData.append('first_name', userName);
    formData.append('phone', userPhone); 
    formData.append('message', $('#Form2 textarea').val());  
    	  

    $.ajax({
    url: "https://radionova-psy.ru/wp-content/themes/radionova/mailing-pers.php",
    type: "POST",
    dataType : "json", 
    cache: false,
    contentType: false,
    processData: false,  
    data: formData, //указываем что отправляем		
    success: function(msg) {
      if(msg == 'Message has been sent') {
        var result = '<section class="thanks"><div class="container"><h1 class="thanks__heading">Спасибо за запрос! Свяжусь с вами в ближайшее время!</h1><a href="/" class="blue-button destinations__button"><span class="button__text">на главную</span></a></div></section>';
      
      
      }
      
      else {result = msg;}
      $('.note2').html(result);
      $('.note2').show();

      $("#Form2").find('input, textarea').each(function() {
        $(this).val('');
        $('input:checked').prop('checked', false);
      });   
      
      setTimeout(function() {
        $('.thanks').hide();
        $('.js-join').hide();       
      }, 2000); 
      
      $('.js-close-Join').click (function(e){
        event.preventDefault();
        $('.thanks').hide(); 
        $('.js-join').hide();        
      });
      
    }    
    });	 
    
    return false;    

  });
});


/*---Контактная форма в попапе Семейная консультация---*/

jQuery(document).ready(function($) {	
  $('#Form3').submit(function() {
    var formData = new FormData();		
    var userName = $('#Form3 input[name="first_name"]').val();
    var userPhone = $('#Form3 input[name="phone"]').val();  
    
    
    formData.append('first_name', userName);
    formData.append('phone', userPhone); 
    formData.append('message', $('#Form3 textarea').val());  
    	  

    $.ajax({
    url: "https://radionova-psy.ru/wp-content/themes/radionova/mailing-fam.php",
    type: "POST",
    dataType : "json", 
    cache: false,
    contentType: false,
    processData: false,  
    data: formData, //указываем что отправляем		
    success: function(msg) {
      if(msg == 'Message has been sent') {
        var result = '<section class="thanks"><div class="container"><h1 class="thanks__heading">Спасибо за запрос! Свяжусь с вами в ближайшее время!</h1><a href="/" class="blue-button destinations__button js-close3"><span class="button__text">на главную</span></a></div></section>';
      
      
      }
      
      else {result = msg;}
      $('.note3').html(result);
      $('.note3').show();

      $("#Form3").find('input, textarea').each(function() {
        $(this).val('');
        $('input:checked').prop('checked', false);
      });   
      
      setTimeout(function() {
        $('.note3').hide();
        $('.js-join2').hide();       
      }, 4000); 
      
      $('.js-close3').click (function(e){
        event.preventDefault();
        $('.thanks').hide(); 
        $('.js-join2').hide();        
      });
      
    }    
    });	 
    
    return false;    

  });
});




