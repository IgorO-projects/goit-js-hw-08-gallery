import imagesRef from "../gallery-items.js";
const galleryList = document.querySelector('.js-gallery');

const galleryString = imagesRef.reduce((acc, { preview, original, description }) => {
    acc += `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image"
    src="${preview}" data-source="${original}" alt="${description}"/></a></li>`;
    
    return acc; 
}, '')

galleryList.innerHTML += galleryString;