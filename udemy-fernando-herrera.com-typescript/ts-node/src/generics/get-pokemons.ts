import axios from "axios";
import {Pokemon} from "../interfaces";

export const getPokemons = async (pokemonName:string):Promise<Pokemon>=>{
    const resp = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    // console.log(data);
    return resp.data;
}