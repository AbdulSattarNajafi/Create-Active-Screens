$('#menu_btns_container .btn').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#menu_btns_container .btn').removeClass('btn-primary');
  $('#menu_btns_container .btn').addClass('btn-light');
  $(this).addClass('btn-primary'); 
  $(this).removeClass('btn-light');
});
//Grid Area
$('#grids_container .grid').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#grids_container .grid').removeClass('yellow');
  $('#grids_container .grid').addClass('white');
  $(this).addClass('yellow'); 
  $(this).removeClass('white');
});
//Daily Offer, Just 4 Today and 3Hr Offer Buttons
$('#daily_offersbtn_container .btn').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#daily_offersbtn_container .btn').removeClass('btn-secondary');
  $('#daily_offersbtn_container .btn').addClass('btn-light');
  $(this).addClass('btn-secondary'); 
  $(this).removeClass('btn-light');
});
//List links  
$('#list_links .link').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#list_links .link').removeClass('selected');
  $('#list_links .link').addClass('disselect');
  $(this).addClass('selected'); 
  $(this).removeClass('disselected');
});
//Edit Button
$('#edit_btn_container button').click(function(){

  if($(this).attr('id')=='edit_btn'){
    $('#screen_subheader #active_daily_offers').css('border','solid 2px #e00');
  }else{
    $('#screen_subheader #active_daily_offers').css('border','none');
  }
});
//Slider
$(document).ready(function(){
  $('#screen_slider .owl-carousel').owlCarousel({
    autoWidht:true,
    loop:false,
    rtl:false,
    nav:false,
    dots:false,
    items:4,
    margin:4,
    responsiveClass:true,
    responsive:{
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
//Table Rows
function tableRow() {
  let rows = document.querySelectorAll('.rows_wrapper');
  rows.forEach(row => {
    row.addEventListener('click', (e) => {
      let currentRow = e.currentTarget;
      currentRow.classList.toggle('show_rows')
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
//Show and Hide Grid Areas
$('.first_grid #four_grid_areas').click(function(){

  $('#screen_subheader .grid_area_seven').removeClass('show_area');
  $('#screen_subheader .grid_area_seven').addClass('hide_area');
  $('#screen_subheader .grid_area-four').removeClass('hide_area');
  $('#screen_subheader .grid_area-four').addClass('show_area');

});
$('.second_grid #seven_grid_areas').click(function(){

  $('#screen_subheader .grid_area-four').removeClass('show_area');
  $('#screen_subheader .grid_area-four').addClass('hide_area');
  $('#screen_subheader .grid_area_seven').removeClass('hide_area');
  $('#screen_subheader .grid_area_seven').addClass('show_area');

});