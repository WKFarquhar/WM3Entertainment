var vh = window.innerHeight * 0.01;
var sideBar = document.querySelector('.sidebar');
var sLinks = document.querySelector('.s-links');
var middleBar = document.querySelector('.bar-middle');
var topBar = document.querySelector('.bar-top');
var bottomBar = document.querySelector('.bar-bottom');
var pWrapper = document.querySelector('.parallax_wrapper');
var toggleButton = document.querySelector('.toggle-button');
var darken = document.querySelector('#darken');
var stopProp = document.querySelectorAll('.stopProp');
var repeater;
var redHit1 = document.querySelector('.red-hit-1');
var redHit2 = document.querySelector('.red-hit-2');
var redHit3 = document.querySelector('.red-hit-3');
var redHit4 = document.querySelector('.red-hit-4');
var blueShip = document.querySelector('.blue-ship');
var redHits = [redHit1, redHit2, redHit3, redHit4];


function toggleSideBar() {
  if (sLinks.style.display != 'block') {
    sLinks.style.display = 'block';

    if (window.innerWidth <= "700") {
      sideBar.style.width = '5.75rem';
    } else {
      sideBar.style.width = '7.81rem';
    }
    
    middleBar.style.visibility = 'hidden';
    topBar.style.transform = 'translate(-4px, 11.5px) rotate(45deg)';
    bottomBar.style.transform = 'translate(-4px, -11.5px) rotate(-45deg)';
    pWrapper.style.opacity = '0.5';
    pWrapper.setAttribute('onclick', 'toggleSideBar()');
    pWrapper.style.pointerEvents = 'none';
    darken.style.display = 'block';
    toggleButton.style.width = '34.4px';
    toggleButton.style.transform = 'translate(6px, 0px)';

    for (i = 0; i < stopProp.length; i++) {
      stopProp[i].style.pointerEvents = 'none';
    }

  } else {
    sLinks.style.display = 'none';
    sideBar.style.width = '0';
    middleBar.style.visibility = 'visible';
    topBar.style.transform = 'rotate(0deg)';
    bottomBar.style.transform = 'rotate(0deg)';
    pWrapper.style.opacity = '1';
    pWrapper.removeAttribute('onclick');
    pWrapper.style.pointerEvents = 'auto';
    darken.style.display = 'none';
    toggleButton.style.width = '30px';
    toggleButton.style.transform = 'translate(0px, 0px)';

    for (i = 0; i < stopProp.length; i++) {
      stopProp[i].style.pointerEvents = 'auto';
    }
  }
}

function detectCollision() {
  let blueShipCollider = blueShip.getBoundingClientRect();

  for (i = 0; i < redHits.length; i++) {
    if (redHits[i].getBoundingClientRect().bottom - 25 <= blueShipCollider.bottom) {
      redHits[i].style.opacity = '1';
    } else {
      redHits[i].style.opacity = '0';
    }
  }

  repeater = setTimeout(detectCollision, 33);
}

var resizeHandler = function onResize() {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

document.documentElement.addEventListener('resize', resizeHandler, true);
detectCollision();