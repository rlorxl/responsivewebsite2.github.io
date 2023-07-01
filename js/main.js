//sticky
window.addEventListener('scroll', function(){
  let header = document.querySelector('header');
  let logo = document.querySelector('.logo');
  header.classList.toggle("sticky", window.scrollY > 0);
  logo.classList.add('reverse');
});

//slick.js
$(function(){
  $('.main_slider').slick({
      arrows: true,
      dots: true,
      fade: true,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      draggable: true,
  })
});

//swiper.js
$(function(){
  new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      700: { //700px보다 작을때
        slidesPerView: 1,
      },
      1280: { //1280px보다 작을때
        slidesPerView: 2,
      },
      1600: { //1600px보다 작을때
        slidesPerView: 3,
      }
    }
    });
})

//scroll ani plugin
$(function(){
  $('.animate').scrolla({
      mobile: true,
      once: false,
  })
})

//tab
function tab(evt, cityNum) {
    let tabcontent = document.getElementsByClassName("infotxt");
    
    for (let i = 0; i < tabcontent.length; i++) {
      if(cityNum === i) tabcontent[i].style.display = 'block';
      else tabcontent[i].style.display = "none";
    }
};


function toggleMenu(){  
  let navigation = document.querySelector('.menu-wrap');
  let logo = document.querySelector('.logo');
  navigation.classList.toggle('active'); 
  logo.classList.toggle('active');

  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
      navigation.classList.remove('active');
      logo.classList.remove('active');
    };
  });
};





