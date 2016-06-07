"use strict";

var Keyboard = function () {
  var interval = setInterval(function () {
    var keyboardButtons = document.querySelectorAll('#virtualKeyboard .kbButton');
    keyboardButtons.length > 0 ? (function () {
      addSounds(keyboardButtons);
      clearInterval(interval);
    })() : console.log('Keyboard not loaded');
  }, 500);


  function addSounds(elements) {
    var keys = Array.from(elements);
    for (var i = 0; i < keys.length; i++) {
      keys[i].addEventListener('click', function () {
        SoundPlayer.play(SoundPlayer.sounds.keyboard);
      }, false);
    }
  }
}();