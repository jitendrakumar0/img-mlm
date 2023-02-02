
// Header & Footer include js
$(function(){
    $("#myHeader").load("layout/header.html"); 
    $("#myFooter").load("layout/footer.html"); 
  });

  
// header sticky   
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll <= 80) {
        $("nav.navbar").removeClass("nav-active");
    } else {
        $("nav.navbar").addClass("nav-active");
    }
});


// Home page hero slider
  var owl = $('.heorSection');
    owl.owlCarousel({
        margin: 10,
        loop: true,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
        }
    })

// Main Event slider
var owl = $('.mainEventSlider');
owl.owlCarousel({
    margin: 20,
    loop: true,
    dots:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    navText: ["<img class='w-100' src='assets/img/icons/leftArrow.svg'>","<img class='w-100' src='assets/img/icons/rightArrow.svg''>"],
    responsive: {
    0: {
        items: 1,
        nav:false,
        stagePadding: 30,
        margin: 15,
    },
    576: {
        items: 1,
        nav:false,
        stagePadding: 100,
    },
    992: {
        items: 3
    }
    }
})

// GLightbox js 
var lightbox = GLightbox();
lightbox.on('open', (target) => {
    console.log('lightbox opened');
});
var lightboxDescription = GLightbox({
    selector: '.glightbox2'
});
var lightboxVideo = GLightbox({
    selector: '.glightbox3'
});
lightboxVideo.on('slide_changed', ({ prev, current }) => {
    console.log('Prev slide', prev);
    console.log('Current slide', current);

    const { slideIndex, slideNode, slideConfig, player } = current;

    if (player) {
        if (!player.ready) {
            // If player is not ready
            player.on('ready', (event) => {
                // Do something when video is ready
            });
        }

        player.on('play', (event) => {
            console.log('Started play');
        });

        player.on('volumechange', (event) => {
            console.log('Volume change');
        });

        player.on('ended', (event) => {
            console.log('Video ended');
        });
    }
});

var lightboxInlineIframe = GLightbox({
    selector: '.glightbox4'
});


// bootstrap form validation   
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

//   top select 
    new TomSelect(".tomSelect",{
        allowEmptyOption: false,
        create: false
    });