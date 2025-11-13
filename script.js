// Get navigation links
const aboutLink = document.getElementById('aboutLink');
const contactLink = document.getElementById('contactLink');
const blogLink = document.getElementById('blogLink');
const getStartedBtn = document.querySelector('.btn-primary'); // main "Get Started" button

// Get sections
const aboutPage = document.getElementById('aboutPage');
const contactPage = document.getElementById('contactPage');
const blogPage = document.getElementById('blogPage');

const homeSections = document.querySelectorAll(
  '.hero, .featured, .features, .about, .testimonials, .partners, .faq, footer'
);

// Utility function to hide all pages
function hideAllPages() {
  homeSections.forEach(section => section.classList.add('hidden'));
  aboutPage.classList.add('hidden');
  contactPage.classList.add('hidden');
  blogPage.classList.add('hidden');
}

// About page click
aboutLink.addEventListener('click', (e) => {
  e.preventDefault();
  hideAllPages();
  aboutPage.classList.remove('hidden');
});

// Contact page click
contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  hideAllPages();
  contactPage.classList.remove('hidden');
});

// Blog page click
blogLink.addEventListener('click', (e) => {
  e.preventDefault();
  hideAllPages();
  blogPage.classList.remove('hidden');
});

// Get Started button — return to home
getStartedBtn.addEventListener('click', (e) => {
  e.preventDefault();
  aboutPage.classList.add('hidden');
  contactPage.classList.add('hidden');
  blogPage.classList.add('hidden');
  homeSections.forEach(section => section.classList.remove('hidden'));
});
