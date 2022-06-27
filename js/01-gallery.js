import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imageEl = createImageMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imageEl);
console.log(
  "🚀 ~ file: 01-gallery.js ~ line 7 ~ galleryContainer",
  galleryContainer
);
console.log(galleryContainer);

galleryContainer.addEventListener("click", getOriginalImage);

function createImageMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <div class =' image-card' >
      <img class = 'original' src = '${original}' alt = '${description}'>
      <img class = 'preview' src = '${preview}' alt = '${description}'>     
    </div>
        `;
    })
    .join("");
}

function getOriginalImage(event) {}
