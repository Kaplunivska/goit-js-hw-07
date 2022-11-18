import { galleryItems } from './gallery-items.js';

// Markup creation
const galleryRef = document.querySelector('ul.gallery');

let galleryMarkup = galleryItems
.map((item) => {
    return `
<li class="gallery__item"> 
    <a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
        />
    </a>
</li>`;
})
.join('');

galleryRef.innerHTML = galleryMarkup;

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});