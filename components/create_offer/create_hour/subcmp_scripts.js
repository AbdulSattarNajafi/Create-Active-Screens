/**
 * Sub component specific script
 */

//Load breakfast menu by default
//load_module('addtotable_placeholder', 'regular_menu/breakfast_menu/mod_addto_table');
//load_module('results_table_placeholder', 'regular_menu/breakfast_menu/mod_results_table');

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
//Items Fill Data
function itesmRow() {
  let inputs = document.querySelectorAll('.input');
  inputs.forEach(input => {
    input.addEventListener('click', (e) => {
      let currentLabel = e.currentTarget.parentElement.childNodes;
        currentLabel[3].style.transform = 'translateY(16px)';
        currentLabel[3].style.fontSize = '10px';
    })
  })
};
itesmRow();