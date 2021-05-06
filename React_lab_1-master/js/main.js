$(function () {

    $('.button_menu').on('click', function(){
        $('.header__content-center').toggleClass('menu--open');
    });
    $('.button_menu').on('click', function(){
        $('.header__content').toggleClass('header--open');
    });

    // const btn = $('.button_menu');

    // const btnMenuCenter = $('.header__content-center');
    // const btnMenu = $('.header__content');

    // btn.click(function () {
    //     const btnMenuTransform = btnMenu.height();
    //     console.log(btnMenuTransform);
    //     if (btnMenuTransform <= 150){
    //         btnMenuCenter.css({
    //             transform: 'translateY(' + 30 + 'px)'
    //         })
    //         btnMenu.css({            
    //             height: 380 + 'px'
    //         })
    //     }
    //     else{
    //         btnMenuCenter.css({
    //             transform: 'translateY(' + -340 + 'px)'
    //         })
    //         btnMenu.css({            
    //             height: 150 + 'px'
    //         })
    //     }
    // });

});