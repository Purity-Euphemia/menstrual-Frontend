// Grab the Contact link and Contact page
const contactLink = document.getElementById("contactLink");
const contactPage = document.getElementById("contactPage");

// When Contact is clicked
contactLink.addEventListener("click", (e) => {
  e.preventDefault(); // prevent default anchor behavior
  contactPage.classList.toggle("hidden"); // show/hide the contact page
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Close Contact Page with ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !contactPage.classList.contains("hidden")) {
    contactPage.classList.add("hidden");
  }
});

// Optional: handle form submission (demo)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
  e.target.reset();
});
