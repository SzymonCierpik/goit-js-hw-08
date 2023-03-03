import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

function buildGallery(items) {
  const galleryElement = document.querySelector('.gallery');
  const galleryMarkup = items
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
      </div>
    `;
    })

    .join('');

  galleryElement.innerHTML = galleryMarkup;
}

buildGallery(galleryItems);

const gallery = new SimpleLightbox(`.gallery a`, {
  captionsData: 'alt',
  captionDelay: 250,
});
