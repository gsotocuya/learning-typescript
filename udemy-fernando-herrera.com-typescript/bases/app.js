"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    //Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    // ? enum {acuaman = 0}
    let Power;
    (function (Power) {
        Power[Power["Flash"] = 5] = "Flash";
        Power[Power["Superman"] = 100] = "Superman";
        Power[Power["Batman"] = 1] = "Batman";
        Power[Power["Acuaman"] = 0] = "Acuaman";
    })(Power || (Power = {}));
    const fuezaFlash = Power.Flash;
    const fuerzaSuperman = Power.Superman;
    const fuerzaBatman = Power.Batman;
    const fuerzaAcuaman = Power.Acuaman;
    //Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
