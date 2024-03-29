import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const masive = [];

galleryItems.forEach((galleryItem) => {
  const itemGallery = document.createElement("li");
  const linkGallery = document.createElement("a");
  const imgGallery = document.createElement("img");

  itemGallery.classList.add("gallery__item");

  linkGallery.classList.add("gallery__link");
  linkGallery.src = galleryItem.original;

  imgGallery.classList.add("gallery__image");
  imgGallery.src = galleryItem.preview;
  imgGallery.alt = galleryItem.description;
  imgGallery.dataset.source = galleryItem.original;

  itemGallery.append(linkGallery);
  linkGallery.append(imgGallery);

  masive.push(itemGallery);
});

gallery.append(...masive);

gallery.addEventListener("click", imgCLick);

function imgCLick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
        <img src="${evt.target.dataset.source}">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onPressEscKey);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onPressEscKey);
      },
    }
  );
  instance.show();

  function onPressEscKey(event) {
    if (event.code == "Escape") {
      instance.close();
    }
  }
}
