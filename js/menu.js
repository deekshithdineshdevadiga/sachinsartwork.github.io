

function openMenu() {
  document.getElementById("sideMenu").style.left = "0";
  document.getElementById("menuOverlay").style.display = "block";
}

function closeMenu() {
  document.getElementById("sideMenu").style.left = "-260px";
  document.getElementById("menuOverlay").style.display = "none";
}

function filterFromMenu(category) {
  filterArt(category);
  closeMenu();
}


// function filterArt(type) {
//   document.querySelectorAll(".art-card").forEach(card => {
//     card.style.display =
//       type === "all" || card.classList.contains(type)
//       ? "block"
//       : "none";
//   });
//   closeMenu();
// }

