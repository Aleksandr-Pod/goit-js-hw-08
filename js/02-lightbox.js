import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = galleryItems.map(({ preview, original, description }) => {
    return `<li>
        <a class="gallery__item" href=${original}>
            <img
                class="gallery__image"
                src=${preview}
                alt=${description}
            />
        </a>
    </li>`
}).join("");

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("afterbegin", gallery);

const modal = new SimpleLightbox(".gallery__item");

modal.options.captionsData = "alt";
modal.options.captionDelay = 250;
modal.on('show.simplelightbox');