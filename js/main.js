$(function(){
    // 메인 슬라이드 
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay:{
            //자동슬라이드 (false-비활성화)
            delay: 3000, // 시간 설정
            ddisableOnInteraction: false, // false-스와이프 후 자동 재생
        },

        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        },

        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
    });

    // 메뉴 슬라이드
    const swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
        direction: 'horizontal',
        loop: false,
        autoplay:{
            //자동슬라이드 (false-비활성화)
            delay: 3000, // 시간 설정
            ddisableOnInteraction: false, // false-스와이프 후 자동 재생
        },

        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        type : 'bullets',
        clickable: true,
        },
    });

    // 네비게이션 바 클릭 시 on클래스
    $(".navi_bar .left_menu li a").click(function(){
        $(".right_menu li a").removeClass("on")
        $(this).toggleClass('on').parent().siblings().children().removeClass('on')
    })
    $(".navi_bar .right_menu li a").click(function(){
        $(".left_menu li a").removeClass("on")
        $(this).toggleClass('on').parent().siblings().children().removeClass('on')
    });

    let sw=true
    // 더보기 버튼 클릭 시
    $(".more a").on('click',function(){
        console.log(sw)
        if(sw===true){
            $("#m_menu_wrap").animate({"left":0}),300;
            $('body,html').css({'overflow':'hidden'})
            $(".cover").fadeIn(300);
            sw=false
        }else{
            $("#m_menu_wrap").animate({"left":"-100%"}),300;
            $('body,html').css({'overflow':'auto'})
            $(".cover").fadeOut(300);
            sw=true
            $(".home a").addClass("on")
        }
        
    });

    // 서브 메뉴
    $(".m_btn").click(function(){
        $("#m_menu_wrap").animate({"left":0}),300;
        $('body,html').css({'overflow':'hidden'})
        $(".cover").fadeIn(300);
        $(".more a").addClass("on")
        sw=false
        $(".home a").removeClass("on")
    });
    $(".close_btn").click(function(){
        $("#m_menu_wrap").animate({"left":"-100%"}),300;
        $('body,html').css({'overflow':'auto'})
        $(".cover").fadeOut(300);
        $(".more a").removeClass("on")
        sw=true
        $(".home a").addClass("on")
    });
    $('.m_gnb>li>a').click(function(){
        $(this).parent().toggleClass('on').siblings().removeClass('on')
        $(this).addClass("on")
        $(this).next().slideToggle().parent().siblings()
        .find('.depth2').slideUp();
    });

    // 스크롤 버튼
    $(".scroll_btn").on("click",function(){
        $('body,html').animate({'scrollTop':0},500)
    });

    // 스크롤 위치에 따라 버튼 튀어나오기
    $(window).scroll(function(){
        var h = $(document).scrollTop(); //현재 스크롤 위치
        console.log(h)
            if(h<=99){
                $(".scroll_btn").stop().animate({"bottom":"-100%"}),100;
            }else{
                $(".scroll_btn").stop().animate({"bottom":"73px"}),100;
            }
    });
})