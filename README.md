

This documentation covers the JavaScript implementation of the Pokémon Pokedex viewer, which fetches Pokémon data from the https://pokeapi.co/ and displays it in a paginated list format.

## File Structure

- **main.js**: Handles the display logic and user interactions.
- **poke-api.js**: Contains methods related to the PokeAPI.

---

## main.js Overview

### Variables

- `pokemonList`: Reference to the DOM element for displaying the Pokémon list.
- `loadMoreButton`: Reference to the "Load More" button for paginated results.
- `maxRecords`: Maximum number of Pokémon records to fetch (151 in this instance).
- `limit`: Number of Pokémon records to fetch in one request (10 records by default).
- `offset`: Keeps track of pagination, indicating where to start fetching the next set of records.

### Functions

#### `convertPokemonToLi(pokemon)`

- **Purpose**: Converts a Pokémon object into an HTML list item (`<li>`) string representation.
- **Parameters**: A Pokémon object.
- **Returns**: An HTML string that represents the Pokémon's details.

#### `loadPokemonItens(offset, limit)`

- **Purpose**: Fetches Pokémon details using the `pokeApi.getPokemons` function from `poke-api.js` and updates the DOM with the fetched data.
- **Parameters**: 
  - `offset`: Where to start fetching records.
  - `limit`: Number of records to fetch.

### Event Listeners

#### `loadMoreButton 'click' event`

- **Purpose**: Loads more Pokémon to the list when the "Load More" button is clicked. Updates the `offset` for pagination.

---

## poke-api.js Overview

### Variables

- `pokeApi`: An empty object to namespace the functions related to the PokeAPI.

### Functions

#### `convertPokeApiDetailToPokemon(pokeDetail)`

- **Purpose**: Transforms the detailed data fetched from the PokeAPI into a custom Pokémon object.
- **Parameters**: Detailed data of a Pokémon from the PokeAPI.
- **Returns**: A custom Pokémon object with relevant fields populated.

#### `pokeApi.getPokemonDetail(pokemon)`

- **Purpose**: Fetches detailed data for a single Pokémon from the PokeAPI.
- **Parameters**: A Pokémon object which includes a `url` for fetching its detailed data.
- **Returns**: A Promise that resolves with the detailed Pokémon data.

#### `pokeApi.getPokemons(offset, limit)`

- **Purpose**: Fetches a list of Pokémon from the PokeAPI with pagination.
- **Parameters**: 
  - `offset`: (Optional) Where to start fetching records. Default is 0.
  - `limit`: (Optional) Number of records to fetch. Default is 10.
- **Returns**: A Promise that resolves with a list of Pokémon details.

---

I hope this documentation helps you understand the Pokémon Viewer's implementation. Please reach out if you have any further questions!