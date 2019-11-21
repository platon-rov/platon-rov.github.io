$(function(){
    
    $('.slide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
         
          {
            breakpoint: 881,
            settings: "unslick"
          }
        ]
      });


      $('.sliderPay').slick({
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 8000,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
          
          {
            breakpoint: 921,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      });

      $('.slide-news').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });





  var elem = $('.wrapHend'),        
      pos = elem.offset(),           
      elem_left = pos.left,          
      elem_top = pos.top,             
      elem_width = elem.width(),     
      elem_height = elem.height(),   
      x_center,   
      y_center;  


  $('.wrapHend').mousemove(function(e){    

    x_center = ( elem_width / 4 ) - ( e.pageX - elem_left );
    y_center = ( elem_height / 4 ) - ( e.pageY - elem_top );


    $('.parallax').each(function(){

      var speed = $(this).attr('data-speed'),     
          xPos = Math.round(-1*x_center/60*speed),
          yPos = Math.round(y_center/60*speed);   


        yPos = -2*speed;
      
      $(this).css('transform', 'translate3d('+xPos+'px, '+yPos+'px, 0px)');

        });
    });


    $('.card-header').on('click', function() {

        if($('.card-header').hasClass('whiteBG')){
            $('.card-header').removeClass('whiteBG');
        }
        else{
            $(this).toggleClass('whiteBG');
        } 
    });

    AOS.init();
})