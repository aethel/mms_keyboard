"use strict";

(function () {
  var attractLoop = document.querySelector('.js-attract-loop')
    , languageSelect = document.querySelector('.js-language-select')
    , howItWorks = document.querySelector('.js-how-it-works')
    , introduction = document.querySelector('.js-introduction')
    , pickTeam = document.querySelector('.js-team-personalisation')
    , takePhoto = document.querySelector('.js-take-photo')
    , confirmPhoto = document.querySelector('.js-confirm-photo')
    , pickTheme = document.querySelector('.js-theme-personalisation')
    , pickMessage = document.querySelector('.js-message-personalisation')
    , cupSize = document.querySelector('.js-cup-size')
    , orderSummary = document.querySelector('.js-order-summary')
    , orderCompleted = document.querySelector('.js-order-completed');

  //section switcher
  var SwitchSection = function (target) {
    currentSection.classList.add('is-hidden');
    target.classList.remove('is-hidden');
    currentSection = target;
  }

  var currentSection = attractLoop;

  attractLoop.addEventListener('click', function () {
    SwitchSection(languageSelect)
  }, false);

  //switch from language page  
  var languageSelection = languageSelect.querySelector('.js-language-menu');

  languageSelection.addEventListener('click', function (e) {

    if (e.target != e.currentTarget && e.target.nodeName == 'BUTTON') {
      SwitchSection(howItWorks);
    }
  }, false);

  //switch from how it works page  
  var nextSectionBtnHow = howItWorks.querySelector('.js-next-section');
  nextSectionBtnHow.addEventListener('click', function (e) {
    SwitchSection(introduction);
  }, false);

  //switch from introduction page  
  var nextSectionBtnIntro = introduction.querySelector('.js-next-section');
  nextSectionBtnIntro.addEventListener('click', function (e) {
    SwitchSection(cupSize);
    console.log(cupSize);
  }, false);

  var gotoPhoto = introduction.querySelector('.js-goto-photo')
    , gotoTheme = introduction.querySelector('.js-goto-theme')
    , gotoMessage = introduction.querySelector('.js-goto-message')
    , gotoTeam = introduction.querySelector('.js-goto-team');


  gotoPhoto.addEventListener('click', function () {
    SwitchSection(takePhoto)
  }, false);
  gotoTheme.addEventListener('click', function () {
    SwitchSection(pickTheme)
  }, false);
  gotoMessage.addEventListener('click', function () {
    SwitchSection(pickMessage)
  }, false);
  gotoTeam.addEventListener('click', function () {
    SwitchSection(pickTeam)
  }, false);

  //switch from confirm photo page  
  var confirmPhotoBtn = confirmPhoto.querySelector('.js-next-section');
  confirmPhotoBtn.addEventListener('click', function (e) {
    SwitchSection(introduction);
  }, false);

  //switch from take photo page  
  var takePhotoBtn = takePhoto.querySelector('.js-photo-processing');
  takePhotoBtn.addEventListener('click', function (e) {
    SwitchSection(confirmPhoto);
  }, false);

  //switch from cup size page  
  var personaliseBtn = cupSize.querySelector('.js-previous-section');
  personaliseBtn.addEventListener('click', function (e) {
    SwitchSection(introduction);
  }, false);

  var orderReviewBtn = cupSize.querySelector('.js-next-section');
  orderReviewBtn.addEventListener('click', function (e) {
    SwitchSection(orderSummary);
  }, false);

  //switch from order review page  
  var cupSizeBtn = orderSummary.querySelector('.js-previous-section');
  cupSizeBtn.addEventListener('click', function (e) {
    SwitchSection(cupSize);
  }, false);

  var finaliseBtn = orderSummary.querySelector('.js-next-section');
  finaliseBtn.addEventListener('click', function (e) {
    SwitchSection(orderCompleted);
  }, false);

  //switch from order completed page  
  var newOrderBtn = orderCompleted.querySelector('.js-next-section');
  newOrderBtn.addEventListener('click', function (e) {
    SwitchSection(introduction);
  }, false);


  //restart button
  var restartBtn = document.querySelectorAll('.main-header .default-btn--half-left')
    , restartBtnArray = Array.from(restartBtn);
  
  for (var i = 0; i < restartBtnArray.length; i++) {
    restartBtnArray[i].addEventListener('click', function (e) {
      introduction.classList.remove('is-hidden');
      this.parentNode.parentNode.classList.add('is-hidden');
    }, false);
  }


})();