
const button = document.getElementById("catFacts");
const result = document.getElementById("catFactResult");

button.addEventListener("click", async () => {

    result.textContent = "Chargement...";

    try {
        const response = await fetch("https://catfact.ninja/fact");

        if (!response.ok) {
            throw new Error("Erreur API");
        }

        const data = await response.json();

        result.textContent = data.fact;

    } catch (error) {
        result.textContent = "Erreur lors de la récupération du Cat Fact.";
        console.log(error);
    }

});
