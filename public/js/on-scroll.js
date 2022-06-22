window.onscroll = function() {
  btnScrollFunction();
};

// NAVBAR LOGO 
// logo in navbar is visible after scrolling 500px from top
function logoScrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("logo").style.opacity = "100";
  } else {
    document.getElementById("logo").style.opacity = "0";
  }
}

// TO THE TOP BUTTON
var topBtn = document.getElementById("topBtn");
// scroll up button is visible after scrolling 20px from top
function btnScrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.opacity = "100";
  } else {
    topBtn.style.opacity = "0";
  }
}
// top of the page on click
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}