const fetchPokemon = async (pokemon) => {
  const APIResponse = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await APIResponse.json();
  return data;
}

const renderPokemon = async (pokemon) => {

  const data = await fetchPokemon(pokemon);
  
  console.log(data);
}

renderPokemon()