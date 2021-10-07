let offset = 0;

const sliderLine = document.querySelector(".location__list");
const sliderRight = document.querySelector(".slider__arrow-right");
const sliderLeft = document.querySelector(".slider__arrow-left");

sliderRight.addEventListener("click", function () {
  offset = offset + 400;
  if (offset > 800) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});

sliderLeft.addEventListener("click", function () {
  offset = offset - 400;
  if (offset < 0) {
    offset = 800;
  }
  sliderLine.style.left = -offset + "px";
});
