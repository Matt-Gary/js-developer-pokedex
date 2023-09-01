const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;
// This function takes a Pokemon object and converts it into an HTML list item (<li>) string representation. 
// It uses template literals to interpolate data from the Pokémon object into the HTML string. 
function convertPokemonToLi(pokemon) {
    return `   
    <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                  
                </ol>
                <span class="detailss">Details:</span>
                <ol id="detail_list">
                    <li class="height">Height: ${pokemon.height} </li>
                    <li class="weight">Weight:${pokemon.weight}</li>
                    <li class="experience">Experience:${pokemon.base_experience} </li>
                </ol>                  
                <img src="${pokemon.photo}"
                alt="${pokemon.name}">
            </div>
    </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
        


    })
}
// This function fetches Pokémon using the pokeApi.getPokemons 
function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
        
    })
}
loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

