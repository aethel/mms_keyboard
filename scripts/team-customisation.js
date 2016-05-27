"use strict";

(function () {
  // customistation categories toggle
  var leagueChoice = document.querySelector('.js-league')
    , teamChoice = document.querySelector('.js-team')
    , designChoice = document.querySelector('.js-design');

  leagueChoice.addEventListener('click', function (e) {
    if (e.target != e.currentTarget && e.target.nodeName == 'BUTTON') {
      teamChoice.classList.remove('is-hidden');
    }
  });

  teamChoice.addEventListener('click', function (e) {
    if (e.target != e.currentTarget && e.target.nodeName == 'BUTTON') {    
      designChoice.classList.remove('is-hidden');
    }
  });
})();