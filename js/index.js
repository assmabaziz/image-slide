const slideImages = document.querySelectorAll(".main-img img");
const mainImg = document.querySelector(".main-img ");
const image = document.querySelector(".main-img img");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
let containerThumnails = document.querySelector(".containerThumnails");
let imagesArray;
let currentSlide = 0;
mainImg.style.height = image.clientHeight + "px";
containerThumnails.style.gridTemplateColumns = `repeat(${slideImages.length}, 1fr)`;
uppdateSliderControl();
function goToSlide(slideNumber) {
  slideImages[currentSlide].style.opacity = "0";
  currentSlide = (slideNumber + slideImages.length) % slideImages.length;
  slideImages[currentSlide].style.opacity = "1";
  uppdateSliderControl();
  uppdatesStatusActive(currentSlide);
}
btnPrev.addEventListener("click", () => {
  goToSlide(currentSlide - 1);
});
btnNext.addEventListener("click", () => {
  goToSlide(currentSlide + 1);
});
function uppdateSliderControl() {
  btnPrev.disabled = currentSlide == 0;
  btnNext.disabled = currentSlide == slideImages.length - 1;
}
slideImages.forEach((img, index) => {
  const thumbImg = img.cloneNode();
  thumbImg.classList.remove("absolute", "inset-0");
  thumbImg.style.cursor = "pointer";
  thumbImg.addEventListener("click", function () {
    goToSlide(index);
  });
  containerThumnails.appendChild(thumbImg);
  imagesArray = Array.from(containerThumnails.querySelectorAll("img"));
});
for (let i = 0; i < imagesArray.length; i++) {
  if(i !== imagesArray.length -1) {
    imagesArray[i].style.opacity = "50%";
  }
}
function uppdatesStatusActive(index) {
  containerThumnails.querySelectorAll("img").forEach((img, i) => {
    img.style.opacity = "50%";
    if (i === index) {
      img.style.opacity = "100%";
    } else {
      img.style.opacity = "50%";
    }
  });
}
