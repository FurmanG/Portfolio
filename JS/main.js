/* Gil Furman Portfolio JavaScript */
// These function open and close the contact form
function openForm(){
  document.getElementById("myForm").style.display = "block";
}

function closeForm(){
  document.getElementById("myForm").style.display = "none";
}

// This function dispaly the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// This function changes the slids when the left or right arrows are clicked
function plusSlides(n){
  showSlides(slideIndex += n);
}

// This function changes the slide when the dots are clicked 
function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  var slides = document.getElementsByClassName("mySlides"); //all class=mySlides elements stores in array
  var dots = document.getElementsByClassName("dot"); // all class=dot elements stores in array
  if (n > slides.length) {slideIndex = 1}; // If n is > than slides.length, slideIndex set to 1
  if (n < 1) {slideIndex = slides.length}; // If n is < than 1, the slideIndex is set to the length of the array
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // each item in the array "slides" sets the display to none
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); // This for loop takes each item in the array "dots" and removes "active" which removes the active styling
  }
  slides[slideIndex - 1].style.display = "block"; // This displays the image in the slideshow
  dots[slideIndex - 1].className += " active"; // This adds the active styling to the dot associated with the image
}

//add an event listener for any clicks on the website
document.addEventListener("click", function(event){
  if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")
  //here we state that if the click happens on the cancel button OR anywhere outside of the contact form AND the click does not happen on the contact button or any of the contact links then call the closeform function
  ){
      closeForm()
  }
}, false )
