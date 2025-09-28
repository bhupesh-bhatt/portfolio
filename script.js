// Content Protection JS Code

// Error Message 
function showPrompt() {
    alert("Sorry! You can't inspect or copy the source code from this website.");
}

// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    showPrompt();
});

// Disable keyboard shortcuts for developer tools
document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) ||   // Ctrl+Shift+I
        (event.ctrlKey && event.shiftKey && event.keyCode == 67) ||   // Ctrl+Shift+C
        (event.ctrlKey && event.shiftKey && event.keyCode == 74) ||   // Ctrl+Shift+J
        (event.ctrlKey && event.keyCode == 85) ||                     // Ctrl+U
        (event.ctrlKey && event.keyCode == 67)) {                     // Ctrl+C
        event.preventDefault();
        showPrompt();
    }
});

// Sticky Navigation Menu

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu (on Mobile Devices or Smaller Screens) 

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close Option

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it

window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}
