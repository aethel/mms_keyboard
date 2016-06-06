"use strict";

var Modal = function () {

  var modalMessages = {
    userPresent: {
      message: 'Are you still here?'
      , buttonLeft: 'Continue'
      , buttonRight: 'Start Over'
    }
    , camera: {
      message: 'Adjust the camera with the buttons. And don\'t forget to smile!'
      , buttonLeft: 'Ok'
      , buttonRight: false
    }
    , mixLeagues: {
      message: 'Sorry, you aren\'t allowed to mix between sports leagues'
      , buttonLeft: 'Ok'
      , buttonRight: false
    }
    , additionalCharge: {
      message: 'There will be an additional charge of $1.50 for using a photo in your design'
      , buttonLeft: 'Ok'
      , buttonRight: false
    }
    , choiceSwitch: {
      message: 'You will lose your photo if you switch to other choices now. Are you sure?'
      , buttonRight: 'No'
      , buttonLeft: 'Yes'
    }
  }

  function toggleModal(context, callback) {
    var messageContainer = document.querySelector('.js-modal-message ')
      , buttonsContainer = document.querySelector('.js-modal-buttons')
      , buttonLeft = document.querySelector('.js-modal-lbutton')
      , buttonRight = document.querySelector('.js-modal-rbutton')
      , modal = document.querySelector('.js-modal')
      , wrapper = document.querySelector('.js-wrapper');

    var modalVisible = modal.classList.contains('is-visible') ? true : false;

    if (!modalVisible) {
      messageContainer.textContent = context.message;
      buttonLeft.textContent = context.buttonLeft;
      if (context.buttonRight && context.buttonRight != '') {
        buttonRight.textContent = context.buttonRight;
        buttonRight.parentElement.classList.remove('is-hidden');
      } else {
        buttonRight.parentElement.classList.add('is-hidden');
      }
      modal.classList.add('is-visible');
      wrapper.classList.add('has-overlay');
    } else {
      modal.classList.remove('is-visible');
      wrapper.classList.remove('has-overlay');
    }



    if (callback) {
      buttonsContainer.addEventListener('click', function (e) {
        SoundPlayer.play(SoundPlayer.sounds.defaultButton);
          if(e.target.classList.contains('js-modal-lbutton')){
            callback(true);      
          } 
          if(e.target.classList.contains('js-modal-rbutton')){
            callback(false);      
          }       
      }, false);      
    }
  }

  return {
    toggle: toggleModal
    , messages: modalMessages
  }

}();

//usage example
//Modal.toggle(Modal.messages.choiceSwitch, function (response) {
//  if(response){
//    console.log(response);
//    //trigger other stuff
//  } else {
//    Modal.toggle();
//  }
//});
//
//Modal.toggle(Modal.messages.choiceSwitch, function (response) {
//  if(response){
//    console.log(response);
//    //trigger other stuff
//  } else {
//    Modal.toggle();
//  }
//});
//Modal.toggle(); to reset