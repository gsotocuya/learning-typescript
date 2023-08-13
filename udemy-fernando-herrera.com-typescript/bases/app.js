"use strict";
//Objetos
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x3",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    },
};
const villanos = [
    {
        nombre: "lex luthor",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 54,
        mutante: true,
    },
    {
        nombre: "James Login",
        edad: undefined,
        mutante: true,
    },
];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
console.log("paso por aquí");
console.log("paso por aca");
const apocalipsis = {
    lider: true,
    miembros: ["magneto", "Tormenta", "Psylocke", "angel"]
};
console.log(apocalipsis);
//Mystique, debe poder ser cualquiera de esos dos mutantes(charles o apocalipsis)
let mystique;
mystique = charles;
mystique = apocalipsis;
//# sourceMappingURL=app.js.map