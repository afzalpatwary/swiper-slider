/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - Afzal
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

// $(window).on('load', function () {

//     // code should be execute here

// });





/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */


    // swiper activations and options initialization
        let swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 0,
            loop: true,
             pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },
            breakpoints: {
                320: {
                slidesPerView: 1,
                },
                575: {
                slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                }
            }
        });

    


        



