var slideIndex = 1;
showDivs(slideIndex);

document.getElementById("slider_prev").onclick = function (e){
    plusDivs(-1)
}

document.getElementById("slider_next").onclick = function (e){
    plusDivs(-1)
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("project_card");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "flex";
}