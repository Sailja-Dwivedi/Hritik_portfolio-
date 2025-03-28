// script.js
function openTab(evt, tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach(content => (content.style.display = "none"));

  // Remove 'active' class from all buttons
  const tabLinks = document.querySelectorAll(".tab-link");
  tabLinks.forEach(link => link.classList.remove("active"));

  // Show the clicked tab's content and set button to active
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
