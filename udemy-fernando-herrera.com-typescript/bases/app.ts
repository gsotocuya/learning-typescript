//Objetos

type Car = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?: () => void;
};

const batimovil: Car = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4,
};

const bumblebee: Car = {
  carroceria: "Amarillo con negro",
  modelo: "4x3",
  antibalas: true,
  pasajeros: 4,
  disparar() {
    console.log("Disparando");
  },
};

//villanos debe ser un arreglo de objetos personalizados
type villano = {
  nombre: string;
  edad: number;
  mutante: boolean;
};
const villanos: villano[] = [
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

//multiples tipos
//cree dos tipos, uno para charles y otro para apocalipsis
type Charles ={
    poder:string;
    estatura:Number;
}
const charles:Charles = {
    poder:"psiquico",
    estatura:1.78
}

type Apocalipsis = {
    lider: boolean;
    miembros: string[];
}
const apocalipsis:Apocalipsis = {
    lider:true,
    miembros: ["magneto", "Tormenta", "Psylocke", "angel"]
}

console.log(apocalipsis)

//Mystique, debe poder ser cualquiera de esos dos mutantes(charles o apocalipsis)
let mystique: Charles | Apocalipsis;

mystique = charles;
mystique = apocalipsis;
