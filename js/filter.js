function filterArt(category, btn = null) {
  const cards = document.querySelectorAll(".art-card");

  cards.forEach(card => {
    const cardCategory = card.getAttribute("data-category");

    if (category === "all" || cardCategory === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  // Active button highlight (desktop only)
  if (btn) {
    document.querySelectorAll(".filters button").forEach(b =>
      b.classList.remove("active")
    );
    btn.classList.add("active");
  }
}
