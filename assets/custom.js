
$(document).ready(function() {
              var owl = $('.home_slider');
              owl.owlCarousel({
                margin: 0,
                nav: true,
                loop: true,
				autoplayTimeout:3000,
				animateIn: 'fadeIn',
              animateOut: 'fadeOut',
				autoplay:true,
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
            })

