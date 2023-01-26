import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const generateImageDOMElement = (galleryItem) => {
  const imageImgEl = document.createElement("img");
  imageImgEl.classList.add("gallery__image");
  imageImgEl.setAttribute("src", galleryItem.preview);
  imageImgEl.setAttribute("alt", galleryItem.description);
  imageImgEl.dataset.source = galleryItem.original;

  const imageLinkEl = document.createElement("a");
  imageLinkEl.classList.add("gallery__link");
  imageLinkEl.setAttribute("href", galleryItem.original);
  imageLinkEl.append(imageImgEl);

  const imageDivEl = document.createElement("div");
  imageDivEl.classList.add("gallery__item");
  imageDivEl.append(imageLinkEl);
  return imageDivEl;
};

const generateImages = (galleryItems) => {
  galleryItems.forEach((item) => {
    gallery.append(generateImageDOMElement(item));
  });
};
generateImages(galleryItems);

let lightbox;

const linkClick = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("gallery__image")) {
    lightbox = basicLightbox.create(
      `<img width="1400" height="900" src=${e.target.dataset.source}>`
    );
    lightbox.show();
  }
};

const closeLightBoxWithEsc = (e) => {
  if (e.key === "Escape" && basicLightbox.visible()) {
    lightbox.close();
  }
};

gallery.addEventListener("click", linkClick);
gallery.addEventListener("keydown", closeLightBoxWithEsc);
