$(function(){

    //artclip ***************************************
    $(function(){
        var artSwiper = new Swiper(".artSwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
          });
    })


    //magazine **************************************
    $(function(){
        var swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            },
            pagination: {
              el: ".swiper-pagination",
            },
          });
    })


    //video *****************************************
    var vBanner = 0;

    function moveVideo(){
        $(".video>li").eq(vBanner).fadeIn(500).siblings().fadeOut();
        $(".thumb>li").eq(vBanner).addClass("active").siblings().removeClass("active");
    }

    $(".thumb>li").click(function(){
        vBanner = $(this).index();
        moveVideo();
    })
    

    //mobile menu
    $("#nav>li>a").click(function () {
        $(this).next().slideToggle(300)
            .parent()
            .siblings()
            .children(".sub").slideUp(300);
        $(this).parents().toggleClass("active")
            .siblings().removeClass("active")
    })

    //메뉴 나오고 들어가고
    $(".ham").on("click", function () {
        $("nav, .gnb .close img").stop().animate({
            right: 0
        }, 500)
    })
    $(".close").on("click", function () {
        $("nav, .gnb .close img").stop().animate({
            right: -100 + "%"
        }, 500)
    })

})

