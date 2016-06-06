"use strict";
var SectionSwitch = function () {
  //section switcher
  var sections = {
    attractLoop: document.querySelector('.js-attract-loop')
    , languageSelect: document.querySelector('.js-language-select')
    , howItWorks: document.querySelector('.js-how-it-works')
    , introduction: document.querySelector('.js-introduction')
    , pickTeam: document.querySelector('.js-team-personalisation')
    , takePhoto: document.querySelector('.js-take-photo')
    , confirmPhoto: document.querySelector('.js-confirm-photo')
    , pickTheme: document.querySelector('.js-theme-personalisation')
    , pickMessage: document.querySelector('.js-message-personalisation')
    , cupSize: document.querySelector('.js-cup-size')
    , orderSummary: document.querySelector('.js-order-summary')
    , orderCompleted: document.querySelector('.js-order-completed')
    , currentSection: null
  }
  sections.currentSection = sections.attractLoop;

  function toggle(target) {
    sections.currentSection.classList.add('is-hidden');
    target.classList.remove('is-hidden');
    sections.currentSection = target;
  };

  return {
    switch: toggle
    , sections: sections
    
  }
}();

SectionSwitch.sections.attractLoop.addEventListener('click', function () {
  SoundPlayer.play(SoundPlayer.sounds.defaultButton).then(
  function(){
//    SoundPlayer.play(SoundPlayer.sounds.screenTransition);
  },
  function(error){
    console.log(error);
  });
  SectionSwitch.switch(SectionSwitch.sections.languageSelect);
  
}, false);


//    //switch from language page  
var languageSelection = SectionSwitch.sections.languageSelect.querySelector('.js-language-menu');

languageSelection.addEventListener('click', function (e) {
  if (e.target != e.currentTarget && e.target.nodeName == 'BUTTON') {
    SoundPlayer.play(SoundPlayer.sounds.defaultButton);
    SectionSwitch.switch(SectionSwitch.sections.howItWorks);
  }
}, false);

//switch from how it works page  
var nextSectionBtnHow = SectionSwitch.sections.howItWorks.querySelector('.js-next-section');
nextSectionBtnHow.addEventListener('click', function (e) {
  SoundPlayer.play(SoundPlayer.sounds.defaultButton);
  SectionSwitch.switch(SectionSwitch.sections.introduction);
}, false);

//switch from introduction page  
var nextSectionBtnIntro = SectionSwitch.sections.introduction.querySelector('.js-next-section');
nextSectionBtnIntro.addEventListener('click', function (e) {
  SoundPlayer.play(SoundPlayer.sounds.defaultButton);
  SectionSwitch.switch(SectionSwitch.sections.cupSize);
}, false);

var gotoPhoto = SectionSwitch.sections.introduction.querySelector('.js-goto-photo')
  , gotoTheme = SectionSwitch.sections.introduction.querySelector('.js-goto-theme')
  , gotoMessage = SectionSwitch.sections.introduction.querySelector('.js-goto-message')
  , gotoTeam = SectionSwitch.sections.introduction.querySelector('.js-goto-team');


gotoPhoto.addEventListener('click', function () {
  SoundPlayer.play(SoundPlayer.sounds.defaultButton);
  SectionSwitch.switch(SectionSwitch.sections.takePhoto)
}, false);
gotoTheme.addEventListener('click', function () {
  SoundPlayer.play(SoundPlayer.sounds.defaultButton);
  SectionSwitch.switch(SectionSwitch.sections.pickTheme)
}, false);
gotoMessage.addEventListener('click', function () {
  SoundPlayer.play(SoundPlayer.sounds.defaultButton);
  SectionSwitch.switch(SectionSwitch.sections.pickMessage)
}, false);
gotoTeam.addEventListener('click', function () {
  SoundPlayer.play(SoundPlayer.sounds.defaultButton);
  SectionSwitch.switch(SectionSwitch.sections.pickTeam)
}, false);

//switch from confirm photo page  
var confirmPhotoBtn = SectionSwitch.sections.confirmPhoto.querySelector('.js-next-section');
confirmPhotoBtn.addEventListener('click', function (e) {
  SoundPlayer.play(SoundPlayer.sounds.defaultButton);
  SectionSwitch.switch(SectionSwitch.sections.introduction);
}, false);
//
//switch from take photo page  
var takePhotoBtn = SectionSwitch.sections.takePhoto.querySelector('.js-photo-processing');
takePhotoBtn.addEventListener('click', function (e) {
  SoundPlayer.play(SoundPlayer.sounds.defaultButton);
  SectionSwitch.switch(SectionSwitch.sections.confirmPhoto);
}, false);

//switch from cup size page  
var personaliseBtn = SectionSwitch.sections.cupSize.querySelector('.js-previous-section');
personaliseBtn.addEventListener('click', function (e) {
  SoundPlayer.play(SoundPlayer.sounds.defaultButton);
  SectionSwitch.switch(SectionSwitch.sections.introduction);
}, false);

var orderReviewBtn = SectionSwitch.sections.cupSize.querySelector('.js-next-section');
orderReviewBtn.addEventListener('click', function (e) {
  SoundPlayer.play(SoundPlayer.sounds.defaultButton);
  SectionSwitch.switch(SectionSwitch.sections.orderSummary);
}, false);

//switch from order review page  
var cupSizeBtn = SectionSwitch.sections.orderSummary.querySelector('.js-previous-section');
cupSizeBtn.addEventListener('click', function (e) {
  SoundPlayer.play(SoundPlayer.sounds.defaultButton);
  SectionSwitch.switch(SectionSwitch.sections.cupSize);
}, false);

var finaliseBtn = SectionSwitch.sections.orderSummary.querySelector('.js-next-section');
finaliseBtn.addEventListener('click', function (e) {
  SoundPlayer.play(SoundPlayer.sounds.defaultButton);
  SectionSwitch.switch(SectionSwitch.sections.orderCompleted);
}, false);

//switch from order completed page  
var newOrderBtn = SectionSwitch.sections.orderCompleted.querySelector('.js-next-section');
newOrderBtn.addEventListener('click', function (e) {
  SoundPlayer.play(SoundPlayer.sounds.defaultButton);
  SectionSwitch.switch(SectionSwitch.sections.introduction);
}, false);


//restart button
var restartBtn = document.querySelectorAll('.main-header .default-btn--half-left')
  , restartBtnArray = Array.from(restartBtn);

for (var i = 0; i < restartBtnArray.length; i++) {
  restartBtnArray[i].addEventListener('click', function (e) {
    this.parentNode.parentNode.classList.add('is-hidden');
    SoundPlayer.play(SoundPlayer.sounds.defaultButton);
    SectionSwitch.sections.introduction.classList.remove('is-hidden');    
    SectionSwitch.sections.currentSection = SectionSwitch.sections.introduction;
    
   var keyboard = document.getElementById('VirtualKeyboardIME'); 
    if(keyboard != null) { 
      keyboard.style.display = 'none' 
    } 
  }, false);
}
