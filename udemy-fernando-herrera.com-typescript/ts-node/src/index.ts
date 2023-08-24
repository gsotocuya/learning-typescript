import {getPokemons} from "./generics/get-pokemons";

getPokemons('pikachu')
    .then(pokemon => console.log(pokemon.sprites.front_default))
    .catch(error => console.log(error))
    .finally(() =>console.log('Fin de getPokemon'));