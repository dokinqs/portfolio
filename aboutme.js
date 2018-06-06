/////////////// GREETING ALERT ///////////////

// document.addEventListener("DOMContentLoaded", function() { 
//   console.log("DOM parsed"); 
// });

// window.onload = function() {
//   var date = new Date();
//   alert(`Hey, you found me. C: - ${date.toLocaleString('en-US')}`);
// }


/////////////// CHANGE PIC ///////////////


var imgx =  document.getElementById('selfpic');

function changePic() {
  imgx.src = (imgx.getAttribute('src') === "art.png") ? "pic.png" : "art.png";
}


/////////////// STICKY NAVBAR ///////////////

var navig = document.getElementById("navbar");
var topOfNav = navig.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = navig.offsetHeight + 'px';
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);

// ES6
// const navig = document.querySelector('#navbar');
// let topOfNav = navig.offsetTop;
// window.onscroll = () => fixNav();

// if forced reflow: resized window, refresh
// dokinqs was here
// no swiping man
// nah to ES6/ css vendor prefix/ browser support

/////////////// GET SCROLL POSITION (Ref Only) ///////////////


// for early IE7, rect phys px only
function GetZoomFactor() {
    var factor = 1;
    if (document.body.getBoundingClientRect) {
        var rect = document.body.getBoundingClientRect();
        var physicalW = rect.right - rect.left;
        var logicalW = document.body.offsetWidth;
        factor = Math.round((physicalW / logicalW) * 100) / 100;
    }
    return factor;
}

// refresh to get scroll postiions of doc when zoom level is not 1
function GetScrollPositions() {
    if ('pageXOffset' in window) {
        // var scrollLeft =  window.pageXOffset;
        var scrollTop = window.pageYOffset;
    } else {      
    // for IE7
        var zoomFactor = GetZoomFactor();
        // var scrollLeft = Math.round(document.documentElement.scrollLeft / zoomFactor);
        var scrollTop = Math.round(document.documentElement.scrollTop / zoomFactor);
    }
    // console.log("X scroll amount: " + scrollLeft + "px");
    if (scrollTop < 3000) {
      console.log("Y scroll amount: " + scrollTop + "px");
    } else {
      // desktop view near bottom
      console.log("%cY scroll amount: " + scrollTop + "px", "color: pink; font-size: large");
    }
    // if (scrollTop >= 3984) { 
    //     alert('~ Do you wanna go back up? ~ ');
    //     // idk bottom px for 12"+ screens.. should calc instead
    //     // TODO throttle, change %down and message
    // }
}

window.addEventListener('scroll', GetScrollPositions);

// var timeout;
// window.addEventListener('scroll', function() {
  // clearTimeout(GetScrollPositions);
  // if (!timeout) {
  //     GetScrollPositions = setTimeout(function() {
  //         timeout = null;
  //         console.log("Y scroll amount: " + window.pageYOffset + "px");
  //     }, 3000);
  // } 
// }, false);


/////////////// MARQUEE ///////////////


var hi = "d o k i n q s";
document.getElementById('banner').innerHTML = "Made with ♡ by « " + hi + " »"; 


/////////////// CAROUSEL ///////////////


// (function() {
//     var box = document.querySelector('.carousel');
//     var next = box.querySelector('.next');
//     var prev = box.querySelector('.prev');
  
//     var counter = 0;
//     var items = box.querySelectorAll('.slides li');
//     var amount = items.length;
//     var current = items[0];
  
//     box.classList.add('active');
  
//     function navigate(direction) {
  
//       // hide old current list item (items[0])
//       current.classList.remove('current');
//       // calculate new position
//       counter += direction;

//       // if L makes counter = -1, set counter to last element
//         if (direction === -1 && counter < 0) { 
//           counter = amount - 1; 
//         }
//       // if R makes counter = length, set counter to first element, 0
//         if (direction === 1 && !items[counter]) { 
//           counter = 0;
//         }

//       // set new current element and add CSS class
//       current = items[counter];
//       current.classList.add('current');
//     }
  
//     next.addEventListener('click', function() { navigate(1); });
//     prev.addEventListener('click', function() { navigate(-1); });
//     // show first element (when direction is 0, counter doesn't change)
//     navigate(0);
// })();


/////////////// BACK TO TOP ///////////////


(function() {
  var teleport = document.querySelector('.teleport');
  teleport.addEventListener('click', function() { 
    alert('If you want to fly, you have to let go of what weighs you down.'); 
  });
})();