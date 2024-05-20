const video = document.querySelector("#custom-video-player");
video.removeAttribute("controls");

//--------------------------------------------------------------
//The following code is for playing and pausing the video.

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton)

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg)

function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}


//--------------------------------------------------------------
//The following code is for the progress bar of the video.

const progressBar = document.querySelector("#progress-bar-fill");
console.log(progressBar)

video.addEventListener("timeupdate", updateProgressBar);

function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}


//--------------------------------------------------------------
// The following code is supposed to be for skipping or going back through the video by 5 seconds.

const backFiveButton = document.querySelector("#back-five-button");
console.log(backFiveButton);

backFiveButton.addEventListener("click", backFive);

function backFive() {
    video.currentTime = video.currentTime - 5;
}

const forwardFiveButton = document.querySelector("#forward-five-button");
console.log(forwardFiveButton);

forwardFiveButton.addEventListener("click", forwardFive);

function forwardFive() {
    video.currentTime = video.currentTime + 5;
}


//--------------------------------------------------------------
//The following code is for muting and unmuting the video's audio.

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
  if (video.muted) {
    muteUnmuteButton.style.backgroundColor = "rgb(205, 119, 248)";
    video.muted = false;
  } else {
    muteUnmuteButton.style.backgroundColor = "rgb(205, 119, 150)";
    video.muted = true;
  }
}


// //--------------------------------------------------------------
// //The following code is to decrease and max out the volume of the video, but was unused because I managed
// to make the volume increase & decrease better with Rohit's help in his newly-made example project.

// const decreaseVolumeButton = document.querySelector("#decrease-volume-button");
// console.log(decreaseVolumeButton);

// decreaseVolumeButton.addEventListener("click", decreaseVolume);

// function decreaseVolume() {
//     video.volume = 0.2;
// } 

// const maxVolumeButton = document.querySelector("#max-volume-button");
// console.log(maxVolumeButton);
  
// maxVolumeButton.addEventListener("click", maxVolume);

// function maxVolume() { 
//     video.volume = 1.0;
// }


//--------------------------------------------------------------
//The following code is to allow full screen of the video.

video.addEventListener("dblclick", goFullScreen);

const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", goFullScreen);

function goFullScreen() {
  if(!document.fullScreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}


//--------------------------------------------------------------
//The following code is to decrease and increase the volume of the video.

video.addEventListener("volumechange", updateVolume);

const increaseVolumeButton = document.querySelector("#increase-volume-button");
increaseVolumeButton.addEventListener("click", increaseVolume);

const decreaseVolumeButton = document.querySelector("#decrease-volume-button");
decreaseVolumeButton.addEventListener("click", decreaseVolume);

function updateVolume() {
    const volume = video.volume;
    console.log("Volume changed:", volume);
  }
  
  function increaseVolume() {
    if (video.volume < 0.9) {
      video.volume += 0.1;
    }
  }
  
  function decreaseVolume() {
    if (video.volume > 0.11) {
      video.volume -= 0.1;
    }
  }


//-----------------------------------------------------------------
// The following code allows people to like the video and shows the total number of likes for the video.

let likeCount = 0;

const likeButton = document.querySelector("#like-button");
console.log(likeButton);

likeButton.addEventListener("click", addLikes);

const likes = document.querySelector("#likes");
likes.textContent = likeCount;

function addLikes() {
  likeCount++;
  likes.textContent = likeCount;
}