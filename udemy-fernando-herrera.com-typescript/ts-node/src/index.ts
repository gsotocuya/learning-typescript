import {getPokemons} from "./generics/get-pokemons";

getPokemons('pikachu')
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
    .finally(() =>console.log('Fin de getPokemon'));