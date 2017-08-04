
$(function(){

    /*navbanr-other-button*/
    $(".other-button>button:first").hover(function() {
        $(this).children().first().css({"color":"#9addf7"});
        $(this).children().last().css({"background-position":"0 -385px"});
    }, function() {
        $(this).children().first().css({"color":"#fff"});
        $(this).children().last().css({"background-position":"-267px -385px"});
    });

    $(".other-button>button:eq(1)").hover(function(){
        $(this).children().first().css({"color":"#9addf7"});
        $(this).children().last().css({"background-position":"-396px -158px"});
    },function(){
        $(this).children().first().css({"color":"#fff"});
        $(this).children().last().css({"background-position":"-150px -386px"});
    })

    $(".other-button>button:last").hover(function(){
        $(this).children().first().css({"color":"#9addf7"});
        $(this).children().last().css({"background-position":"-441px 7px"});
    },function(){
        $(this).children().first().css({"color":"#fff"});
        $(this).children().last().css({"background-position":"-396px -277px"});
    })

    /*modal-menu-left*/

        /*sm & xs menu-icon click*/
    $(".menu-icon").click(function(){

        //改变汉堡包图标样式

            $(this).css({"background-position":"-60px -390px"});

        //弹出modal
        $("#modal-menu").stop(true).modal("toggle");
        if (screen.width <= 768) { //宽度像素小于或等于768px时移除遮罩层
            $(".modal-backdrop").remove();
        };

        //当modal处于显示状态时点击menu-icon汉堡包按钮使modal-menu-dialog左移-100%，为了再次呼出时的动画效果
        if ($("#modal-menu").css("display")=='block') {
            $(".modal-menu-dialog").stop(true).css({left:"-100%"});
        };

        $(".modal-menu-dialog").stop(true).transition({left:"0"},500,'easeOutQuart');

        //先为第一个li加个激活样式
        $(".modal-menu-header>ul>:first").addClass('active').siblings().removeClass("active");
    });

        /*md button click modal alert*/
    $(".product-btn,.develop-btn,.support-btn").click(function(){
        $(".modal-menu-dialog").stop(true).animate({left:'0'},500,"easeOutQuart");

        if ($(this).attr('name')=="product") {
            $(".modal-menu-header>ul>:first").addClass('active').siblings().removeClass("active");
        };
        if ($(this).attr('name')=="develop") {
            $(".modal-menu-header>ul>:nth-child(2)").addClass('active').siblings().removeClass("active");
        };
        if ($(this).attr('name')=="support") {
            $(".modal-menu-header>ul>:last").addClass('active').siblings().removeClass("active");
        };
    })
    $("#modal-menu").on('hidden.bs.modal',function(){
        $(".modal-menu-dialog").css({left:"-100%"});
        $(".menu-icon").css({"background-position":"-301px -390px"});
    });

    /*modal-menu-navTabs*/


    /*modal-selector-language*/
    $(".language-btn").click(function(){
        if (screen.width <= 768) {

            $("#modal-selector-language").stop(true).modal("toggle");
            if ($("#modal-selector-language").css("display") == 'block') {
                    $(".modal-selector-dialog-language").css({right:"-100%"});
            }
            $(".modal-selector-dialog-language").stop(true).transition({right:'0'},500,"easeOutQuart");


        }else{
            $("#modal-selector-language").addClass("fade").modal("toggle");
        };
    });


        /*modal-selector-language-accordion*/
        $(".accordion-toggle").click(function(){
            if($(".accordion-panel").css("display")=="block"){
                $(".accordion-toggle>span").css({"background-position":"0 -80px"});
            }else if($(".accordion-panel").css("display")=="none"){
                $(".accordion-toggle>span").css({"background-position":"0 -32px"})
            }
        })

    /*modal-selector-signin*/
    $(".login-btn").click(function(){
        if (screen.width <= 768) {
            $("#modal-selector-signin").stop(true).modal("toggle");
            if ($("#modal-selector-signin").css("display") == "block") {
                $(".modal-selector-dialog-signin").css({right:"-100%"});
            };
        $(".modal-selector-dialog-signin").stop(true).transition({right:'0'}, 500,"easeOutQuart");
        }else{
            $("#modal-selector-signin").addClass('fade').modal("toggle");
        }
    });


    /* section ui-bar */
     $(".ui-bar>div>ul>li>.support").hover(function(){
        $(this).children().first().css({"background-position":"-168px -112px"});
        $(this).children().last().css({"color":"#00aeef"});
     },function(){
        $(this).children().first().css({"background-position":"-56px -168px"});
        $(this).children().last().css({"color":"white"});
     });

     $(".ui-bar>div>ul>li>.download").hover(function(){
        $(this).children().first().css({"background-position":"-56px 0"});
        $(this).children().last().css({"color":"#00aeef"});
     },function(){
        $(this).children().first().css({"background-position":"-56px -112px"});
        $(this).children().last().css({"color":"white"});
     });

     $(".ui-bar>div>ul>li>.specs").hover(function(){
        $(this).children().first().css({"background-position":"-112px -112px"});
        $(this).children().last().css({"color":"#00aeef"});
     },function(){
        $(this).children().first().css({"background-position":"-168px -56px"});
        $(this).children().last().css({"color":"white"});
     });

     $(".ui-bar>div>ul>li>.shop").hover(function(){
        $(this).children().first().css({"background-position":"-112px -56px"});
        $(this).children().last().css({"color":"#00aeef"});
     },function(){
        $(this).children().first().css({"background-position":"0 0"});
        $(this).children().last().css({"color":"white"});
     });

     $(".ui-bar>div>ul>li>.compare").hover(function(){
        $(this).children().first().css({"background-position":"0 -56px"});
        $(this).children().last().css({"color":"#00aeef"});
     },function(){
        $(this).children().first().css({"background-position":"-112px 0"});
        $(this).children().last().css({"color":"white"});
     });

    /*swiper-homepageGallery-section*/
    if (screen.width >= 1200) {
    var swiper = new Swiper('.swiper-container', {
        name:"haha",
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        grabCursor: true,
        loop:true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
    });

    /*swiper-button toggle*/
    $(".swiper-button-prev,.swiper-button-next").hide();
    $(".homepageGallery-section").on({
        mouseenter:function(){
            $(".swiper-button-prev,.swiper-button-next").show();
        },
        mouseleave:function(){
            $(".swiper-button-prev,.swiper-button-next").hide();
        }
    });

    $(".swiper-button-prev").hover(function() {
        $(this).css({"background-position":"0 -50px"})
    }, function() {
        $(this).css({"background-position":"0 0"})
    });

    $(".swiper-button-next").hover(function() {
        $(this).css({"background-position":"-100px -50px"})
    }, function() {
        $(this).css({"background-position":"-100px 0"})
    });

    };

    if (screen.width <= 1200) {
        $(".swiper-button-prev,.swiper-button-next").removeClass();
        var swiper = new Swiper('.swiper-container', {
            name:"haha",
            pagination: '.swiper-pagination',
            slidesPerView: 3,
            centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 30,
            grabCursor: true,
            loop:true,
        });
    };

















})


