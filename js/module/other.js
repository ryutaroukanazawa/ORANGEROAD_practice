/*
===============
hamburger-menu
===============
*/
window.addEventListener("scroll", function () {
  // headerの高さを取得
  let hd_height = $("#hd-id").height();

  // headerの高さを越したら
  if (hd_height <= window.pageYOffset) {
    fixed.style.position = "fixed";

  } else {
    fixed.style.position = "initial";
  }
});
