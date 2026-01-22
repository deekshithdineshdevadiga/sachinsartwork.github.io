// function filterArt(category, btn = null) {
//   const cards = document.querySelectorAll(".art-card");

//   cards.forEach(card => {
//     const cardCategory = card.dataset.category?.toLowerCase();

//     if (category === "all") {
//       card.style.display = "block";
//     } 
//     else if (cardCategory === category.toLowerCase()) {
//       card.style.display = "block";
//     } 
//     else {
//       card.style.display = "none";
//     }
//   });

  // Desktop active state
//   if (btn) {
//     document.querySelectorAll(".filters button").forEach(b =>
//       b.classList.remove("active")
//     );
//     btn.classList.add("active");
//   }
// }
function filterArt(category, btn) {
  const cards = document.querySelectorAll(".art-card");
  const buttons = document.querySelectorAll(".filters button");

  buttons.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  cards.forEach(card => {
    const cardCategory = card.dataset.category;

    if (category === "all" || cardCategory === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
