// FIXED NAVBAR

// const navig = document.querySelector("#navbar");
let navig = document.getElementById("navbar");
let topOfNav = navig.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.marginTop = navig.offsetHeight + "px"
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
    document.body.style.marginTop = 0;
  }
}
// window.addEventListener("scroll", fixNav);
window.onscroll = () => fixNav();


// DETECT SCROLL TO BOTTOM

window.addEventListener("scroll", () => {
  let turnDark = document.getElementById("wrapper");
  // if using document.body.scrollHeight, add p margin 14px at bottom and navbar margin-top 44px
  let D = document;
  let totalHeight = Math.max(
      D.body.scrollHeight, D.documentElement.scrollHeight,
      D.body.offsetHeight, D.documentElement.offsetHeight,
      D.body.clientHeight, D.documentElement.clientHeight
  );
  if (totalHeight - window.pageYOffset === window.innerHeight) {
      // console.log("bottom");
      turnDark.classList.add("dark");
  }
  let pctScrolled = Math.floor(window.pageYOffset / (totalHeight - window.innerHeight) * 100);
  // console.log(pctScrolled + "% scrolled");
  // console.log(totalHeight, window.pageYOffset, window.innerHeight);
});