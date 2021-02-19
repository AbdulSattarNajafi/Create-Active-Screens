$('#menu_btns_container .btn').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#menu_btns_container .btn').removeClass('btn-primary');
  $('#menu_btns_container .btn').addClass('btn-light');
  $(this).addClass('btn-primary'); 
  $(this).removeClass('btn-light');
});
//Grid Area
$('#grid_wrapper .grid').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#grid_wrapper .grid').removeClass('yellow');
  $('#grid_wrapper .grid').addClass('white');
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