// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("logo").style.opacity = "100";
  } else {
    document.getElementById("logo").style.opacity = "0";
  }
}
