const sidenava = document.getElementsByClassName("sidenava");
var urlval = window.location.href.split('/')[4];

for(let i=0; i<(document.getElementsByClassName('sidenava')).length; i++){
  if(document.getElementsByClassName('sidenava')[i].id == urlval)
  {
    document.getElementById(document.getElementsByClassName('sidenava')[i].id).classList.add("mystyle");
  }
}

// Function to scroll to the top of the page
function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Show/hide the "Go to Top" button based on scroll position
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var btn = document.getElementById("goToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
