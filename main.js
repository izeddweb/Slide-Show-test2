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
  let counter = 1;
  let maxCounter = 5;
  let minCounter = 1;
  ele.onclick = function (){
      if( ele.textContent == "next"){
        counter++;
        console.log(counter);
        if( counter == maxCounter){
          counter = 1;
        }
        contentImage.setAttribute('src',`/img-slide/${counter}.JPG`);
      }else if( ele.textContent == "prev"){
        counter -= 1;
        console.log(counter);
        if( counter <= minCounter){
          counter = 5;
          counter--;
          console.log('tssss');
        }
        contentImage.setAttribute('src',`/img-slide/${counter}.JPG`)
      }
    console.log(contentImage.getAttribute('src'));
  }
});


