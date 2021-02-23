$('#btn_addtorow_image').click(function(){
  $('#slider_card .img_item_slider').show();
  $('#slider_card .vid_item_slider').hide();
    $('#create_backgroundimage .carousel-inner').slick({
      centerMode: true,
      centerPadding: '10px',
      arrows: false,
      slidesToShow: 5,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 5
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 3
          }
        }
      ],
      autoplay:false
    });

    $('#create_backgroundimage .carousel-inner').on('afterChange', function(slick, currentSlide){
      let imgSrc = $('#create_backgroundimage .slick-current').attr('src');
      $('.filldata_image_container').css('background-image','url('+imgSrc+')');
    });

    $('#create_backgroundimage .carousel-inner').on('init', function(slick){
      let imgSrc = $('#create_backgroundimage .slick-current').attr('src');
      $('.filldata_image_container').css('background-image','url('+imgSrc+')');
    });


$('#create_itemimage .carousel-inner').slick({
      centerMode: true,
      centerPadding: '0px',
      arrows: false,
      slidesToShow: 5,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 5
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3
          }
        }
      ],
      autoplay:false
    });
  });

  $('#create_itemimage .carousel-inner').on('afterChange', function(slick, currentSlide){
    let imgSrcUrl = $('#create_itemimage .slick-current').attr('src');
    $('.filldata_image_container .filldata_image_image').attr('src',imgSrcUrl);
  });
//Video
$('#btn_addtorow_video').click(function(){
  $('#slider_card .vid_item_slider').show();
  $('#slider_card .img_item_slider').hide();
  
  $('#create_itemvide .carousel-videos').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 5,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 5
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3
          }
        }
      ],
      autoplay:false
    });
    
    })
    $('#create_itemvide .carousel-videos').on('afterChange', function(slick, currentSlide){
      let imgSrc = $('#create_itemvide .slick-current').attr('src');
      $('.filldata_image_container .filldata_image_image').attr('src',imgSrc);
    
  });

