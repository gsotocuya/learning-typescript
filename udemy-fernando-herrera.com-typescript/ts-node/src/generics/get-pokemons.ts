import axios from "axios";

export const getPokemons = async (pokemonName:string)=>{
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    console.log(resp)
    return 1;
}