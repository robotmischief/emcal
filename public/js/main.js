// DOM elements
const moonCursorDOM = document.querySelector('.moon-cursor');
const moonAlignedDOM = document.querySelector('.moon-aligned');
const xPos = document.querySelector('.xPos');
const yPos = document.querySelector('.yPos');
const alignedSound = document.getElementById('spirit-sound');

/*
* @description Listen to phone orientation changes
*/
function setUpOrientationEvent() {
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(e) {
        //beta front <> back tilt
        //gamma left <> right tilt
        //alpha rotation degrees
      handleTilt(e.beta, e.gamma);
    }, false);
  }
}

/*
* @description Handles phone tilt on 2 axis
* @param {number} beta Vertical tilt
* @param {number} gamma Horizontal tilt
*/
function handleTilt(beta, gamma) {
  alignMoon(beta, gamma);
  updateTiltUI(beta, gamma);
}

/*
* @description Update UI x and y coordinates
* @param {number} beta Vertical tilt
* @param {number} gamma Horizontal tilt
*/
function updateTiltUI(beta, gamma) {
    xPos.textContent = `x${gamma.toFixed(2)}`;
    yPos.textContent = `y${beta.toFixed(2)}`;
}

/*
* @description Move spirit level bubble
* @param {number} beta Vertical tilt
* @param {number} gamma Horizontal tilt
*/
function alignMoon(beta, gamma) {
    moonCursorDOM.style.top = `${50 + beta}%`;
    moonCursorDOM.style.left = `${50 + gamma}%`;
    moonCursorDOM.querySelector('img').src = `images/${giveMoon(gamma)}.svg`;

  if (Math.round(beta) == 0 && Math.round(gamma) == 0) {
    //aligned!
    moonCursorDOM.querySelector('img').src = `images/moon_aligned.svg`;
    if (!moonAlignedDOM.classList.contains('show')) {moonAlignedDOM.classList.add('show')};
    
    try {
      alignedSound.play();
      if ("vibrate" in navigator){
          window.navigator.vibrate(20);
      }
    } catch (error) {
      console.log('Cant play sound or use vibrate');
    }
  } else {
    if (moonAlignedDOM.classList.contains('show')) {moonAlignedDOM.classList.remove('show')};
  }
}

/*
* @description Pick the moon image to use as the spirit bubble
* @param {number} gamma Horizontal phone tilt
* @return {string} moonPhase Relative path to image
*/
function giveMoon(gamma) {
    const moons = [
        ['moon_waxing_crescent', -30, -20],
        ['moon_first_quarter', -20, -10],
        ['moon_waxing_gibbous', -10, -5],
        ['moon_full', -5 , 5],
        ['moon_waning_gibbous', 5 , 10],
        ['moon_third_quarter', 10 , 20],
        ['moon_waning_crescent', 20, 30]
    ]

    let moonPhase = "moon_new";
      for (moon of moons) {
          if ((gamma >= moon[1]) && (gamma <= moon[2])) {
            moonPhase = moon[0];
          }
        }

        return moonPhase;
}

/*
* @description Setup and start listening event when document is loaded
*/
window.addEventListener('load', (e) => {
  setUpOrientationEvent();
});