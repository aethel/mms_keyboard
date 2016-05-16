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
        viewportSliderBtns = viewportSlider.querySelectorAll('.js-slider-btn'),
        viewPortWidth = 880;

    console.log(viewportSliderBtns);
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

		viewportSlider.addEventListener('click', function(e){
			classToggler(e, 'js-slider-btn', 'is-active');
		}, false);
};

var classToggler = function(event, targetClass, newClass) {
    var correctTarget = event.target != event.currentTarget && event.target.classList.contains(targetClass) ? true : false;
    if (correctTarget) {
    event.target.classList.toggle(newClass);
    }
}






// //slider motion blur
// var filters = document.querySelector('.filters'),
// 		defs = filters.querySelector('defs'),
// 		blur = defs.querySelector('#blur'),
// 		blurFilter = blur.firstElementChild;
//
// var blurTargets = document.querySelectorAll('.js-blur');
// for (var i=0; i<blurTargets; i++){
// 	var blurClone = blur.cloneNode(true),
// 			blurId = 'blur' + i;
// 			blurClone.setAttribute('id',blurId);
// 			defs.appendChild(blurClone);
//
// 			var filter = "url(#"+blurId")";
// 			blurTargets[i].setAttribute('style','filter: -webkit-filter:'+filter+',filter:'+filter);
// }
