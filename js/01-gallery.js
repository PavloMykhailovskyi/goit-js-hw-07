import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup);
gallery.addEventListener("click", onGallery);

function onGallery(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const modal = basicLightbox.create(`
    <img src="${
      event.target.closest("img").dataset.source
    }" width="800" height="600">
`);
  modal.show();
}

console.log(galleryItems);
