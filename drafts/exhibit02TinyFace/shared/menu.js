// set html element menu button to js variable by finding the element with div class = menu_button
var menuButton = document.querySelector(".menu_button");

// replace each char with <span class="letter">{char} </span>
for (var foo of document.getElementsByClassName("text-animation")) {
  foo.innerHTML = foo.textContent.replace(/\S/g, '<span class="letter">$&</span>');
  // use regular expression to search and replace
}

// on click, do this function
menuButton.addEventListener("click", menuToggle);

function menuToggle() {
  var menuLinks = document.getElementById("nav_links");
  menuLinks.hidden = !menuLinks.hidden;
  if (!menuLinks.hidden) {
    anime.timeline({
        loop: false
      })
      .add({
        targets: '.text-animation .letter',
        scale: [3, 1],
        opacity: [0, 1],
        translateZ: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: (elem, index) => index * 70
      })
  }
}
