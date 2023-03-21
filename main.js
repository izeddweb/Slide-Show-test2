// ******************** Set Variable

const contentSlide = document.querySelector(".content");
const contentImage = document.querySelector(".content img");
const btns = document.querySelectorAll("button");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const span = document.querySelectorAll("span");
let sourceImage = contentImage.getAttribute("src");

// ******************** Set Function

btns.forEach(function (ele) {
  let counter = 1;
  ele.onclick = function () {
    if (ele.textContent == "next") {
      counter++;
      if (counter > 4) {
        counter = 1;
      }
      contentImage.setAttribute("src", `/img-slide/${counter}.JPG`);
    } else if (ele.textContent == "prev") {
      counter -= 1;
      if (counter < 1) {
        counter = 4;
      }
      contentImage.setAttribute("src", `/img-slide/${counter}.JPG`);
    }
  };
});
//   contunue in new branch test brch

