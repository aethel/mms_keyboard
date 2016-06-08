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
      , videoWrapper = document.querySelector('.js-factory-wrapper');

    videoWrapper.classList.remove('is-hidden');
    videoElem.setAttribute('src', video.src);
    addImage(image);
    
    if (callback) {
      videoElem.addEventListener('ended', function () {
        videoWrapper.classList.add('is-hidden');
        callback(true);
      }, false);
    }
  }

  function addImage(image) {
    var imageElem = document.querySelector('.js-factory-image');
    imageElem.setAttribute('src',image);    
  }

  return {
    sources: videos
    , addSource: assignSrc
  }

}();

