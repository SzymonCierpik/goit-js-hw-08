import { galleryItems } from "./gallery-items.js";
// Change code below this line

function buildGallery(items) {
  const galleryElement = document.querySelector(".gallery");
  const galleryMarkup = items
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </div>
    `;
    })

    .join("");

  galleryElement.innerHTML = galleryMarkup;
}

buildGallery(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${e.target.getAttribute("data-source")}">
	`
    )
    .show();
});
