$('#menu_btns_container .btn').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#menu_btns_container .btn').removeClass('btn-primary');
  $('#menu_btns_container .btn').addClass('btn-light');
  $(this).addClass('btn-primary'); 
  $(this).removeClass('btn-light');
});
//Grid Area Screen-1
$('#grid_container .grid').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#grid_container .grid').removeClass('yellow');
  $('#grid_container .grid').addClass('white');
  $(this).addClass('yellow'); 
  $(this).removeClass('white');
});
//Grid Area Screen-2
$('#grid_wrapper .grid').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#grid_wrapper .grid').removeClass('yellow');
  $('#grid_wrapper .grid').addClass('white');
  $(this).addClass('yellow'); 
  $(this).removeClass('white');
});
//Grid Area Screen-3
$('#grids_container .grid').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#grids_container .grid').removeClass('yellow');
  $('#grids_container .grid').addClass('white');
  $(this).addClass('yellow'); 
  $(this).removeClass('white');
});
//Edit Button
$('#edit_btn_container button').click(function(){

  if($(this).attr('id')=='edit_btn'){
    $('#screen_subheader #all_screens').css('border','solid 2px #e00');
  }else{
    $('#screen_subheader #all_screens').css('border','none');
  }
});


