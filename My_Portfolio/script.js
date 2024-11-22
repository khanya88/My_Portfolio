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
