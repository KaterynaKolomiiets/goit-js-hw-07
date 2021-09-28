import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const items = galleryItems
  .map((item) => {
    return `<li> <a class="gallery__item" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </li>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", items);

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  captionClass: "caption",
});
gallery.on("show.simplelightbox");
