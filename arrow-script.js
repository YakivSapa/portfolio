const image = document.getElementById("down-arrow");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    image.classList.add("hidden");
  } else {
    image.classList.remove("hidden");
  }
});

document.getElementById("down-arrow").addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
});