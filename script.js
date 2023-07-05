// Navigation bar
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Contact me form
const inputs = document.querySelectorAll(".input");
function addFocus() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function removeFocus() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addFocus);
  input.addEventListener("blur", removeFocus);
});

// Clear all the input values after the user submits the form
const formToReset = document.getElementById('contactForm');
formToReset.addEventListener('submit', (e) => {
   setTimeout(function() { 
    e.preventDefault();
    formToReset.reset();
   }, 1);
});

// On scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));