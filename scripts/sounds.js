"use strict";

var SoundPlayer = function(){
  var audioElem = document.querySelector('.js-audio');
  
  var sounds = {
    defaultButton: {
      src: 'sounds/pleasant-enjoyable-app-button.wav'
    },
    cameraClick: {
      src: 'sounds/camera-shot-flash-4.wav'
    },
    cameraCountdown: {
      src: 'sounds/game-countdown-205.wav'
    },
    screenTransition: {
      src: 'sounds/fast-swoosh-16.wav'
    },
    alertError: {
      src: 'sounds/menu-button-pop.wav'
    },
    keyboard: {
      src: 'sounds/button-press-click-metallic-an.wav'
    },
    moreChoices: {
      src: 'sounds/goop-23.wav'
    }   
  }
  
  var play = function(sound){
    audioElem.setAttribute('src',sound.src);
    audioElem.play();
  }
  
  return {
    play: play,
    sounds: sounds
  }
}();

