$('#menu_btns_container .btn').unbind('click').click(function(e) {
  e.stopPropagation();
  
  $('#menu_btns_container .btn').removeClass('btn-primary');
  $('#menu_btns_container .btn').addClass('btn-light');
  $(this).addClass('btn-primary'); 
  $(this).removeClass('btn-light');
});




