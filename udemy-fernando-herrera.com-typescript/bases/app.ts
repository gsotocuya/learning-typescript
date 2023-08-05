// funciones Básicas
function sumar(a:number, b:number):number{
    return a + b;
}

const contar = (heroes:string[]):number => {
    return heroes.length;
}
const  superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//parametros por defecto
const llamarBatman = (llamar:boolean = true):void=>{
    if(llamar){
        console.log("Batiseñal activada");
    }
}

llamarBatman();

//Rest?
const unirheroes = ( ...personas:string[]):string => {
    return personas.join(", ");
}

//Tipo function
const noHaceNada = (numero:number, text:string, booleano:boolean,arreglo:string[])=>{}

//crear el tipo de function que acepte la function "noHacenada"
let noHaceNadaTampoco:(n:number, s:string, b:boolean, a:string[])=>void;

noHaceNadaTampoco = noHaceNada;