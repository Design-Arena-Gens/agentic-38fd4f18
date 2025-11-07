const toggleButton = document.getElementById("toggleScale");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("full-scale");
    toggleButton.textContent = document.body.classList.contains("full-scale")
      ? "Toggle Fit Preview"
      : "Toggle Full Resolution Preview";
  });
}
