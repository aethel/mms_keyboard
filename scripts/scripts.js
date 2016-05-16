"use strict";
(function() {
    window.addEventListener('load', function() {
        InitSlider();
    }, false);
}());

var InitSlider = function() {
    var nextBtn = document.querySelector('.js-next'),
    		prevBtn = document.querySelector('.js-prev'),
        viewportSlider = document.querySelector('.js-viewport-slider'),
				viewPortWidth = 880;

    nextBtn.addEventListener('click', function() {
        if (-viewportSlider.offsetLeft > viewportSlider.offsetWidth - viewPortWidth) {
            return;
        } else {
            viewportSlider.style.left = viewportSlider.offsetLeft - viewPortWidth + 'px';
        }
    }, false);
    prevBtn.addEventListener('click', function() {
        if (viewportSlider.offsetLeft == 0) {
            return;
        } else {
            viewportSlider.style.left = viewportSlider.offsetLeft + viewPortWidth + 'px';
        }
    }, false);

};
