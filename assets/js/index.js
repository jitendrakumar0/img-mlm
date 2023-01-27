
// Header & Footer include js
$(function(){
    $("#myHeader").load("layout/header.html"); 
    $("#myFooter").load("layout/footer.html"); 
  });

// Home page hero slider
  var owl = $('.owl-carousel');
        owl.owlCarousel({
            margin: 10,
            loop: true,
            dots:true,
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
  