
async function fetchData() {

    const pokemonName = document.getElementById('myText').value.toLowerCase();
    const displayPokemon = document.getElementById('myImg');
    console.log(pokemonName);
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error('Could not fetch resources');
        }
        else {
            const data = await response.json();
            displayPokemon.src= data.sprites.front_default;
            displayPokemon.style.display="block";
        }
    } catch (error) {
        console.error(error);
    }
}