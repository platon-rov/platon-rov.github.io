var prevScrollpos = window.pageYOffset,
currentScrollPos;

window.onload = function() {
  navTransform(prevScrollpos, prevScrollpos);
};

window.onscroll = function() {
  currentScrollPos = window.pageYOffset;
  prevScrollpos = navTransform(prevScrollpos, currentScrollPos);
};

window.addEventListener('resize', function(event){
  currentScrollPos = window.pageYOffset;
  navTransform(prevScrollpos, prevScrollpos);
});

function navTransform(prevScrollpos, currentScrollPos) {
  var header = document.querySelector("header");

  if(currentScrollPos == 0) {
    header.classList.remove('not-at-top');
  }
  else {
    header.classList.add('not-at-top');
  }

  if(prevScrollpos > currentScrollPos || prevScrollpos == currentScrollPos) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }
  return currentScrollPos;
}

$(function() {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 130
          }, 1000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex','-1'); 
              $target.focus();
            };
          });
        }
      }
    });
  });

$('.wholesale__slider').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  focusOnSelect: true,
  dots: false,
  infinite: true,
  prevArrow: '<button type="button" class="slick-prev wholesale__slide-button d-flex justify-content-center align-items-center"><svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M21.9536 28.823C22.3257 28.4509 22.3257 27.8462 21.9536 27.4741L10.0699 15.6137L21.9536 3.72996C22.3257 3.35786 22.3257 2.75321 21.9536 2.38112C21.5815 2.00903 20.9769 2.00903 20.6048 2.38112L8.06988 14.916C7.88383 15.1021 7.79081 15.3346 7.79081 15.5904C7.79081 15.823 7.88383 16.0788 8.06988 16.2648L20.6048 28.7997C20.9769 29.1951 21.5815 29.1951 21.9536 28.823Z" fill="black" stroke="black" stroke-width="2"/></g><defs><clipPath id="clip0"><rect width="30" height="30" fill="white" transform="translate(30 0.61377) rotate(90)"/></clipPath></defs></svg></button>',
  nextArrow: '<button type="button" class="slick-next wholesale__slide-button d-flex justify-content-center align-items-center"><svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M8.0464 2.40455C7.67431 2.77665 7.67431 3.3813 8.0464 3.75339L19.9301 15.6139L8.0464 27.4976C7.67431 27.8697 7.67431 28.4743 8.0464 28.8464C8.4185 29.2185 9.02315 29.2185 9.39524 28.8464L21.9301 16.3115C22.1162 16.1255 22.2092 15.8929 22.2092 15.6371C22.2092 15.4046 22.1162 15.1487 21.9301 14.9627L9.39524 2.42781C9.02315 2.03246 8.4185 2.03246 8.0464 2.40455Z" fill="#FF9600" stroke="#000000" stroke-width="2"/></g><defs><clipPath id="clip0"><rect width="30" height="30" fill="white" transform="translate(0 30.6138) rotate(-90)"/></clipPath></defs></svg></button>',
  responsive: [
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }
  ]
});

$('.reviews__slider').slick({
  prevArrow: '<button type="button" class="slick-prev reviews__slide-button d-flex justify-content-center align-items-center"><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.86473 14.9087C8.04509 14.7284 8.04509 14.4353 7.86473 14.2549L2.10467 8.50615L7.86473 2.74608C8.04509 2.56573 8.04509 2.27265 7.86473 2.0923C7.68438 1.91194 7.3913 1.91194 7.21095 2.0923L1.13526 8.16798C1.04509 8.25816 0.999999 8.37088 0.999999 8.49487C0.999999 8.6076 1.04509 8.73159 1.13526 8.82177L7.21095 14.8975C7.3913 15.0891 7.68438 15.0891 7.86473 14.9087Z" fill="#FF9600" fill="#FF9600" stroke="black" stroke-width="2"/></svg></button>',
  nextArrow: '<button type="button" class="slick-next reviews__slide-button d-flex justify-content-center align-items-center"><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.13527 2.09079C0.954912 2.27114 0.954912 2.56422 1.13527 2.74457L6.89533 8.49336L1.13527 14.2534C0.954911 14.4338 0.954911 14.7269 1.13527 14.9072C1.31562 15.0876 1.6087 15.0876 1.78905 14.9072L7.86473 8.83153C7.95491 8.74135 8 8.62863 8 8.50464C8 8.39191 7.95491 8.26792 7.86473 8.17774L1.78905 2.10206C1.6087 1.91043 1.31562 1.91043 1.13527 2.09079Z" fill="#FF9600" stroke="black" stroke-width="2"/></svg></button>',
});