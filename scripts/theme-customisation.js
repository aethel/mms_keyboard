"use strict";

(function () {
var designSection = document.querySelector('.theme-personalisation');
  InitSlider(designSection);

})();



var InitSlider = function (target) {
  console.log(target);
  var viewportWrapper = target
    , viewportSlider = viewportWrapper.querySelector('.js-viewport-slider')
    , nextBtn = viewportWrapper.querySelector('.js-next')
    , prevBtn = viewportWrapper.querySelector('.js-prev')
    , viewportSliderBtns = viewportWrapper.querySelectorAll('.js-slider-btn')
    , viewPortWidth = 950;

  nextBtn.addEventListener('click', function () {
    this.style.pointerEvents = 'none';
    if (-viewportSlider.offsetLeft > viewportSlider.offsetWidth - viewPortWidth) {
      return;
    } else {
      prevBtn.classList.remove('is-hidden')
      viewportSlider.style.left = viewportSlider.offsetLeft - viewPortWidth + 'px';
    }
  }, false);
  prevBtn.addEventListener('click', function () {
    this.style.pointerEvents = 'none';
    if (viewportSlider.offsetLeft == 0) {
      return;
    } else {
      viewportSlider.style.left = viewportSlider.offsetLeft + viewPortWidth + 'px';
    }
  }, false);

  viewportSlider.addEventListener('click', function (e) {
    for (var i = 0; i < viewportSliderBtns.length; i++) {
      viewportSliderBtns[i].classList.remove('is-active');
    }
    classToggler(e, 'js-slider-btn', 'is-active');
  }, false);

  viewportSlider.addEventListener('transitionend', function () {
    prevBtn.style.pointerEvents = 'all';
    nextBtn.style.pointerEvents = 'all';
    viewportSlider.offsetLeft == 0 ? prevBtn.classList.add('is-hidden') : prevBtn.classList.remove('is-hidden'); - viewportSlider.offsetLeft > viewportSlider.offsetWidth - viewPortWidth ? nextBtn.classList.add('is-hidden') : nextBtn.classList.remove('is-hidden');
  }, false);
};