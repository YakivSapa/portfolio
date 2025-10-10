const settingsBtn = document.getElementById("settings-button");
const settingsMenu = document.getElementById("settings-menu");

settingsBtn.addEventListener("click", () => {
  settingsMenu.classList.toggle("show");
});

document.addEventListener("click", (event) => {
  if (!settingsMenu.contains(event.target) && !settingsBtn.contains(event.target)) {
    settingsMenu.classList.remove("show");
  }
})

document.addEventListener("scroll", (event) => {
  if (!settingsMenu.contains(event.target) && !settingsBtn.contains(event.target)) {
    settingsMenu.classList.remove("show");
  }
})