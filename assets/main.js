document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("display").addEventListener("click", () => {
    document.getElementById("myModal").classList.remove("hide-modal");
    document.getElementById("body").classList.add("bodyModal");
  });
  document.getElementById("hidden-modal").addEventListener("click", () => {
    document.getElementById("myModal").classList.add("hide-modal");
    document.getElementById("body").classList.remove("bodyModal");
  });

  // FORMULAIRE

  document
    .getElementById("myForm")
    .addEventListener("submit", async (event) => {
      // Annuler le rafraîchissement automatique du form :
      event.preventDefault();

      const data = {
        prenom: document.getElementById("firstname").value,
        nom: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      const response = await axios.post("http://localhost:3000/form", data);
      console.log(response.data);
    });
});
