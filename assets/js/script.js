let offset = 0;
const START_OFFSET = 0;
const MAX_OFFSET = 800;
const OFFSET_STEP = 400;

const sliderLine = document.querySelector(".location__list");
const sliderRight = document.querySelector(".slider__arrow-right");
const sliderLeft = document.querySelector(".slider__arrow-left");

sliderRight.addEventListener("click", function () {
  offset = offset + OFFSET_STEP;
  if (offset > MAX_OFFSET) {
    offset = START_OFFSET;
  }
  sliderLine.style.left = -offset + "px";
});

sliderLeft.addEventListener("click", function () {
  offset = offset - OFFSET_STEP;
  if (offset < START_OFFSET) {
    offset = MAX_OFFSET;
  }
  sliderLine.style.left = -offset + "px";
});
