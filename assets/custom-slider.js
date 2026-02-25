const dots = document.querySelectorAll(".icons-h .icon-h");
const texts = document.querySelectorAll(".sliding-text .text");
const images = document.querySelectorAll(".image img");
console.log(texts);

var currentImg = 0;
changeSlide(0);
function changeSlide(n) {
  for (var i = 0; i < images.length; i++) {
    console.log(images[i]);
    images[i].classList.add("transform");
    texts[i].style.display = "none";
    console.log(dots[i]);
    dots[i].className = dots[i].className.replace(" active", "");
  }

  currentImg = n;

  // texts[currentImg].style.opacity = 1;
  // images[currentImg].style.opacity = 1;
  images[currentImg].classList.remove("transform");
  // texts[currentImg].classList.remove("hide");
  texts[currentImg].style.display = "inherit";
  texts[currentImg].classList.add("fadeout");
  dots[currentImg].className += " active";
}







// for mobile version
const dotshh = document.querySelectorAll(".icons-hhh .icon-hhh");
const textshh = document.querySelectorAll(".sliding-texthh .texthh");
const imageshh = document.querySelectorAll(".imagehh img");
console.log(texts);

var currentImghh = 0;
changeSlidehh(0);
function changeSlidehh(n) {
  for (var i = 0; i < imageshh.length; i++) {
    console.log("imageshh[i]:",imageshh[i]);
    imageshh[i].classList.add("transformhh");
    textshh[i].style.display = "none";
    // console.log(dots[i]);
    dotshh[i].className = dotshh[i].className.replace(" activehh", "");
  }

  currentImghh = n;


  imageshh[currentImghh].classList.remove("transformhh");

  textshh[currentImghh].style.display = "block";
  textshh[currentImghh].classList.add("fadeouthh");
  dotshh[currentImghh].className += " activehh";
}


