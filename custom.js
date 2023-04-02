
const navSlide = () => {
  // Select the burger icon, the navigation container, and the navigation links using JavaScript
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  // Add an event listener to the burger icon that listens for a click event
  burger.addEventListener('click', () => {
    // Toggle the nav-active class on the navigation container to trigger the sliding animation
    nav.classList.toggle('nav-active');

    // Loop through each navigation link using forEach
    navLinks.forEach((link, index) => {
      // Check if the link has the fade animation applied already
      if (link.style.animation) {
        // If it does, set its animation property to an empty string to remove the animation
        link.style.animation = '';
      } else {
        // If it doesn't, apply the fade animation with a duration of 0.5s, easing of ease-in, and a delay calculated based on the index of the link
        link.style.animation = `fade 0.5s ease-in forwards ${index / 7 + 0.5}s`;
      }
    });

    // Toggle the toggle class on the burger icon to change its appearance
    burger.classList.toggle('toggle');
  });
}

// Call the navSlide function to activate the navigation menu
navSlide();



  // Get a reference to the enroll button element on the page
var enrollBtn = document.getElementById("enroll-btn");

// Attach a click event listener to the enroll button
enrollBtn.addEventListener("click", function() {
  // This function will be called when the enroll button is clicked
  // Add your code to handle the enroll button click event here
});

