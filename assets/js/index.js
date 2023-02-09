
// Header & Footer include js
$(function(){
    $("#myHeader").load("layout/header.html"); 
    $("#myFooter").load("layout/footer.html");
    $(".emptState").load("layout/empty-state.html"); 
});

var prelodar = document.querySelector(".preLoader");
    window.addEventListener('load', function(){
    prelodar.classList.remove('active');
    document.body.style.overflow = 'hidden auto';
});

// header sticky   
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll <= 1) {
        $("nav.navbar").removeClass("nav-active");
    } else {
        $("nav.navbar").addClass("nav-active");
    }
});

// form validation
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault()
        if (!form.checkValidity()) {
            event.stopPropagation()
        }else{
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

//? ###################################### Home Page JS ######################################
if ($("[page-name=homePage]").length) {
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
    
    
    
    //   top select 
    new TomSelect("#chooesQuery", {
        allowEmptyOption: false,
        create: false
    });
}
//! ###################################### Home Page JS ######################################

//? ###################################### Company Page JS ######################################
if ($("[page-name=companyPage]").length) {
    
    // Read More & Read Less 
    let redeMoreBtn = document.querySelectorAll('.redeMoreBtn');
    redeMoreBtn.forEach(redeMoreBtns =>{
        redeMoreBtns.addEventListener('click', (e)=>{
            let a = e.currentTarget;
            a.classList.toggle('newTxt');
            a.previousElementSibling.classList.toggle('showText');
            if($('.redeMoreBtn').hasClass('newTxt')) {
                a.innerHTML = 'Read Less';
                a.style = "color: red !important;";
            }else{
                a.innerHTML = 'Read More';
                a.style = "color: $theme2 !important;";
            };
        });
    });
}

//! ###################################### Company Page JS ######################################

//? ###################################### Gallery Page JS ######################################

if ($("[page-name=galleryPage]").length) {
    
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

    // Justify Gallery
    $(".myJustifyGallery").justifiedGallery({
        rowHeight: 180,
        lastRow: 'nojustify',
        margins: 16,
        captions: false
    });
}

//! ###################################### Gallery Page JS ######################################



//? ###################################### News Page JS ######################################
if ($("[page-name=newsPage]").length) {
    // Main Event slider
    var owl = $('.offerSlider');
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

    // Event slider
    var owl = $('.eventVideoSlider');
    owl.owlCarousel({
        margin: 20,
        loop: true,
        dots:true,
        nav:true,
        // autoplay:true,
        // autoplayTimeout:3000,
        // autoplayHoverPause:false,
        navText: ["<img class='w-100' src='assets/img/icons/leftArrow.svg'>","<img class='w-100' src='assets/img/icons/rightArrow.svg''>"],
        responsive: {
        0: {
            items: 1,
            nav:false,
            stagePadding: 50,
            margin: 15,
        },
        380: {
            items: 1,
            nav:false,
            stagePadding: 60,
            margin: 15,
        },
        576: {
            items: 2,
            nav:false,
            stagePadding: 50,
        },
        992: {
            items: 4
        }
        }
    })

    // bootstrap tooltip 
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

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

    // Justify Gallery
    $(".myJustifyGallery").justifiedGallery({
        rowHeight: 180,
        lastRow: 'nojustify',
        margins: 16,
        captions: false
    });

    
}
//! ###################################### News Page JS ######################################


//? ###################################### Schedule Page JS ######################################
if ($("[page-name=schedulePage]").length) {

    $(document).ready(function() {
        $('.customDatatable').DataTable({
            responsive:true,
            destroy: true,
            "language": {
                "paginate": {
                    "previous": "<img class='w-100' src='assets/img/icons/arrowLeft.svg' alt=''>",
                    "next": "<img class='w-100' src='assets/img/icons/arrowRight.svg' alt=''>"
                }
            }
        });
        $('.nav-link').click(function () {
            $('.customDatatable').DataTable({
                destroy: true,
                "language": {
                    "paginate": {
                        "previous": "<img class='w-100' src='assets/img/icons/arrowLeft.svg' alt=''>",
                        "next": "<img class='w-100' src='assets/img/icons/arrowRight.svg' alt=''>"
                    }
                }
            }).reload;
          });
    });

    

    //   top select 
    new TomSelect("#monthSelect", {
        allowEmptyOption: false,
        create: false
    }); 
}
//! ###################################### Schedule Page JS ######################################

//? ###################################### Branches Page JS ######################################
if ($("[page-name=branchesPage]").length) {
    //   top select 
    new TomSelect("#countarySelect", {
        allowEmptyOption: false,
        create: false
    }); 
    new TomSelect("#stateSelect", {
        allowEmptyOption: false,
        create: false
    });
    new TomSelect("#zipCode", {
        allowEmptyOption: false,
        create: false
    }); 
}
//! ###################################### Branches Page JS ######################################