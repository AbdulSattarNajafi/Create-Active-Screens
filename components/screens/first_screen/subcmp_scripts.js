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