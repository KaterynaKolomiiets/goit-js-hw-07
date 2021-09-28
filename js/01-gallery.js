import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const items = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}"data-source="${item.original}"alt="${item.description}"/>
      </a>
    </div>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", items);


let instance;


const openModal = function (e) {
  e.preventDefault();
  
  if (e.target.tagName !== "IMG") {
    return false;
  }
  instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}">
`,
    { onClose: (instance) => {window.removeEventListener("keydown", closeModal);} }
  );
  instance.show();

  window.addEventListener("keydown", closeModal);

  
  
}

const closeModal = function (e) {
  if (e.key.toUpperCase() === "ESCAPE") {
    instance.close();
    // window.removeEventListener("keydown", closeModal)
  }
};

galleryEl.addEventListener("click", openModal);

