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
    return new Promise(function(resolve, reject){
      var audio = new Audio();
      audio.preload = "auto";
      audio.autoplay = true;
      audio.onerror = reject;
      audio.onended = resolve;
      audio.src = sound.src;
    });
   
  }
  
  return {
    play: play,
    sounds: sounds
  }
}();

