// ******************** Set Variable 

const contentSlide = document.querySelector('.content');
const contentImage = document.querySelector('.content img');
const btns = document.querySelectorAll('button');
const btnPrev =document.querySelector('.btn-prev');
const btnNext =document.querySelector('.btn-next');
const span = document.querySelectorAll('span');
let sourceImage = contentImage.getAttribute('src');


// ******************** Set Function 

btns.forEach(function(ele){
  ele.onclick = function (){
    for ( let i = 1; i <= 4;i++) {

      // sourceImage  = `/img-slide/${i}.JPG`;
      if( ele.textContent == "next"){
        contentImage.setAttribute('src',`/img-slide/${i}.JPG`)
      }else if( ele.textContent == "prev"){
        contentImage.setAttribute('src',`/img-slide/${i}.JPG`)
      }
      
    }
    console.log(sourceImage);
    console.log(contentImage.getAttribute('src'));
  }
});




