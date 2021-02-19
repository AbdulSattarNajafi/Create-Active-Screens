 load_sub_component('screens','list_offers');

//Sub Header Buttons
$('#sub_head_btns .btn').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#sub_head_btns .btn').removeClass('active_btn');
  $('#sub_head_btns .btn').addClass('sub_btn');
  $(this).addClass('active_btn'); 
  $(this).removeClass('sub_btn');
});

$('.list-links .list-links-item').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('.list-links .list-links-item').removeClass('selected');
  $('.list-links .list-links-item').addClass('disselect');
  $(this).addClass('selected'); 
  $(this).removeClass('disselected');
});
//Slider
$(document).ready(function(){
  $('#subnav-slide-btns .owl-carousel').owlCarousel({
    autoWidht:true,
    loop:false,
    rtl:false,
    nav:false,
    dots:false,
    items:3,
    margin:4,
    responsiveClass:true,
    responsive:{
        470:{
            items:4,
            nav:false
        },
        766:{
            items:5,
            nav:false,
            loop:false
        },
        990:{
          items:7,
          nav:false,
          loop:false
      }
    }
  });
});

  
//Sub header Slider
$(document).ready(function(){
  $('#sub_head_slider .owl-carousel').owlCarousel({
    autoWidht:true,
    loop:false,
    rtl:false,
    nav:false,
    dots:false,
    items:4,
    margin:4,
    responsiveClass:true,
    responsive:{
        400:{
            items:5,
            nav:false
        },
        470:{
          items:6,
          nav:false
      },
        766:{
            items:6,
            nav:false,
            loop:false
        },
        990:{
          items:8,
          nav:false,
          loop:false
      }
    }
  });
});