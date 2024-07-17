function toggleContent(section) {
  // Hide all content
  document
    .querySelectorAll(".content")
    .forEach((content) => content.classList.remove("active"));

  // Show the selected content
  document.getElementById(section).classList.add("active");
}

// Default to showing the 'Me' section
document.addEventListener("DOMContentLoaded", () => {
  toggleContent("me");
});
