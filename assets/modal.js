const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalCarousel = document.getElementById("modal-carousel");
const modalImage = document.getElementById("modal-img");
const modalPicture = document.getElementById("modal-picture");
const modalDescription = document.getElementById("modal-description");
const modalFeatures = document.getElementById("modal-features");

// const modalInformationContainer = document.getElementById("modal-informationContainer");
// let modalInformationRows = document.getElementById("modal-informationRows");
const modalFrontendContainer = document.getElementById("modal-frontendContainer");
const modalBackendContainer = document.getElementById("modal-backendContainer");
const modalLibrariesContainer = document.getElementById("modal-librariesContainer");
const modalDatabaseContainer = document.getElementById("modal-databaseContainer");
const modalAPIContainer = document.getElementById("modal-apiContainer");

const modalFrontend = document.getElementById("modal-frontend");
const modalBackend = document.getElementById("modal-backend");
const modalLibraries = document.getElementById("modal-libraries");
const modalDatabase = document.getElementById("modal-database");
const modalAPI = document.getElementById("modal-api");
const modalLinkWebsite = document.getElementById("modal-website");
const modalLinkGithub = document.getElementById("modal-github");

const prevBtn = document.getElementById("modal-prevButton");
const nextBtn = document.getElementById("modal-nextButton");
const closeButton = document.getElementById("closeModal");


let images = [];
let currentIndex = 0;


document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title || "";

    images = JSON.parse(card.dataset.images);
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
    
    modalDescription.textContent = card.dataset.description || "";
    modalFeatures.innerHTML = "";
    if (card.dataset.features){
      features = card.dataset.features.split(";");
      features.forEach(feature => {
        const li = document.createElement("li");
        li.textContent = feature;
        modalFeatures.appendChild(li);
      });
    } else {
      modalFeatures.style.display = "none";
    }

    if (card.dataset.frontend) {
      modalFrontend.textContent = card.dataset.frontend;  
      modalFrontendContainer.style.display = "flex";
    } else {
      modalFrontendContainer.style.display = "none";
    }
    if (card.dataset.backend) {
      modalBackend.textContent = card.dataset.backend;  
      modalBackendContainer.style.display = "flex";
    } else {
      modalBackendContainer.style.display = "none";
    }
    if (card.dataset.libraries) {
      modalLibraries.textContent = card.dataset.libraries;  
      modalLibrariesContainer.style.display = "flex";
    } else {
      modalLibrariesContainer.style.display = "none";
    }
    if (card.dataset.database) {
      modalDatabase.textContent = card.dataset.database;  
      modalDatabaseContainer.style.display = "flex";
    } else {
      modalDatabaseContainer.style.display = "none";
    }
    if (card.dataset.api) {
      modalAPI.textContent = card.dataset.api;  
      modalAPIContainer.style.display = "flex";
    } else {
      modalAPIContainer.style.display = "none";
    }
    if (card.dataset.website) {
      modalLinkWebsite.href = card.dataset.website;
      modalLinkWebsite.style.display = "inline-block"
    } else {
      modalLinkWebsite.style.display = "none";
    }
    if (card.dataset.github) {
      modalLinkGithub.href = card.dataset.github;
      modalLinkGithub.style.display = "inline-block"
    } else {
      modalLinkGithub.style.display = "none";
    }
    modal.style.display = "flex";
  });
});

function showImage() {
  const imgData = images[currentIndex];
  modalImage.src = imgData.src;
  modalImage.srcset = imgData.srcset || "";
}

closeButton.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};