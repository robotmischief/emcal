//COF DATA
const COF_DATE = "2020-2025"; //valid date of cof data
const COF = `2020.0            WMM-2020        12/10/2019
1  0  -29404.5       0.0        6.7        0.0
1  1   -1450.7    4652.9        7.7      -25.1
2  0   -2500.0       0.0      -11.5        0.0
2  1    2982.0   -2991.6       -7.1      -30.2
2  2    1676.8    -734.8       -2.2      -23.9
3  0    1363.9       0.0        2.8        0.0
3  1   -2381.0     -82.2       -6.2        5.7
3  2    1236.2     241.8        3.4       -1.0
3  3     525.7    -542.9      -12.2        1.1
4  0     903.1       0.0       -1.1        0.0
4  1     809.4     282.0       -1.6        0.2
4  2      86.2    -158.4       -6.0        6.9
4  3    -309.4     199.8        5.4        3.7
4  4      47.9    -350.1       -5.5       -5.6
5  0    -234.4       0.0       -0.3        0.0
5  1     363.1      47.7        0.6        0.1
5  2     187.8     208.4       -0.7        2.5
5  3    -140.7    -121.3        0.1       -0.9
5  4    -151.2      32.2        1.2        3.0
5  5      13.7      99.1        1.0        0.5
6  0      65.9       0.0       -0.6        0.0
6  1      65.6     -19.1       -0.4        0.1
6  2      73.0      25.0        0.5       -1.8
6  3    -121.5      52.7        1.4       -1.4
6  4     -36.2     -64.4       -1.4        0.9
6  5      13.5       9.0       -0.0        0.1
6  6     -64.7      68.1        0.8        1.0
7  0      80.6       0.0       -0.1        0.0
7  1     -76.8     -51.4       -0.3        0.5
7  2      -8.3     -16.8       -0.1        0.6
7  3      56.5       2.3        0.7       -0.7
7  4      15.8      23.5        0.2       -0.2
7  5       6.4      -2.2       -0.5       -1.2
7  6      -7.2     -27.2       -0.8        0.2
7  7       9.8      -1.9        1.0        0.3
8  0      23.6       0.0       -0.1        0.0
8  1       9.8       8.4        0.1       -0.3
8  2     -17.5     -15.3       -0.1        0.7
8  3      -0.4      12.8        0.5       -0.2
8  4     -21.1     -11.8       -0.1        0.5
8  5      15.3      14.9        0.4       -0.3
8  6      13.7       3.6        0.5       -0.5
8  7     -16.5      -6.9        0.0        0.4
8  8      -0.3       2.8        0.4        0.1
9  0       5.0       0.0       -0.1        0.0
9  1       8.2     -23.3       -0.2       -0.3
9  2       2.9      11.1       -0.0        0.2
9  3      -1.4       9.8        0.4       -0.4
9  4      -1.1      -5.1       -0.3        0.4
9  5     -13.3      -6.2       -0.0        0.1
9  6       1.1       7.8        0.3       -0.0
9  7       8.9       0.4       -0.0       -0.2
9  8      -9.3      -1.5       -0.0        0.5
9  9     -11.9       9.7       -0.4        0.2
10  0      -1.9       0.0        0.0        0.0
10  1      -6.2       3.4       -0.0       -0.0
10  2      -0.1      -0.2       -0.0        0.1
10  3       1.7       3.5        0.2       -0.3
10  4      -0.9       4.8       -0.1        0.1
10  5       0.6      -8.6       -0.2       -0.2
10  6      -0.9      -0.1       -0.0        0.1
10  7       1.9      -4.2       -0.1       -0.0
10  8       1.4      -3.4       -0.2       -0.1
10  9      -2.4      -0.1       -0.1        0.2
10 10      -3.9      -8.8       -0.0       -0.0
11  0       3.0       0.0       -0.0        0.0
11  1      -1.4      -0.0       -0.1       -0.0
11  2      -2.5       2.6       -0.0        0.1
11  3       2.4      -0.5        0.0        0.0
11  4      -0.9      -0.4       -0.0        0.2
11  5       0.3       0.6       -0.1       -0.0
11  6      -0.7      -0.2        0.0        0.0
11  7      -0.1      -1.7       -0.0        0.1
11  8       1.4      -1.6       -0.1       -0.0
11  9      -0.6      -3.0       -0.1       -0.1
11 10       0.2      -2.0       -0.1        0.0
11 11       3.1      -2.6       -0.1       -0.0
12  0      -2.0       0.0        0.0        0.0
12  1      -0.1      -1.2       -0.0       -0.0
12  2       0.5       0.5       -0.0        0.0
12  3       1.3       1.3        0.0       -0.1
12  4      -1.2      -1.8       -0.0        0.1
12  5       0.7       0.1       -0.0       -0.0
12  6       0.3       0.7        0.0        0.0
12  7       0.5      -0.1       -0.0       -0.0
12  8      -0.2       0.6        0.0        0.1
12  9      -0.5       0.2       -0.0       -0.0
12 10       0.1      -0.9       -0.0       -0.0
12 11      -1.1      -0.0       -0.0        0.0
12 12      -0.3       0.5       -0.1       -0.1
999999999999999999999999999999999999999999999999
999999999999999999999999999999999999999999999999`;

