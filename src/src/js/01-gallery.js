import { galleryItems } from './gallery-items.js';

// Delegation

const galleryRef = document.querySelector('div.gallery');
const modal = basicLightbox.create(`
<div class = "modal">
</div>
`);

galleryRef.addEventListener('click', galleryClickHandler);

let galleryMarkup = galleryItems
.map((item) => {
    return `
<div class="gallery__item"> 
    <a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
    </a>
</div>`;
})
.join('');

galleryRef.innerHTML = galleryMarkup;

// Click and open select image

function galleryClickHandler(e) {
    e.preventDefault();

    const { target } = e;
    if (target.nodeName !== 'IMG') return;

    modal.show((modal) => {
    const imgEl = modal.element().querySelector('.modal');

    imgEl.innerHTML = `<img src="${target.dataset.sourse}" alt="${target.alt}" width="1000">`;
    addKeyEvent();
});   
}

function addKeyEvent() {
    window.addEventListener('keydown', keyDownHandler);
}

function removeKeyEvent() {
    window.removeEventListener('keydown', keyDownHandler);
}

// Closing from the keyboard

console.log(galleryItems);

function keyDownHandler(e) {
    if (e.code !== 'Escape') return;
  
    modal.close(removeKeyEvent);
  }
  







