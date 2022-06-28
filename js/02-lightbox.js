import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
console.log(
  "🚀 ~ file: 02-lightbox.js ~ line 5 ~ galleryContainer",
  galleryContainer
);
const imageEl = createImageMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imageEl);
galleryContainer.addEventListener("click", onGaleryContainerClick);

function createImageMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
        `;
    })
    .join("");
}

function onGaleryContainerClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionPosition: "bottom",
    captionsData: "alt",
    navText: ["<~", "~>"],
  });
}
