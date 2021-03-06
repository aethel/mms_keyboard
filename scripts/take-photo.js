"use strict";

(function () {
  //take photo button
  var photoBtn = document.querySelector('.js-camera-trigger')
    , photoContainer = document.querySelector('.js-take-photo')
    , counterContainer = document.querySelector('.js-photo-counter')
    , counter = document.querySelector('.js-counter')
    , photoWrapper = document.querySelector('.js-photo-wrapper')
    , photoSpinner = document.querySelector('.js-photo-processing');


  photoBtn.addEventListener('click', function () {
    SoundPlayer.play(SoundPlayer.sounds.cameraClick).then(
      function () {
        photoContainer.classList.add('is-taking-photo');
        counterContainer.classList.add('is-visible');

        var timeout = setTimeout(function () {
          SoundPlayer.play(SoundPlayer.sounds.cameraCountdown);
        }, 100);
      }
      , function (error) {
        console.log(error);
      });
  }, false);

  counter.addEventListener('animationend', function () {
    photoContainer.classList.remove('is-taking-photo');
    counterContainer.classList.remove('is-visible');
    photoWrapper.classList.add('is-hidden');
    photoSpinner.classList.add('is-visible');
  });
})();