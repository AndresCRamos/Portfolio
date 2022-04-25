var slideIndex = 1;
showDivs(slideIndex);

document.getElementById("slider_prev").onclick = function (e){
    plusDivs(-1)
}

document.getElementById("slider_next").onclick = function (e){
    plusDivs(1)
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("project_card");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  prev = slideIndex-1;
  if (prev == 0) {
    prev = x.length
  }
  console.log(slideIndex);
  console.log(prev);
  x[slideIndex-1].classList.remove("animate-right");
  x[slideIndex-1].style.display = "flex";
  x[slideIndex-1].classList.add("animate-left");
  
  x[prev-1].classList.remove("animate-left");
  x[prev-1].classList.add("animate-right");
}