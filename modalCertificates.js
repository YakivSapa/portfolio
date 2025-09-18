const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-img");
const modalPicture = document.getElementById("modal-picture");

const prevBtn = document.getElementById("modal-prevButton");
const nextBtn = document.getElementById("modal-nextButton");
const closeButton = document.getElementById("closeModal");

let images = [];
let currentIndex = 0;

document.querySelectorAll(".certificate-card").forEach(card => {
    card.addEventListener("click", () => {
        modalTitle.textContent = card.dataset.title || "";

        images = JSON.parse(card.dataset.images);
        let imagesCount = images.length;
        currentIndex = 0;
        showImage();

        prevBtn.onclick = () => {
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          modalImage.src = images[currentIndex];
          showImage();
        };
        nextBtn.onclick = () => {
          currentIndex = (currentIndex + 1) % images.length;
          modalImage.src = images[currentIndex];
          showImage();
        };
        if(imagesCount == 1){
            prevBtn.style.display = "none";
            nextBtn.style.display = "none";
        } else {
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
        };
        modal.style.display = "flex";
    });
});

function showImage() {
  const imgData = images[currentIndex];
  modalImage.src = imgData.src;
  modalImage.srcset = imgData.srcset || "";
};

closeButton.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};