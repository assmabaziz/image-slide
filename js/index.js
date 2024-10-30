const slideImages = document.querySelectorAll(".main-img img");
const mainImg = document.querySelector(".main-img ");
const image = document.querySelector(".main-img img");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
let containerThumnails = document.querySelector(".containerThumnails")
containerThumnails.style.gridTemplateColumns = `40px 40px 40px 40px 40px 40px 40px 40px`
let currentSlide = 0;

mainImg.style.height = image.clientHeight + "px";
uppdateSliderControl();
function goToSlide(slideNumber) {
  slideImages[currentSlide].style.opacity = "0%";
  currentSlide = (slideNumber + slideImages.length) % slideImages.length;
  slideImages[currentSlide].style.opacity = "100%";
  console.log(currentSlide);
  
  uppdateSliderControl();
}
btnPrev.addEventListener("click", () => {
  goToSlide(currentSlide - 1);
});
btnNext.addEventListener("click", () => {
  goToSlide(currentSlide + 1);
});
function uppdateSliderControl() {
  btnPrev.disabled = currentSlide == 0;
  btnNext.disabled = currentSlide == slideImages.length -1;
  // console.log("helllllllllllllllo");
}
slideImages.forEach((img, index) => {
  const thumbImg = img.cloneNode()
  console.log(thumbImg);
  thumbImg.style.gridTemplateColumns = "40px"
  // containerThumnails.appendChild(thumbImg) 
})