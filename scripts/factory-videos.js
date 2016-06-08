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

    var doorTimeout = setTimeout(function () {
      doorContainer.classList.add('is-closed');
    }, 11095);

    videoElem.setAttribute('src', video.src);
    addImage(image);


    if (callback) {
      videoElem.addEventListener('ended', function () {
        videoWrapper.classList.add('is-hidden');
        doorContainer.classList.remove('is-closed');
        callback(true);
      }, false);
    }
  }

  function addImage(image) {
    var imageElem = document.querySelector('.js-factory-image');
    imageElem.setAttribute('src', image);
  }

  return {
    sources: videos
    , addSource: assignSrc
  }

}();