// ******************** Set Variable

const contentSlide = document.querySelector(".content");
const contentImage = document.querySelector(".content img");
const btns = document.querySelectorAll("button");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const spans = document.querySelectorAll("span");
let sourceImage = contentImage.getAttribute("src");
let counter = 1;


// ******************** Set Function

btns.forEach(function (ele) {
  // spansData = counter
  ele.onclick = function () {
    if (ele.textContent == "next") {
      counter++;
      if (counter > 4) {
        counter = 1;
      }
      // changing img to slider  With Button next
      contentImage.setAttribute("src", `/img-slide/${counter}.JPG`);
    } else if (ele.textContent == "prev") {
      counter -= 1;
      if (counter < 1) {
        counter = 4;
      }
      // changing img to slider  With Button prev
      contentImage.setAttribute("src", `/img-slide/${counter}.JPG`);
    }
    // adding style to span
    spans.forEach(function (span) {
      let spansData = span.getAttribute("data-name");
      if (spansData == counter) {
        spans.forEach(function (span) {
          span.classList.remove("span-style");
        });
        span.classList.add("span-style");
        
      }
    });
  };
});

//   contunue in new branch test brch
//  work in span-content

spans.forEach(function(span){
  let spansData = span.getAttribute('data-name');
  span.onclick = function () {
    spans.forEach(function(span){
      
      span.classList.remove('span-style')
    })
    counter = spansData
    contentImage.setAttribute("src", `/img-slide/${counter}.JPG`);
    span.classList.add('span-style')
  }

})
