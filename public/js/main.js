// DOM elements
const moonCursorDOM = document.querySelector('.moon-cursor');
const moonAlignedDOM = document.querySelector('.moon-aligned');
const aCompass = document.querySelector('.aCompass');
const telescopeDOM = document.querySelector('.telescope img');
const starDOM = document.querySelector('.star');
const alignedSound = document.getElementById('spirit-sound');
const uiDeclinationDOM = document.querySelector('.ui-declination-value');
const uiLatitudeDOM = document.querySelector('.ui-latitude-value');
const uiMagnetDOM = document.querySelector('.ui-magnet');
const uiSatelliteDOM = document.querySelector('.ui-satellite');
const uiHemisphereDOM = document.querySelector('.ui-hemisphere');
const btnHelpDOM = document.querySelector('.ui-help');
const btnInfoDOM = document.querySelector('.ui-info');
const modalInfoDOM = document.querySelector('.modal-info');
//modal info
const infoLatitudeDOM = document.querySelector('.info-text .latitude');
const infoLongitudeDOM = document.querySelector('.info-text .longitude');
const infoAltitudeDOM = document.querySelector('.info-text .altitude');
const infoAccuracyDOM = document.querySelector('.info-text .accuracy');
const infoTiltHDOM = document.querySelector('.info-text .horizontal');
const infoTiltVDOM = document.querySelector('.info-text .vertical');
const infoGeographicalDOM = document.querySelector('.info-text .geographical');
const infoCelestialDOM = document.querySelector('.info-text .celestial');
const infoDeclinationDOM = document.querySelector('.info-text .declination');
// variables
let watchID; //constant location
let declination = 0;
let androidDetected = false;
let spiritActive = true;

