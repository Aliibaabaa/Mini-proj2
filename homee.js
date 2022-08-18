/* --- NAV CHANGE BG --- */

var nav = document.querySelector('nav');
   
  window.addEventListener('scroll', function() {
      if(window.pageYOffset > 100) {
        nav.classList.add('bg-success', 'shadow');
        document.getElementsByClassName('.dropdown-menu').style.backgroundColor = '#08331fce';
      }else{
        nav.classList.remove('bg-success','shadow')
        document.getElementsByClassName('.dropdown-menu').style.backgroundColor = 'none';
      }
    })

/* --- PLAY/PAUSE BTN --- */
    let bgVid = document.querySelector(".backvid");
    let pauseB = document.querySelector(".pauseBtn1");

    // pauseB.addEventListener('click', function(pauseB){
    //   pauseB.target.classList.toggle(".playBtn1")
    // })

    function playBtn() {
        bgVid.play();
    }

    function pauseBtn() {
        bgVid.pause();
    }

     function muteBtn() {
      bgVid.muted=true;
     }

     function unmuteBtn() {
      bgVid.muted=false;
     }


     let swiper = new Swiper('.swiper',  {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        lazy: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          hide: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          
        },
      
        // And if we need scrollbar
        scrollbar: {
        effect: 'fade',
        },
        spaceBetween: 30,
        loop: true,

        mousewheel: {
          invert: false,
        },
        
        // autoHeight: true,
      });

    
    // var swiperr = document.querySelector('.swiper');  
    // window.addEventListener('scroll', function() {
    //     document.getElementsByClassName('.swiper').direction = 'vertical' 
    //   });


// let swiperr = new Swiperr(".mySwiper", {
//  effect: "cards",
//  grabCursor: true,
//   lazy: true,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//  });