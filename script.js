const banner = document.querySelector(".banner");
const slider = document.getElementsByClassName("slider")[0];
const sliderHead = document.querySelector(".sliderHead");
const boxes = document.querySelector(".boxes");
const box = document.getElementsByClassName("box");
document.addEventListener("scroll", () => {
  const startY = 200;
  const endY = 500;
  const scrollPos = window.pageYOffset - banner.clientHeight;
  if (window.pageYOffset / 2 > 485) {
    console.log(sliderHead.clientHeight);
    const boxesWidth = boxes.clientWidth;
    const boxesHeight = boxes.clientHeight;
    const headingWidth = sliderHead.clientHeight;
    const headingHeight = sliderHead.clientWidth;
    const progress = (scrollPos - startY) / (endY - startY);
    slider.style.height = `${boxesWidth + boxesHeight + headingWidth + headingHeight - 600}px`;
    for (let i = 0; i < box.length; i++) {
      box[i].style.transform = `translate3d(-${scrollPos}px, 0px, 0px)`;
    }
  } else if (window.pageYOffset / 2 < 485) {
    for (let i = 0; i < box.length; i++) {
      box[i].style.transform = `translate3d(0px, 0px, 0px)`;
    }
  }
});
