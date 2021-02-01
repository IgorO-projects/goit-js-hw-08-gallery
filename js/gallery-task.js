import imagesRef from "../gallery-items.js";
const galleryList = document.querySelector('.js-gallery');
const modalRef = document.querySelector('.js-lightbox');
const modalImageRef = document.querySelector('.lightbox__image');
const backdropRef = document.querySelector('.lightbox__overlay');
const closeModalBtnRef = document.querySelector('button[data-action="close-lightbox"]');

/* adding markup */ 

const galleryString = imagesRef.reduce((acc, { preview, original, description }) => {
    acc += `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image"
    src="${preview}" data-source="${original}" alt="${description}"/></a></li>`;
    
    return acc; 
}, '')
galleryList.innerHTML += galleryString;

/* callbacks */

function openModal (event) {
    event.preventDefault();
    window.addEventListener('keydown', onESCPress);
    const target = event.target;
    if (!target.classList.contains('gallery__image')) return;
    
    modalImageRef.src = target.dataset.source;
    modalImageRef.alt = target.alt;

    modalRef.classList.add('is-open');
}

function closeModal () {
    window.removeEventListener('keydown', onESCPress);
    modalImageRef.src = '';
    modalImageRef.alt = '';

    modalRef.classList.remove('is-open');
}

function closeModalViaOverlay (event) {
    if (event.target === event.currentTarget) {
        closeModal();
    }
}

function onESCPress (event) {
    if(event.code === 'Escape') {
        closeModal();
    }
}

/* eventListeners */ 

galleryList.addEventListener('click', openModal);

closeModalBtnRef.addEventListener('click', closeModal);

backdropRef.addEventListener('click', closeModalViaOverlay);