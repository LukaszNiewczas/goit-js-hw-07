import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const generateImageDOMElement = (galleryItem) => {
  const imageImgEl = document.createElement("img");
  imageImgEl.classList.add("gallery__image");
  imageImgEl.setAttribute("src", galleryItem.preview);
  imageImgEl.setAttribute("alt", galleryItem.description);

  const imageLinkEl = document.createElement("a");
  imageLinkEl.classList.add("gallery__item");
  imageLinkEl.setAttribute("href", galleryItem.original);
  imageLinkEl.append(imageImgEl);

  return imageLinkEl;
};

const generateImages = (galleryItems) => {
  galleryItems.forEach((item) => {
    gallery.append(generateImageDOMElement(item));
  });
};
generateImages(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