// global variables
const DEGTORAD = Math.PI / 180;
const RADTODEG = 180 / Math.PI;
let androidDetected = false;
let latitud = 0;
let declination = 0;
let geoNorth = 0;
let celNorth = 0;
let currentMagneticDec = 0;
let currentOutsideCompassAngle = 0;
let destOutsideCompassAngle = 0;
let prevT = 0;

//get location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(calcWMM, errorLoc);
      } else {
        alert("Error getting location, can't calculate declination");
      }
}
function errorLoc() {
    alert("Error getting location, can't calculate declination");
}

function calcWMM(position) {
    const newGeomag = new Geomag(COF);
    const geoMag = newGeomag.mag;
    myGeoMag = geoMag(
        position.coords.latitude,
        position.coords.longitude,
        position.coords.altitude / 1000.0
    );
    latitud = position.coords.latitude;
    altitude = position.coords.altitude;
    declination = myGeoMag.dec;
    console.log("Location data ready...")
    console.log("DECLINATION",declination);
    console.log("LAT",position.coords.latitude);
    console.log("LON",position.coords.longitude);
    console.log("ALT",position.coords.altitude/1000);
    updateUI()
}

function updateUI() {
    document.getElementById('magnetic-angle').textContent = geoNorth;
    document.getElementById('declination-angle').textContent = declination;
    document.getElementById('resulting-angle').textContent = geoNorth - declination ;
    document.getElementById('outside-angle').textContent = 0;
    document.getElementById('magnetic-dec').textContent = 0;
}

function updateTime(now) {
    let deltaTime = (now - prevT) / 1000.0;
    if (deltaTime > 0.2) {deltaTime = 0};
    updateCompass(deltaTime);
    prevT = now;
    window.requestAnimationFrame(updateTime);
}

function updateCompass(time) {
    let redrawCompass = false;
    let rot = time * Math.abs(declination - currentMagneticDec);
    if (currentMagneticDec < declination) {
        currentMagneticDec += rot;
        if (currentMagneticDec > declination) currentMagneticDec = declination;
        redrawCompass = true;
      } else if (currentMagneticDec > declination) {
        currentMagneticDec -= rot;
        if (currentMagneticDec < declination) currentMagneticDec = declination;
        redrawCompass = true;
      }

         rot =
      time * Math.abs(destOutsideCompassAngle - currentOutsideCompassAngle);

    if (currentOutsideCompassAngle < destOutsideCompassAngle) {
      currentOutsideCompassAngle += rot;
      if (currentOutsideCompassAngle > destOutsideCompassAngle)
        currentOutsideCompassAngle = destOutsideCompassAngle;
      redrawCompass = true;
    } else if (currentOutsideCompassAngle > destOutsideCompassAngle) {
      currentOutsideCompassAngle -= rot;
      if (currentOutsideCompassAngle < destOutsideCompassAngle)
        currentOutsideCompassAngle = destOutsideCompassAngle;
      redrawCompass = true;
    }

    if (redrawCompass) {
        drawCompass();
      }
}

function drawCompass() {
    // rotate(degreesToRads(-currentOutsideCompassAngle));
    // rotate(degreesToRads(currentMagneticDec));
    document.getElementById('outside-angle').textContent = degreesToRads(-currentOutsideCompassAngle);
    document.getElementById('magnetic-dec').textContent = degreesToRads(currentMagneticDec);
    document.getElementById('telescope').rotate = degreesToRads(currentMagneticDec);
}

