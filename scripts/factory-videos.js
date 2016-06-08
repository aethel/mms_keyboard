"use strict";

var FactoryVideo = function () {

  var videos = {
    laser: {
      src: '/videos/laser.mp4'
    }
    , cooker: {
      src: '/videos/pressure_cooker.mp4'
    }
    , writer: {
      src: '/videos/type_writer.mp4'
    }
  }

  function assignSrc(video, image, callback) {
    var videoElem = document.querySelector('.js-factory-video')
      , videoWrapper = document.querySelector('.js-factory-wrapper')
      , doorContainer = document.querySelector('.js-doors');

    videoWrapper.classList.remove('is-hidden');
    videoElem.setAttribute('src', video.src);
    
    console.log();
    var doorTimeout = setTimeout(function () {
      doorContainer.classList.add('is-closed');
    }, 11090);

    videoElem.addEventListener('timeupdate', function(){            
      if(videoElem.currentTime >= 10.25) {
        console.log('now'); 
        addImage(image);
      }      
    },false); 
    
    if (callback) {
      videoElem.addEventListener('ended', function () {
        videoWrapper.classList.add('is-hidden');
        doorContainer.classList.remove('is-closed');
        callback(true);
      }, false);
    }
  }

  function addImage(image) {
    console.log('img');
    var imageElem = document.querySelector('.js-factory-image');
    imageElem.setAttribute('src', image);
  }

  return {
    sources: videos
    , addSource: assignSrc
  }

}();