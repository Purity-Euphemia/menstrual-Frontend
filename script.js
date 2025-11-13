document.addEventListener("DOMContentLoaded", () => {
  const aboutLink = document.getElementById("aboutLink");
  const contactLink = document.getElementById("contactLink");

  const aboutPage = document.getElementById("aboutPage");
  const contactPage = document.getElementById("contactPage");

  // Hide other sections when opening one
  function hideAllPages() {
    aboutPage.classList.add("hidden");
    contactPage.classList.add("hidden");
  }

  aboutLink.addEventListener("click", (e) => {
    e.preventDefault();
    hideAllPages();
    aboutPage.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  contactLink.addEventListener("click", (e) => {
    e.preventDefault();
    hideAllPages();
    contactPage.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
