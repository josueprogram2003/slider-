const slider = document.getElementById("slider");
const btnRight = document.getElementById("btn-right");
const btnLeft = document.getElementById("btn-left");

let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

/*console.log(sliderSection);
console.log(sliderSectionLast);*/

slider.prepend(sliderSectionLast);

const nextRight = () => {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.8s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.append(sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 800);
};

const nextLeft = () => {
  let slidersection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = slidersection[sliderSection.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 1s";
  setTimeout(() => {
    slider.style.marginLeft = "-100%";
    slider.prepend(sliderSectionLast);
    slider.style.transition = "none";
  }, 1000);
};

btnRight.addEventListener("click", nextRight);

btnLeft.addEventListener("click", nextLeft);

// setInterval(nextLeft, 3000);
