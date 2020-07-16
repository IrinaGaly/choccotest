 
  const video = document.getElementById("video");

  const playButton = document.getElementById("play-pause");
  const playBigButton = document.getElementById("player__start");
  const muteButton = document.getElementById("mute");
  
  const seekBar = document.getElementById("seek-bar");
  const volumeBar = document.getElementById("volume-bar");

// duration

seekBar.addEventListener("change", function() {
  
  const time = video.duration * (seekBar.value / 100);


  video.currentTime = time;
});


video.addEventListener("timeupdate", function() {
  
  const value = (100 / video.duration) * video.currentTime;

  
  seekBar.value = value;
});

  
seekBar.addEventListener("mousedown", function() {
  video.pause();

  if ($('.player__start').css('display') == 'none') {
    $('.player__start').css({
      'display': 'block'
    })
  }

  if ($('.playback-icon').css('display') == 'none') {
    $('.playback-icon').css({
      'display': 'block'
    })
  }

  $('#play-pause').removeClass('paused');
  $('#play-pause').addClass('player__playback-button');

});


seekBar.addEventListener("mouseup", function() {
  video.play();

  $('.player__start').css({
    'display': 'none'
  });
  
  $('.playback-icon').css({
    'display': 'none'
  });

  $('#play-pause').removeClass('player__playback-button');
  $('#play-pause').addClass('paused');
});
 
// play video

playButton.addEventListener("click", function() {
  if (video.paused == true) {
    
    video.play();

    $('.player__start').css({
      'display': 'none'
    });
    
    $('.playback-icon').css({
      'display': 'none'
    });

    $('#play-pause').removeClass('player__playback-button');
    $('#play-pause').addClass('paused');
    
  } else {
   
    video.pause();

    if ($('.player__start').css('display') == 'none') {
      $('.player__start').css({
        'display': 'block'
      })
    }

    if ($('.playback-icon').css('display') == 'none') {
      $('.playback-icon').css({
        'display': 'block'
      })
    }

    $('#play-pause').removeClass('paused');
    $('#play-pause').addClass('player__playback-button');
    
  }
});

//play video by big buttom

playBigButton.addEventListener("click", function() {
  if (video.paused == true) {
    
    video.play();

    $('.player__start').css({
      'display': 'none'
    })

    $('.playback-icon').css({
      'display': 'none'
    });

    $('#play-pause').removeClass('player__playback-button');
    $('#play-pause').addClass('paused');

  } else {
   
    video.pause();
    
  }
});

//volume

muteButton.addEventListener("click", function() {
  if (video.muted == false) {
  
    video.muted = true;

   
    $(".volume__icon").attr("src","/icons/mute.ico");
    

  } else {
    
    video.muted = false;

    $(".volume__icon").attr("src","/icons/volume.svg");
    
    
  }
});

volumeBar.addEventListener("change", function() {
  video.volume = volumeBar.value;
});


