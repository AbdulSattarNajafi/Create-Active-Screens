
load_module('create-add-images','create_offer/create_offer/mod_createoffer_imageselect');

  $('#create_button_row button').click(function(){
    $('#create_button_row button').removeClass('btn-secondary');
    $('#create_button_row button').addClass('btn-light');
    $(this).removeClass('btn-light');
    $(this).addClass('btn-secondary');

    if($(this).attr('id')=='btn_createoffer_edit'){
      $('#create_filldata .create_offer').css('border','solid 2px #e00');
    }else{
      $('#create_filldata .create_offer').css('border','none');
    }
  }); //
  