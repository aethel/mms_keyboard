"use strict";

var FactoryVideo = function () {
  var imageElem = document.querySelector('.js-factory-image');
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
      , doorContainer = document.querySelector('.js-doors')
      , timing = null;

    videoWrapper.classList.remove('is-hidden');
    videoElem.setAttribute('src', video.src);

    var doorTimeout = setTimeout(function () {
      doorContainer.classList.add('is-closed');
    }, 11080);

    switch (true) {
    case video == FactoryVideo.sources.writer:
      timing = 9.25;
      break;
    case video == FactoryVideo.sources.cooker:
      timing = 10.50;
      break;
    case video == FactoryVideo.sources.laser:
      timing = 10.35;
      break;
    default:
      break;
    }


    videoElem.addEventListener('timeupdate', function () {
        if (videoElem.currentTime >= timing) {
          addImage(image);
         
        }
    }, false);

  if (callback) {
    videoElem.addEventListener('ended', function () {
      videoWrapper.classList.add('is-hidden');
      doorContainer.classList.remove('is-closed');
      imageElem.removeAttribute('src');
      callback(true);
    }, false);
  }
}

function addImage(image) {
  imageElem.setAttribute('src', image);
}

return {
  sources: videos
  , addSource: assignSrc
}

}();