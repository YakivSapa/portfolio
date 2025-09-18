const settingsBtn = document.getElementById("settings-button");
const settingsMenu = document.getElementById("settings-menu");

settingsBtn.addEventListener("click", () => {
  settingsMenu.classList.toggle("show");
});