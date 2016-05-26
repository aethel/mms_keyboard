"use strict";

(function () {
  window.addEventListener('load', function () {
    //get sliders running
    var sliders = document.querySelectorAll('.js-viewport-wrapper');
    var sliderArray = Array.from(sliders);

    for (var i =0;i< sliderArray.length; i++) {
      InitSlider(sliderArray[i]);
    }

    // get more options button going
    var personalisationWrappers = document.querySelectorAll('.js-personalisation-controls');
    var personalisationControlArray = Array.from(personalisationWrappers);
    
    for (var i =0;i< personalisationControlArray.length; i++) {
      InitControls(personalisationControlArray[i]);
    }

  }, false);

  // personalisation controls toggle
  var InitControls = function (target) {
      var personalisationWrapper = target
        , teamOptions = personalisationWrapper.querySelector('.personalisation-controls')
        , teamOptionsUpBtn = teamOptions.querySelector('.js-options-up')
        , teamOptionsDownBtn = personalisationWrapper.querySelector('.options-btn-wrapper .js-options-down');

      teamOptionsUpBtn.addEventListener('click', function () {
        teamOptions.classList.toggle('is-up');
        teamOptionsDownBtn.parentNode.classList.toggle('is-down');
      }, false);

      teamOptionsDownBtn.addEventListener('click', function () {
        this.parentNode.classList.toggle('is-down');
        teamOptions.classList.toggle('is-up');
      }, false);
    }
    // customistation categories toggle
  var leagueChoice = document.querySelector('.js-league')
    , teamChoice = document.querySelector('.js-team')
    , designChoice = document.querySelector('.js-design');

  leagueChoice.addEventListener('click', function (e) {
    if (e.target != e.currentTarget && e.target.nodeName == 'BUTTON') {
      console.log(e.target.nodeName);
      teamChoice.classList.remove('is-hidden');
    }
  });

  teamChoice.addEventListener('click', function (e) {
    if (e.target != e.currentTarget && e.target.classList.contains('js-slider-btn')) {
      console.log(e.target.nodeName);
      designChoice.classList.remove('is-hidden');
    }
  });

})();

var InitSlider = function (target) {
  console.log(target);
  var viewportWrapper = target
    , viewportSlider = viewportWrapper.querySelector('.js-viewport-slider')
    , nextBtn = viewportWrapper.querySelector('.js-next')
    , prevBtn = viewportWrapper.querySelector('.js-prev')
    , viewportSliderBtns = viewportWrapper.querySelectorAll('.js-slider-btn')
    , viewPortWidth = 880;

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

var classToggler = function (event, targetClass, newClass) {
  var correctTarget = event.target != event.currentTarget && event.target.classList.contains(targetClass) ? true : false;
  if (correctTarget) {
    event.target.classList.toggle(newClass);
  }
}



