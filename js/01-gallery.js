import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img
                class="gallery__image"
                src=${preview}
                alt=${description}
                data-source=${original}
            />
        </a>
    </div>`
}).join("");

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("afterbegin", gallery);

galleryRef.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    console.log(evt.target.nodeName);
    if (evt.target.nodeName !== "IMG") {
        return
    }

    const imageSrc = evt.target.dataset.source;
    const modal = basicLightbox.create(`<img src="${imageSrc}"/>`);
    modal.show();

    const modalRef = document.querySelector(".basicLightbox")
    modalRef.addEventListener('click', onModalClick, { ones: true });
    console.log("on ModalClick listener - active Once");

    window.addEventListener('keydown', onKeydown, { once: true });
    console.log("on KEYdown listener - active Once");

    function onKeydown(evtKeydown) {
        if (evtKeydown.code === "Escape") {
            console.log("Remove mouse listener - Esc was pressed");
            modalRef.removeEventListener('click', onModalClick);
            modal.close();
            return
        } else {
            console.log("not Esc");
            window.addEventListener('keydown', onKeydown, { once: true });
            console.log("ADD listener on KEYdown - Again");
        };
    }

    function onModalClick() {
        window.removeEventListener('keydown', onKeydown);
        console.log("REMOVE listener on  KEYdown - mouse was clicked");
    }    
}
