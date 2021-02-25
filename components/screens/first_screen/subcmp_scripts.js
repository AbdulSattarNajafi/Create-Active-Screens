$('#menu_btns_container .btn').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#menu_btns_container .btn').removeClass('btn-primary');
  $('#menu_btns_container .btn').addClass('btn-light');
  $(this).addClass('btn-primary'); 
  $(this).removeClass('btn-light');
});
//Slider
$(document).ready(function(){
  $('#screen_slider .owl-carousel').owlCarousel({
    autoWidht:true,
    loop:false,
    rtl:false,
    nav:false,
    dots:false,
    items:3,
    margin:4,
    responsiveClass:true,
    responsive:{
      420:{
        items:4,
        nav:false
       },
        520:{
            items:5,
            nav:false
        },
        766:{
            items:6,
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
//Slider Buttons
$('#screen_slider .btn').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#screen_slider .btn').removeClass('btn-secondary');
  $('#screen_slider .btn').addClass('btn-light');
  $(this).addClass('btn-secondary'); 
  $(this).removeClass('btn-light');
});
//Grid Area
$('#grid_container .grid').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#grid_container .grid').removeClass('yellow');
  $('#grid_container .grid').addClass('white');
  $(this).addClass('yellow'); 
  $(this).removeClass('white');
});
//Table Rows
function tableRow() {
  let rows = document.querySelectorAll('.rows_wrapper');
  rows.forEach(row => {
    row.addEventListener('click', (e) => {
      let currentRow = e.currentTarget;
      currentRow.classList.add('show_rows')
    })
  })
}
tableRow();
//Edit Button
$('#edit_btn_container button').click(function(){

  if($(this).attr('id')=='edit_btn'){
    $('#screen_subheader #screen_table').css('border','solid 2px #e00');
  }else{
    $('#screen_subheader #screen_table').css('border','none');
  }
});
//Image Slider
$('.add_image .carousel_images').slick({
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 7,
  autoplay:true,
  vertical: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 7,
        autoplay:true,
        vertical: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 7,
        autoplay:true,
        vertical: true,
      }
    }
  ],
  autoplay:false
});
//Video
function addImage() {
  let imageContainers = document.querySelectorAll('.inputs_container .image_container');
  const slider = document.querySelector('#table_wrapper .add_image');
  const closeSliderBtn = document.querySelector('.add_image #close_slider');
  let images = document.querySelectorAll('.carousel_images .sl_img');
  imageContainers.forEach(imageContainer => {
    imageContainer.addEventListener('click', (e) => {
      let currentContainer = e.currentTarget.childNodes;
      slider.classList.add('showadd_image');
      images.forEach(image => {
        image.addEventListener('click', (e) => {
          let currentImage = e.currentTarget.src;
          currentContainer[1].src = currentImage
        })
      })
    })
  })
  closeSliderBtn.addEventListener('click', () => {
    slider.classList.remove('showadd_image');
  })
};
addImage();