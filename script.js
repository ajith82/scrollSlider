const slider = document.getElementsByClassName("slider")[0];
const box = document.getElementsByClassName("box");
document.addEventListener("scroll", () => {
  const startY = 200;
  const endY = 500;

  const scrollPos = window.pageYOffset;
  if (window.pageYOffset / 2 > 485) {
    if (scrollPos >= window.pageYOffset / 2) {
    //   if (scrollPos < 2367) {
        const progress = (scrollPos - startY) / (endY - startY);
        const minHeight = 500;
        const maxHeight = 1000;
        const targetHeight = minHeight + progress * (maxHeight - minHeight);
        // slider.style.height = `${targetHeight}px`;
        slider.style.height = `2000px`;
        for (let i = 0; i < box.length; i++) {
          box[i].style.transform = `translate3d(-${scrollPos}px, 0px, 0px)`;
        }
    //   }
    }
  }
});
