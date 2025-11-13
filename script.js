const aboutLink = document.getElementById('aboutLink');
const contactLink = document.getElementById('contactLink');

const aboutPage = document.getElementById('aboutPage');
const contactPage = document.getElementById('contactPage');

const homeSections = document.querySelectorAll(
  '.hero, .featured, .features, .about, .testimonials, .partners, .faq, footer'
);

// About page click
aboutLink.addEventListener('click', (e) => {
  e.preventDefault();

  homeSections.forEach(section => section.classList.add('hidden'));
  contactPage.classList.add('hidden'); // hide contact if visible
  aboutPage.classList.remove('hidden');
});

// Contact page click
contactLink.addEventListener('click', (e) => {
  e.preventDefault();

  homeSections.forEach(section => section.classList.add('hidden'));
  aboutPage.classList.add('hidden'); // hide about if visible
  contactPage.classList.remove('hidden');
});
