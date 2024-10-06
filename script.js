document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Afficher une réponse simple
    const response = document.getElementById("response");
    response.textContent = `Merci ${name} ! Votre message a été envoyé.`;
    response.classList.remove("hidden");

    // Réinitialiser le formulaire
    this.reset();
});
