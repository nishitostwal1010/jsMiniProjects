const pokemonName = document.getElementById("pokemonName");
pokemonName.addEventListener("keydown", key => {
  if(key.key === "Enter") {
    getPokemon();
  }
})


async function getPokemon() {

    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const displayPokemon = document.getElementById("displayPokemon");

        const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!promise.ok) {
            throw new Error("Could not find the pokemon");
        }

        const data = await promise.json();

        const pokemonImg = data.sprites.front_default;

        displayPokemon.src = pokemonImg;
        displayPokemon.style.visibility = "visible";

    }

    catch(error) {
        window.alert(error);
    }


}