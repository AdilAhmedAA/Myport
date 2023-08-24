// $("#slick").slick({
//     dots: true,
//     infinite: true,
//     centerMode:false,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1
// });

$("#slick").slick({
    dots: false,
    infinite: true,
    centerMode:true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  //reponsive nav 
  $(document).ready(function() {
    $('.toggler').click(function() {
      $('.nav-bar').toggleClass('visible');
      $('.toggler-icon').toggleClass('close');

    });
  });