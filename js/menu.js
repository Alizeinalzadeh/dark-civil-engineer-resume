// function menu() {
//   var close = document.querySelector("#close-icon");
//   var menu = document.querySelector("#menu-icon");
//   var links = document.querySelector(".links");
//   if (menu.style.display != "none") {
//     menu.style.display = "none";
//     close.style.display = "inline-block";
//     links.style.display = "inline-block";
//   } else {
//     menu.style.display = "inline-block";
//     close.style.display = "none";
//     links.style.display = "none";
//   }
// }

window.onscroll = function() {
  menuColor();
};
function menuColor() {
  var menubar = document.querySelector(".zd-menu");
  if (
    document.body.scrollTop >= window.innerHeight ||
    document.documentElement.scrollTop >= window.innerHeight
  ) {
    menubar.classList.add("zd-menu-scroll");
  } else {
    menubar.classList.remove("zd-menu-scroll");
  }
}
