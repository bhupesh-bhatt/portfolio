// Content Protection JS Code

// Error Message 
function showPrompt() {
  alert("Sorry! You can't inspect or copy the source code from this website.");
}

// Disable right-click context menu
document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
  showPrompt();
});

// Disable keyboard shortcuts for developer tools
document.addEventListener('keydown', function (event) {
  if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) ||   // Ctrl+Shift+I
    (event.ctrlKey && event.shiftKey && event.keyCode == 67) ||   // Ctrl+Shift+C
    (event.ctrlKey && event.shiftKey && event.keyCode == 74) ||   // Ctrl+Shift+J
    (event.ctrlKey && event.keyCode == 85) ||                     // Ctrl+U
    (event.ctrlKey && event.keyCode == 67)) {                     // Ctrl+C
    event.preventDefault();
    showPrompt();
  }
});

// Contact-Form To Google Sheets Script

const scriptURL = 'https://script.google.com/macros/s/AKfycbyba49ZLsyk5C2e8zKBevq3k_DbCBPUK_ebgbHEQIy_l2TG_rFVqniBB9TQ4aebxnw5/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})

// Dark/Light Mode Switch Code

function dark_mode() {
    document.querySelector('.screen').style.background = '#3e3e3e';
    document.querySelector('.screen').style.color = '#ffffff';
    document.querySelector('.screen-header').style.background = '#4d4d4f';
    document.querySelector('.dark').style.color = '#ea1d6f';
    document.querySelector('.light').style.color = '#e6e2e2';
}

function light_mode() {
    document.querySelector('.screen').style.background = '#e6e2e2';
    document.querySelector('.screen').style.color = '#000000';
    document.querySelector('.screen-header').style.background = '#d4d4d4';
    document.querySelector('.light').style.color = '#ea1d6f';
    document.querySelector('.dark').style.color = '#464646';
}


// Sticky Navigation Menu

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu (on Mobile Devices or Smaller Screens) 

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close Option

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
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

// Multiple Text Typing 

const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Web Development";
  }, 0);
  setTimeout(() => {
    text.textContent = "App Development";
  }, 2000);
  setTimeout(() => {
    text.textContent = "Graphics Designing";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Logo Designing";
  }, 6000);
  setTimeout(() => {
    text.textContent = "Photo Editing";
  }, 8000);
}
textLoad();
setInterval(textLoad, 10000);