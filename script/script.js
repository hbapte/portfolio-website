// Function to show the loader
function showLoader() {
    document.getElementById("loader").style.display = "block";
    document.querySelectorAll("*").forEach(el => el.style.opacity = 0.5);
  }
  
  // Function to hide the loader
  function hideLoader() {
    document.getElementById("loader").style.display = "none";
    document.querySelectorAll("*").forEach(el => el.style.opacity = 1);
  }
  
  // Event listener when the page finishes loading
  window.addEventListener("load", function() {
    hideLoader(); // Hide the loader when the page finishes loading
  });
  
  // Event listener for when the website starts loading
  window.addEventListener("beforeunload", function() {
    if (document.getElementById("loader").style.display === "block") {
      return; // Cancel the event and allow the user to leave the page
    }
    showLoader(); // Show the loader when the website starts loading
  });
  





  const client = new EmailJS("J6Lgb71e3Yjbw7vhN", "T_GBs1Zf33wMjGxgHUMKy");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("input[name=name]").value;
  const email = document.querySelector("input[name=email]").value;
  const message = document.querySelector("textarea[name=message]").value;

  client.send({
    to: "ijbapte@gmail.com",
    from: "ijbapte@gmail.com.com",
    subject: "This is a test email from " + name,
    text: message,
  });

  // Add a success message
  document.getElementById("success-message").textContent = "Email sent successfully!";
  document.getElementById("success-message").style.display = "block";

  // Clear the form
  document.querySelector("input[name=name]").value = "";
  document.querySelector("input[name=email]").value = "";
  document.querySelector("textarea[name=message]").value = "";
});

// Add an error message
client.on("error", (error) => {
  document.getElementById("error-message").textContent = error.message;
  document.getElementById("error-message").style.display = "block";
});



// var typed = new Typed('.typed', {
//     strings: ['Frontend Developer', 'Blogger'],
//     typeSpeed: 200,
//     backSpeed: 200,
//     backDelay: 1000,
//     loop: true
//   });

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     grabCursor: true,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });




// /*=============== SHOW MENU ===============*/
// const navMenu = document.getElementById('nav-menu'),
//       navToggle = document.getElementById('nav-toggle'),
//       navClose = document.getElementById('nav-close')

// /*===== MENU SHOW =====*/
// /* Validate if constant exists */
// if(navToggle){
//     navToggle.addEventListener('click', () =>{
//         navMenu.classList.add('show-menu')
//     })
// }

// /*===== MENU HIDDEN =====*/
// /* Validate if constant exists */
// if(navClose){
//     navClose.addEventListener('click', () =>{
//         navMenu.classList.remove('show-menu')
//     })
// }

// /*=============== REMOVE MENU MOBILE ===============*/
// const navLink = document.querySelectorAll('.nav__link')

// const linkAction = () =>{
//     const navMenu = document.getElementById('nav-menu')
//     // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))
