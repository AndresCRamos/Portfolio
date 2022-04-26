var slideIndex = 1;

init();

function init(){
  Array.from(document.getElementsByClassName("project_card")).forEach(e => {
    e.classList.add("animate-out-right")
  })
  showDivs(slideIndex, true);
}


document.getElementById("slider_prev").onclick = function (e){
    plusDivs(-1)
}

document.getElementById("slider_next").onclick = function (e){
    plusDivs(1)
}

function plusDivs(n) {
  showDivs(slideIndex += n, n>0);
}

function showDivs(nextSlideIndex, isNext) {
  var x = document.getElementsByClassName("project_card");
  if (nextSlideIndex > x.length) {
    nextSlideIndex = 1;
  }
  if (nextSlideIndex < 1) {
    nextSlideIndex = x.length;
  }
  let prev;
  if (isNext) {
    prev = nextSlideIndex-1;
    if(prev <= 0){
      nextSlideIndex = 1;
      prev = x.length;
    }
  }
  else {
    prev = nextSlideIndex+1;
    if(prev > x.length){
      nextSlideIndex = x.length;
      prev = 1;
    }
  }
  slideIndex = nextSlideIndex;
  let currSlide= x[prev-1]
  let nextSlide= x[nextSlideIndex-1]
  if (isNext){
    animate(currSlide, nextSlide, isNext)
  }
  else {
    animate(nextSlide,currSlide, isNext)
  }

  
  slideIndex = nextSlideIndex;
}

function animate(currSlide, nextSlide, isNext){
  nextSlide.style.display = "flex";
  resetAnimation(nextSlide)
  resetAnimation(currSlide)
  if (isNext) {
    currSlide.classList.add("animate-out-right")
    nextSlide.classList.add("animate-in-left")
  }
  if (!isNext) {
    nextSlide.classList.add("animate-out-left")
    currSlide.classList.add("animate-in-right")
  }
}

function resetAnimation(el) {
  el.classList.remove("animate-in-left")
  el.classList.remove("animate-out-left")
  el.classList.remove("animate-in-right")
  el.classList.remove("animate-out-right")
}