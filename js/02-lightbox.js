import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${preview}">
  <img class="gallery__image" src="${original}" alt="${description}" title="${description}" />
</a>`
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
  let gallery = new SimpleLightbox(".gallery a");
  gallery.on("show.simplelightbox", function () {
    gallery.defaultOptions.captionDelay = 250;
  });
}