function setOutsideCompassAngle(angle) {
    angle = (angle + 360) % 360;
    document.getElementById('magnetic-angle').textContent = angle;
    document.getElementById('telescope').style.transform = `rotate(${-angle}deg)`;
    console.log("angle" , angle);
    currentOutsideCompassAngle = (currentOutsideCompassAngle + 360) % 360;
    console.log("current" ,currentOutsideCompassAngle);
    document.getElementById('outside-angle').textContent = currentOutsideCompassAngle;
    //Checking which angle path is closest
    var lowAngle = angle - 360;
    var highAngle = angle + 360;
    var range1 = Math.abs(currentOutsideCompassAngle - lowAngle);
    var range2 = Math.abs(currentOutsideCompassAngle - angle);
    var range3 = Math.abs(currentOutsideCompassAngle - highAngle);

    if (range1 < range2 && range1 < range3) {
      destOutsideCompassAngle = lowAngle;
    } else if (range2 < range1 && range2 < range3) {
      destOutsideCompassAngle = angle;
    } else {
      destOutsideCompassAngle = highAngle;
    }
  }

  function setCompassHeading(event) {
    if ("webkitCompassHeading" in event) {
      // Apple works only with this, alpha doesn't work
      setOutsideCompassAngle(event.webkitCompassHeading + declination);
    } else if (event.absolute) {
      setOutsideCompassAngle(360 - event.alpha + declination);
    } else {
      if (!alerted) {
        alerted = true;
        alert(
          "Not able to calculate compass heading, try a different browser"
        );
      }
    }
  }

//   window.addEventListener(
//     "devicemotion",
//     function (event) {
//       var accX = event.accelerationIncludingGravity.x / 9.8;
//       var accY = event.accelerationIncludingGravity.y / 9.8;
//       if (!androidDetected) {
//         accX = -accX;
//         accY = -accY;
//       }
//       //LandScapes
//       if (window.orientation == 90) {
//         var rep = accX;
//         accX = -accY;
//         accY = rep;
//       }

//       if (window.orientation == -90) {
//         var rep = accX;
//         accX = -accY;
//         accY = rep;
//         accX = -accX;
//         accY = -accY;
//       }

//       console.log("GEONORTH", event.alpha);
//       geoNorth = event.alpha;
//       updateUI();
//     //   setBubbleCoord(accX, accY);
//     },
//     true
//   );
// UTILITIES
function degreesToRads(deg) {
    return deg * DEGTORAD;
  }

  function radiansToDegs(rad) {
    return rad * RADTODEG;
  }


window.addEventListener('load', ()=>{
    console.log("document loaded.. starting");
    console.log("detecting android", checkForAndroid());
    getLocation();
    // setUpOrientationEvent();
    // drawCompass();
    setUpCompassEvent();
})






/////////////////////////////////////
///////////////////////

//detec if android phone because...
function checkForAndroid() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        androidDetected = true;
    }
    return androidDetected;
}




function setUpCompassEvent(){
    if ("ondeviceorientationabsolute" in window) {
        window.addEventListener(
            "deviceorientationabsolute",
            function (event) {
                setCompassHeading(event);
                console.log("absolute");
                // alert("absolute");
            },
            true
            );
        } else if ("ondeviceorientation" in window) {
            window.addEventListener(
                "deviceorientation",
                function (event) {
                    setCompassHeading(event);
                    console.log("not absolute");
                    // alert("not absolute");
                },
                true
                );
            }
            
            if (typeof window.orientation != "undefined") {
            } else {
                alerted = true;
                // alert(
                    //   "Current device does not support sensors, use a mobile platform for best results"
                    // );
                }
            }



            function setUpOrientationEvent() {
                if (window.DeviceOrientationEvent) {
                  window.addEventListener('deviceorientation', function(e) {
                      //beta front <> back tilt
                      //gamma left <> right tilt
                      //alpha rotation degrees
                      // handleTilt(e.beta, e.gamma);//////////
                      // handleCompass(e.alpha);
                      // handleCompass2(e.beta, e.gamma, e.alpha);
                      geoNorth = e.alpha;
                      console.log("decive orientation" , geoNorth);
                      updateUI();
                    }, false);
                } else {
                    console.log("no support for device orientation, sorry");
                }
            }