 document.addEventListener("DOMContentLoaded", function () {
  // 1. Calcul du prix total
  function updateTotal() {
    let total = 0;
    const cards = document.querySelectorAll(".card-body");

    cards.forEach((card) => {
      const unitPriceText = card.querySelector(".unit-price").textContent;
      const unitPrice = parseFloat(unitPriceText.replace("$", "").trim());
      const quantity = parseInt(card.querySelector(".quantity").textContent);

      total += unitPrice * quantity;
    });

    document.querySelector(".total").textContent = `${total} $`;
  }

  // 2. Gestion des boutons sur chaque article
  const cards = document.querySelectorAll(".card-body");

  cards.forEach((card) => {
    const btnPlus = card.querySelector(".fa-plus-circle");
    const btnMinus = card.querySelector(".fa-minus-circle");
    const btnDelete = card.querySelector(".fa-trash-alt");
    const btnHeart = card.querySelector(".fa-heart");
    const quantitySpan = card.querySelector(".quantity");

    // Augmenter la quantité
    btnPlus.addEventListener("click", function () {
      let quantity = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = quantity + 1;
      updateTotal();
    });

    // Diminuer la quantité (minimum 0)
    btnMinus.addEventListener("click", function () {
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 0) {
        quantitySpan.textContent = quantity - 1;
        updateTotal();
      }
    });

    // Supprimer un article
    btnDelete.addEventListener("click", function () {
      card.remove();
      updateTotal();
    });

    // Aimer un article (bouton cœur)
    btnHeart.addEventListener("click", function () {
      btnHeart.classList.toggle("text-danger");
      // Si la classe text-danger (Bootstrap) n'est pas utilisée, alternez la couleur directement :
      if (btnHeart.style.color === "red") {
        btnHeart.style.color = "black";
      } else {
        btnHeart.style.color = "red";
      }
    });
  });

  // Calcul initial au chargement
  updateTotal();
});
