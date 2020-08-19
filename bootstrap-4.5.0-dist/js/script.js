//same as document.addEventListener("DOMContentLoaded")
$(function(){
  //same as document.querySelector("#navbarToggle").addEventListener("blur")
  $("#navbarToggle").blur(function(event){
    var screenwidth = window.innerWidth;
    if (screenwidth<768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

var loader = document.getElementById("loader");

window.addEventListener("load",function(){

  loader.style.height="100px";
  loader.style.width="100px";
  loader.style.borderRadius="50%";
  loader.style.visibility="hidden";
});
