const themeToggle = document.getElementById("themeToggle");
const storedTheme = localStorage.getItem("swathi-portfolio-theme");
if (storedTheme === "dark") document.body.classList.add("dark");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("swathi-portfolio-theme", document.body.classList.contains("dark") ? "dark" : "light");
});

document.getElementById("year").textContent = new Date().getFullYear();
