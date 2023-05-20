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
  





  const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  emailjs.sendForm("service_xke6y8e","template_x3hwaq5","#contact-form","J6Lgb71e3Yjbw7vhN")
  .then(() =>{
     contactMessage.textContent = 'Message sent successfully!'

     setTimeout(() => {
      contactMessage.textContent = "" 
     }, 5000)

     contactForm.reset()

}, () => {
  contactMessage.textContent = 'Message not sent (service error)!'
})
}


  contactForm.addEventListener("submit", sendEmail)




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
