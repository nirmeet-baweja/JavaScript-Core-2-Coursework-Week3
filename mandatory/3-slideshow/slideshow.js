// Write your code here
const images = [
  "https://cnet1.cbsistatic.com/img/seh3SoGxjdV5NUpTXU3Ui0hCgK0=/940x528/2020/07/16/e7c93429-ee6d-4f1b-9fa2-cd77132f8943/2021-mini-john-cooper-works-gp-1.jpg",
  "https://i.insider.com/5d0bd4b7e3ecba5d97628a02?width=1100&format=jpeg&auto=webp",
  "https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/10/Buy-a-Kia-Telluride-Instead-gear-patrol-slide-1.jpg?crop=0.620xw:0.919xh;0.293xw,0.0813xh&resize=640:*",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg"
];

let imageNumber = 0;

function slideShow() {
  let backwardBtn = document.getElementById("backwardBtn");
  let forwardBtn = document.getElementById("forwardBtn");
  backwardBtn.addEventListener("click", goBack);
  forwardBtn.addEventListener("click", goForward);
}


function goBack() {
  let img = document.getElementById("sliderImage");

  if(imageNumber === 0) {
    imageNumber = images.length - 1;
  }
  else {
    imageNumber--;
  }

  img.src = images[imageNumber];
}


function goForward() {
}


slideShow();