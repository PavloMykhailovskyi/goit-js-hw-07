import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryHolder = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${preview}">
  <img class="gallery__image" src="${original}" alt="${description}" />
</a>`
    )
    .join("");
}

galleryHolder.insertAdjacentHTML("beforeend", galleryItemsMarkup);
// gallery.addEventListener("click", onGallery);

// function onGallery(event) {
//   event.preventDefault();
//   if (!event.target.classList.contains("gallery__image")) {
//     return;
//   }
//   let gallery = new SimpleLightbox(".gallery a");
//   gallery.on("show.simplelightbox", function () {
//     gallery.defaultOptions.captionDelay = 250;
//   });
// }

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
// gallery.defaultOptions.captionDelay = 250;
// gallery.defaultOptions.captionData = "alt";
