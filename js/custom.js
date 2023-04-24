// window scroll function 
$(function(){
  $(window).on('scroll', function() {
      if ($(window).scrollTop()) {
          $('#header').addClass('header_active');
      } else {
          $('#header').removeClass('header_active');
      }
  });
})




// prtycal js function 
particlesJS("banner", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#b6b2b2"
        }
      },
      "opacity": {
        "value": 0.5211089197812949,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 7,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10.017060304327615,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 12.181158184520175,
          "size_min": 0.7,
          "sync": true
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#c8c8c8",
        "opacity": 0.9,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 7,
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "none",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 60,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
// prtycal js function 

// Activition code for mixitup 

var containerEl = document.querySelector('.portfoilo_itm');

var mixer = mixitup(containerEl);


// slick slider function 
$(function(){
    
  $('.slide').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite:true,
    arrows:false,
    dots:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToShow: 1
        }
      }
      // {
      //   breakpoint: 480,
      //   settings: {
      //     arrows: false,
      //     centerMode: true,
      //     centerPadding: '40px',
      //     slidesToShow: 1
      //   }
      // }
    ]
  });
})


// // AOS activetor 
//  $(function(){
//   AOS.init({
//     duration:1000,
//     offset:5,
//     delay:10,
//   });
//   AOS.refresh();
//  })



// nav-bar close in responsive mode 
$(function(){
  $('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
  });
})

// venobox for including video 
$(function () {
  new VenoBox({
      selector: ".venobox",
      maxWidth: "80%",
      autoplay: true
  });
})


// preloader function 
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none"
});



// what's app chat 
$(function () {
  $('#myButton').floatingWhatsApp({
      phone: '8801726042080',
      popupMessage: 'Hello, how can we help you?',
      showPopup: true,
      showOnIE: false,
      headerTitle: 'Welcome!',
      headerColor: 'navy',
      backgroundColor: 'transparent',
      buttonImage: '<img src="./images/svg/icons8-whatsapp.svg"/>'
  });
});

// for back to top button 
$(function(){
  $(window).on('scroll', function() {
      if ($(window).scrollTop()) {
          $('.top_back').addClass('backTop');
      } else {
          $('.top_back').removeClass('backTop');
      }
  });
});

$(function(){
  $(".nav-link").click(function(){
    $(".hamburger").removeClass("line-top-bottom")
  })
})
$(function(){
  $(".nav-link").click(function(){
    $(".hamburger").addClass("add")
  })
})