//buttons event listeners
moonCursorDOM.addEventListener('click', handleSpirit);
function handleSpirit() {
  spiritActive =! spiritActive;
}
btnHelpDOM.addEventListener('click', handleHelp);
function handleHelp() {
  if(!modalInfoDOM.classList.contains('hide')) {modalInfoDOM.classList.add('hide')};
}
btnInfoDOM.addEventListener('click', handleInfo);
function handleInfo() {
  modalInfoDOM.classList.toggle('hide');
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
    infoTiltHDOM.textContent = gamma.toFixed(2);
    infoTiltVDOM.textContent = beta.toFixed(2);
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
  if (spiritActive) {
    moonCursorDOM.style.top = `${50 + beta}%`;
    moonCursorDOM.style.left = `${50 + gamma}%`;
    moonCursorDOM.querySelector('img').src = `images/${giveMoon(gamma)}.svg`;

    if (Math.round(beta) == 0 && Math.round(gamma) == 0) {
      //aligned!
      moonCursorDOM.querySelector('img').src = `images/moon_aligned.svg`;
      if (!moonAlignedDOM.classList.contains('show')) {moonAlignedDOM.classList.add('show')};
      
      try {
        alignedSound.play();
      } catch (error) {
        console.log('Cant play sound or use vibrate');
      }
    } else {
      if (moonAlignedDOM.classList.contains('show')) {moonAlignedDOM.classList.remove('show')};
    }
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


function updateInfoUIDirection(angle) {
  const geoDir = Math.abs(angle - declination);
  try{
  infoGeographicalDOM.textContent = `${geoDir.toFixed(2)}º`;
  infoCelestialDOM.textContent = `${angle.toFixed(2)}º`;
  infoDeclinationDOM.textContent = `${declination.toFixed(2)}º`;
  }catch{
    console.log("no geolocation available");
  }

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
  const latitude = positionData.coords.latitude;
  const longitude = positionData.coords.longitude;
  const altitude = positionData.coords.altitude || 0;
  const accuracy = positionData.coords.accuracy;
  const hemisphere = (latitude < 0) ? 'S': 'N';
  //TODO: handle accuracy (stopping watch then)
  if (typeof(latitude) === 'number') {
    navigator.geolocation.clearWatch(watchID);
    declination = calcDeclination(latitude, longitude, altitude);
  }
  updateUIMain(hemisphere, latitude);
  updateInfoUIPosition(latitude, longitude, altitude, accuracy)
}

function updateInfoUIPosition(latitude, longitude, altitude, accuracy) {
  infoLatitudeDOM.textContent = `${latitude.toFixed(3)}º`;
  infoLongitudeDOM.textContent = `${longitude.toFixed(3)}º`;
  infoAltitudeDOM.textContent = `${altitude.toFixed(2)} mts.`;
  infoAccuracyDOM.textContent = `${accuracy.toFixed(2)} mts.`;
}
/*
*
*/
function updateUIMain(hemisphere, latitude) {
  if (hemisphere === 'S') {
    uiHemisphereDOM.textContent = 'Polaris Australis';
    telescopeDOM.src = 'images/compass_telescope_south.svg';
  } else {
    uiHemisphereDOM.textContent = 'Stella Polaris';
  }
  //new UI data
  uiDeclinationDOM.textContent = `${Math.abs(declination).toFixed(1)}º`;
  if (declination < 0) {
    uiMagnetDOM.style.transform = `rotate(-25deg)`;
  } else {
    uiMagnetDOM.style.transform = `rotate(25deg)`;
  }
  uiLatitudeDOM.textContent = `${Math.abs(latitude).toFixed(1)}º`;
  uiSatelliteDOM.style.transform = `rotate(${Math.abs(latitude).toFixed(0)}deg)`;
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
  checkForAndroid();
  setUpOrientationEvent();
  setUpLocation();
});



/*
*
*/
function setUpOrientationEvent() {
  if (window.DeviceOrientationEvent) {
    // there is support for orientation
    // handling Apple and absolute orientation
    if ("ondeviceorientationabsolute" in window) {
      window.addEventListener(
        "deviceorientationabsolute",
        function (event) {
          setCompassHeading(event);
      },
      true
      );
    } else if ("ondeviceorientation" in window) {
        window.addEventListener(
            "deviceorientation",
            function (event) {
                setCompassHeading(event);
          },
          true
        );
    }
    //device without sensors?
    if (typeof window.orientation != "undefined") {
    } else {
      // alerted = true;
      //TODO: handle UI modal display
      console.log("No sensors available. Please use a mobile phone");
    }
  } else {
    //TODO: handle UI modal display
    console.log("no support for device orientation, sorry");
  }
}


/*
* 
*/
function setCompassHeading(e) {
    //beta front <> back tilt
    //gamma left <> right tilt
    //alpha rotation degrees
  if ("webkitCompassHeading" in e) {
      // handling Apple
      //TODO: check on real device
      handleTelescope(e.webkitCompassHeading + declination);
      handleTilt(e.beta, e.gamma);
  } else if (e.absolute) {
      handleTelescope(360 - e.alpha + declination);
      handleTilt(e.beta, e.gamma);
  } else {
      if (!alerted) {
          alerted = true;
          //TODO: handle a better UI display
          console.log("problem using device sensors. Are you on mobile phone?");
      }
  }
}


/*
*
*/
function handleTelescope(alpha) {
  angle = (alpha + 360) % 360;
  telescopeDOM.style.transform = `translate(-50%, -50%) rotate(${-angle}deg)`;
  handleStar(angle);
  updateInfoUIDirection(angle);
}

/*
*
*/
function handleStar(angle) {
  let starDeg = 0;
  const angleInt = Math.round(angle);
  if ((angleInt >= 0) && (angleInt <=182)) {
    starDeg = -25;
    document.querySelector('.dial span:first-child').classList.remove('dial-aligned');
  }  
  if ((angleInt > 182) && (angleInt <= 360)) {
    starDeg = 25;
    document.querySelector('.dial span:first-child').classList.remove('dial-aligned');
  }  
  if ((angleInt > 178) && (angleInt < 182)) {
    starDeg = 0;
    try {
      alignedSound.play();
    } catch (error) {
      console.log('Cant play sound or use vibrate');
    }
    document.querySelector('.dial span:first-child').classList.add('dial-aligned');
  }  
  starDOM.style.transform = `translate(-50%, -350px) rotate(${starDeg}deg)`;
}

////////////////
// UTILITIES //
//////////////
/*
* checking for Android device
*/
function checkForAndroid() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
      androidDetected = true;
  }
}

