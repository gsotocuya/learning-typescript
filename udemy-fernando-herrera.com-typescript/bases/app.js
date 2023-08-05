"use strict";
// funciones Básicas
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//parametros por defecto
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
//Rest?
const unirheroes = (...personas) => {
    return personas.join(", ");
};
//Tipo function
const noHaceNada = (numero, text, booleano, arreglo) => { };
//crear el tipo de function que acepte la function "noHacenada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
