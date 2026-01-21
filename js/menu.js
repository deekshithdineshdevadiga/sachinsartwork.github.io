
function openMenu() {
  document.getElementById("mobileMenu").style.left = "0";
  document.getElementById("menuOverlay").style.display = "block";
}

function closeMenu() {
  document.getElementById("mobileMenu").style.left = "-260px";
  document.getElementById("menuOverlay").style.display = "none";
}

function filterArt(type) {
  document.querySelectorAll(".art-card").forEach(card => {
    card.style.display =
      type === "all" || card.classList.contains(type)
      ? "block"
      : "none";
  });
  closeMenu();
}

