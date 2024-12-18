// Smooth Scrolling for Navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Prevent the default anchor behavior
    e.preventDefault();

    // Get the target section ID from the href attribute
    const targetId = this.getAttribute('href').substring(1); // Removes the leading '#'
    const targetElement = document.getElementById(targetId);

    // Ensure the target element exists before scrolling
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.error(`Element with ID "${targetId}" not found.`);
    }
  });
});

// Scroll Reveal Animation
const sections = document.querySelectorAll('section');

const revealSection = () => {
  const triggerHeight = window.innerHeight * 0.8;

  // Loop through each section
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    // Add 'visible' class if the section is within the trigger height
    if (sectionTop < triggerHeight) {
      section.classList.add('visible');
    }
  });
};

// Add event listeners for scroll and load events
window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);