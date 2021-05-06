$(document).ready(function () {
    let position = 0;
    const slideToShow = 1;
    const slideToScroll = 1;

    const container = $('.slider__upper');
    const wrapper = $('.slider__wrapper-up');
    const item = $('.slider__item-up');

    const btnprev = $('.btn__prev');
    const btnnext = $('.btn__next');

    const itemWidth = container.width() / slideToShow;

    const movePosition = slideToScroll * itemWidth;

    const itemsCount = item.length;

    var timer;

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });

    autoSlider();

    btnprev.click(function () {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;

        console.log(itemsLeft);

        setPosition();
        checkBTN();
    });

    btnnext.click(function () {
        const itemsLeft = itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;

        console.log(itemsLeft);

        setPosition();
        checkBTN();
    });

    const setPosition = () => {
        wrapper.css({
            transform: 'translateX(' + position + 'px)'
        });
    }

    const checkBTN = () => {
        btnprev.prop('disabled', position === 0);
        btnnext.prop(
            'disabled',
            position <= -(itemsCount - slideToShow) * itemWidth
        );
    }

    checkBTN();

    function slide(){       
        const itemsLeft = itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth;
        position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;
        if (itemsLeft == 0){
            position = 0;                               
        }
        setPosition();
        autoSlider();
    }

    function autoSlider(){
        timer = setTimeout(slide, 5000);
    }

});