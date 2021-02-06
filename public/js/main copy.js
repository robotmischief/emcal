// DOM elements
const moonCursorDOM = document.querySelector('.moon-cursor');
const moonAlignedDOM = document.querySelector('.moon-aligned');
const xPos = document.querySelector('.xPos');
const yPos = document.querySelector('.yPos');
const aCompass = document.querySelector('.aCompass');
const telescopeDOM = document.querySelector('.telescope img');
const starDOM = document.querySelector('.star');
const alignedSound = document.getElementById('spirit-sound');
const latitudeDOM = document.querySelector('.latitude');
const longitudeDOM = document.querySelector('.longitude');
const altitudeDOM = document.querySelector('.altitude');
const hemisphereDOM = document.querySelector('.hemisphere');
const declinationDOM = document.querySelector('.declination');
// variables
let watchID; //constant location
let declination = 0;

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
      // handleCompass(e.alpha);
      handleCompass2(e.beta, e.gamma, e.alpha);
    }, false);
  } else {
    console.log("no support for device orientation, sorry");
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
  try {
    xPos.textContent = `x${gamma.toFixed(2)}`;
    yPos.textContent = `y${beta.toFixed(2)}`;
  }catch(error){
    console.log("not able to tilt");
  }
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
* @description 
* @param 
*/
var degtorad = Math.PI / 180; // Degree-to-Radian conversion
function handleCompass2(beta, gamma, alpha) {
  var _x = beta  ? beta  * degtorad : 0; // beta value
  var _y = gamma ? gamma * degtorad : 0; // gamma value
  var _z = alpha ? alpha * degtorad : 0; // alpha value

  var cX = Math.cos( _x );
  var cY = Math.cos( _y );
  var cZ = Math.cos( _z );
  var sX = Math.sin( _x );
  var sY = Math.sin( _y );
  var sZ = Math.sin( _z );

  // Calculate Vx and Vy components
  var Vx = - cZ * sY - sZ * sX * cY;
  var Vy = - sZ * sY + cZ * sX * cY;

  // Calculate compass heading
  var compassHeading = Math.atan( Vx / Vy );

  // Convert compass heading to use whole unit circle
  if( Vy < 0 ) {
    compassHeading += Math.PI;
  } else if( Vx < 0 ) {
    compassHeading += 2 * Math.PI;
  }

  compassHeading = compassHeading * ( 180 / Math.PI ); // Compass Heading (in degrees)
  aCompass.textContent = `${alpha.toFixed(2)}º`;
  telescopeDOM.style.transform = `translate(-50%, -50%) rotate(${compassHeading}deg)`;
}


function handleCompass(alpha) {
  // compass = Math.abs(alpha - 360 + declination);
  // compass = Math.abs(alpha);
  compass = Math.abs(360 - alpha);
  // compass = compass +  declination;
  aCompass.textContent = `${compass.toFixed(2)}º`;
  telescopeDOM.style.transform = `translate(-50%, -50%) rotate(${-compass}deg)`;
  let starDeg = 0;
  if ((compass >= 10) && (compass <=180)) {
    starDeg = 25;
  }  
  if ((compass > 180) && (compass <= 350)) {
    starDeg = -25;
  }  
  starDOM.style.transform = `translate(-50%, -350px) rotate(${starDeg}deg)`;
}



function setUpLocation() {
  try {
      if (navigator.geolocation) {
          //get location
          //watch options
          const watchOptions = {
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 15000
          };
          navigator.geolocation.getCurrentPosition(locationSuccess, locationError, watchOptions);
          watchID = navigator.geolocation.watchPosition(locationSuccess, locationError, watchOptions);
      }else{
          alert("Browser don't support geolocalization");
      }
  }
  catch(error){
      alert("Couldn't initialize geolocation. Please check connection.");
      console.log("error", error);
  }
}


/*
* @description handle location position callback
*/
function locationSuccess(positionData) {
  console.log("POS DATA", positionData);
  const latitude = positionData.coords.latitude;
  const longitude = positionData.coords.longitude;
  const altitude = positionData.coords.altitude || 0;
  latitudeDOM.textContent = `Lat: ${latitude.toFixed(2)}º`;
  longitudeDOM.textContent = `Lon: ${longitude.toFixed(2)}º`;
  altitudeDOM.textContent = `Alt: ${altitude.toFixed(2)}mts`;
  if(latitude < 0){
    // alert("you are in the south hemisphere");
    // telescopeDOM.src = 'images/compass_telescope_south.svg';
    hemisphereDOM.textContent = "South Hemisphere";
  }else{
    // alert("you are in the north hemisphere");
    // telescopeDOM.src = 'images/compass_telescope.svg';
    hemisphereDOM.textContent = "North Hemisphere";
  }



  //TODO: handle accuracy
  if (typeof(latitude) === 'number') {
    navigator.geolocation.clearWatch(watchID);
    declination = calcDeclination(latitude, longitude, altitude);
    declinationDOM.textContent = `${declination}º`;
  }

}


/*
* @description handle location error callback
*/
function locationError(error) {
  let msg;
  switch(error.code){
      case 1:
          //error PERMISSION DENIED
          msg = 'please ENABLE geolocation and RELOAD this App';
          break;
          
      case 2:
          //error POSITION UNAVAILABLE
          msg = 'there was a problem locating thisdevice. Please check connection.';
          break;
          
      case 3:
          //TIMEOUT
          msg = "a lot of time has passed whith out locating the device.";
          break;
  }
  alert(`Oops... ${msg}`);
}

/*
* @description Setup and start listening event when document is loaded
*/
window.addEventListener('load', (e) => {
  // calcDeclination(-34.594, -58.406, 0);
  setUpOrientationEvent();
  setUpLocation();
});



