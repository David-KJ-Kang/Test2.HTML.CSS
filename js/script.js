$(function() {




    $('#btnclose').on('click', function() {
        $('#idheader').css('display', 'none');
        // $('header').css('width', 0)
        
        $('#body').css('padding-left', '0');
    })


    $('#btn-menu').on('click', function() {
        // $('#idheader').fadeIn(1);
        $('#idheader').css('display', 'flex');
        $('body').css('padding-left', '25rem');
    })


    // $('#item4')
    //     .on('mouseover', function() {
    //         $(this).css('color', 'hotpink')


    // 
    //     $('#idheader').css('display', 'flex');
        // $(this).fadeout(1);
        // $('#header').css('display', 'flex' );

        // $('#body').css('padding', '25rem');
        // $('#header .navbar a').css('margin', '0');
        // $('#header .nsns a').css('margin', '0');









    // 슬릭 슬라이드 시작!
    $('.slide-container').slick({
        dots: false,
        arrows: true,


        autoplay: true,                 // 자동재생 여부
        autoplaySpeed: 3000,            // 자동재생 슬라이드 시간
        infinite: true,                 // 무한 반복 
        speed:500,                      // 슬라이드가 전환되는 시간


        // centerMode: true,            // 센터 모드
        // centerPadding: '60px',       // 센터 모드 시, 내부여백
        slidesToShow: 1,                // 보여질 슬라이드 개수
        slidesToScroll: 1,              // 스크롤될 슬라이드 개수


        pauseOnDotsHover: true,         // 페이지네이션 호버 시 자동재생 멈춤
        pauseOnFocus: true,             // 포커스 시, 자동재생 멈춤
        pauseOnHover: true,             // 호버 시, 자동재생 멈춤


        /* 효과 */
        // fade: true,
        // cssEase: 'linear',


        // 네비게이션 화살표 커스텀
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></btton>',


        //
        asNavFor: '.slide-nav',


        /* 반응형 */
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
    
        ]
    })


    $('.slide-nav').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,


        pauseOnDotsHover: true,         // 페이지네이션 호버 시 자동재생 멈춤
        pauseOnFocus: true,             // 포커스 시, 자동재생 멈춤
        pauseOnHover: true,             // 호버 시, 자동재생 멈춤
        
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.slide-container',
    })
})