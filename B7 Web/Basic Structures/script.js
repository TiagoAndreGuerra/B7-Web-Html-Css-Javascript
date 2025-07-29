// Modern JavaScript (ES6+)
// Module support enabled in HTML

document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded and script.js running!");

  // Example: Toggle class for dark mode manually
  const toggle = document.createElement("button");
  toggle.textContent = "Toggle Dark Mode";
  toggle.style.margin = "1rem";
  document.body.prepend(toggle);

  toggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("manual-dark");
    document.body.classList.toggle("manual-dark");
  });
});
