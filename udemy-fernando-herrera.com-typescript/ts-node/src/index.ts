import {Pokemon} from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');
// (Pokemon.prototype as any).custonName = 'Pikachu';
// console.log(charmander.savePokemonToDB(50));
charmander.savePokemonToDB(3)