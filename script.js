
const aboutLink = document.getElementById('aboutLink');
const aboutPage = document.getElementById('aboutPage');
const homeSections = document.querySelectorAll(
  '.hero, .featured, .features, .about, .testimonials, .partners, .faq, footer'
);


aboutLink.addEventListener('click', (e) => {
  e.preventDefault();

  
  homeSections.forEach(section => section.classList.add('hidden'));

  
  aboutPage.classList.remove('hidden');
});
