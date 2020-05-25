var elem = document.documentElement;

  //elem.webkitRequestFullscreen();

  document.onkeypress = function (f) {
    f = f || window.event;
    elem.webkitRequestFullscreen();
};
