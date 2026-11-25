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

const pokemonButton = document.getElementById("pokemonButton");

const pokemonInput = document.getElementById("pokemonInput");

const pokemonResult = document.getElementById("pokemonResult");

pokemonButton.addEventListener("click", async () => {
  const pokemonName = pokemonInput.value.trim().toLowerCase();

  if (!pokemonName) {
    pokemonResult.textContent = "Veuillez saisir un Pokémon.";
    return;
  }

  pokemonResult.textContent = "Chargement...";

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(pokemonName)}`,
    );

    if (!response.ok) {
      throw new Error("Pokémon introuvable");
    }

    const data = await response.json();

    pokemonResult.innerHTML = `
      <div class="pokemonCard">

        <h2>${data.name}</h2>

          <img
            src="${data.sprites.front_default}"
            alt="${data.name}"
        >

        <p>PV : ${data.stats[0].base_stat}</p>

        <p>Attaque : ${data.stats[1].base_stat}</p>

        <p>Défense : ${data.stats[2].base_stat}</p>

        <p>Attaque spéciale : ${data.stats[3].base_stat}</p>

        <p>Défense spéciale : ${data.stats[4].base_stat}</p>

        <p>Vitesse : ${data.stats[5].base_stat}</p>

    </div>
`;

    console.log(data);
  } catch (error) {
    pokemonResult.textContent = "Impossible de récupérer le Pokémon.";

    console.log(error);
  }
});
