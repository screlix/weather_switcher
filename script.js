var choise = document.querySelector(".collector").childNodes;
var v1 = document.querySelector("#v1");
var v2 = document.querySelector("#v2");
var audio1 = document.querySelector("#a1");
var audio2 = document.querySelector("#a2");

choise[1].addEventListener("click", function(){
  // source.removeAttribute("style");
  v1.style.display="none";
  v2.style.display="block";
  v2.play();
  audio2.play();
  audio1.pause();
});
choise[3].addEventListener("click", function(){
  // source.removeAttribute("style");
  v2.style.display="none";
  v1.style.display="block";
  v1.play();
  audio1.play();
  audio2.pause();
});













