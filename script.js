document.addEventListener("DOMContentLoaded", function () {
  const getStartedBtn = document.getElementById("getStartedBtn");

  getStartedBtn.addEventListener("click", () => {
    // Navigate to next page (Cycle Calculator)
    window.location.href = "cycle-calculator.html";
  });
});
