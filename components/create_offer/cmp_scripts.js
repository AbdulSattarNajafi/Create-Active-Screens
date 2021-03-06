 load_sub_component('create_offer','list_offers');

//Sub Header Buttons
//First button
function subNavBtns() {
  const orangeBtn = document.querySelector('.first_btn');
  const pinkBtn = document.querySelector('.second_btn');
  const yellowBtn = document.querySelector('.third_btn');
  //getting the sliders containers
  const dailySlider = document.querySelector('#daily_slider');
  const todaySlider = document.querySelector('#today_slider');
  const hourSlider = document.querySelector('#hour_slider')
  orangeBtn.addEventListener('click', () => {
    pinkBtn.classList.remove('pink-btn');
    pinkBtn.classList.add('btn-light');
    yellowBtn.classList.remove('yellow-btn');
    yellowBtn.classList.add('btn-light');
    orangeBtn.classList.remove('btn-light');
    orangeBtn.classList.add('orange-btn');
    //Slider
    todaySlider.style.display = 'none';
    hourSlider.style.display = 'none';
    dailySlider.style.display = 'block';
  });

  pinkBtn.addEventListener('click', () => {
    yellowBtn.classList.remove('yellow-btn');
    yellowBtn.classList.add('btn-light');
    orangeBtn.classList.remove('orange-btn');
    orangeBtn.classList.add('btn-light');
    pinkBtn.classList.remove('btn-light');
    pinkBtn.classList.add('pink-btn');
    //Slider
    dailySlider.style.display = 'none';
    hourSlider.style.display = 'none';
    todaySlider.style.display = 'block';
  });

  yellowBtn.addEventListener('click', () => {
    orangeBtn.classList.remove('orange-btn');
    orangeBtn.classList.add('btn-light');
    pinkBtn.classList.remove('pink-btn');
    pinkBtn.classList.add('btn-light');
    yellowBtn.classList.remove('btn-light');
    yellowBtn.classList.add('yellow-btn');
    //Slider
    dailySlider.style.display = 'none';
    todaySlider.style.display = 'none';
    hourSlider.style.display = 'block';
  });
};
subNavBtns();

//Slider
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    autoWidht:true,
    loop:false,
    rtl:true,
    nav:false,
    dots:false,
    items:2,
    margin:4,
    responsiveClass:true,
    responsive:{
        470:{
            items:3,
            nav:false
        },
        766:{
            items:4,
            nav:false,
            loop:false
        },
        990:{
          items:6,
          nav:false,
          loop:false
      }
    }
  });
});