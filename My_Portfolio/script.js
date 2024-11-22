// JavaScript for Slideshow
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Remove active class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Increment slide index
  slideIndex++;
  
  if (slideIndex > slides.length) { slideIndex = 1 }    // Loop back to the first slide
  
  // Display the current slide
  slides[slideIndex - 1].style.display = "block";  
  
  // Add active class to current dot
  dots[slideIndex - 1].className += " active";
  
  // Call showSlides every 3 seconds
  setTimeout(showSlides, 3000);
}

// Initialize slideshow
showSlides();

// Burger menu toggle for mobile view
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

// Toggle the nav links on and off when burger is clicked
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Get the form and confirmation message elements
const form = document.getElementById('contact-form');
const confirmationMessage = document.getElementById('confirmation-message');

// Prevent the default form submission and show the confirmation message
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent actual form submission

  // Simple form validation (you can add more checks as needed)
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    // Show the confirmation message after form is filled out
    confirmationMessage.style.display = 'block';

    // Hide the form (optional)
    form.style.display = 'none';

    // Optional: Reset the form after submission
    form.reset();

    // Log to console (you can handle AJAX requests here)
    console.log('Form submitted:', { name, email, message });
  } else {
    alert('Please fill out all fields.');
  }
});
