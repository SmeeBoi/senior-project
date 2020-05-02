
// set html element menu button to js variable by finding the element with div class = menu_button
var menuButton = document.querySelector(".menu_button");
// var menuLinks = document.querySelector("nav_links");

// on click, do this function
menuButton.addEventListener("click", menuToggle);

function menuToggle(){
  console.log("click");
  var menuLinks = document.getElementById("nav_links");
  menuLinks.hidden = ! menuLinks.hidden;

}
