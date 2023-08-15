"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert ',
        vision: 'paul bettany',
        activo: true,
        poder: 1500.2121313
    };
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    const avengerArr = ['Cap. América', true, 1212.2121];
    const [capitan, ironman, seriaUnNumero] = avengerArr;
})();
(() => {
    const ironman = {
        name: "ironman",
        weapon: "Armorsuit",
    };
    const capitanAmerica = {
        name: "capitan america",
        weapon: "escudo",
    };
    const thor = {
        name: "thor",
        weapon: "mjolnir",
    };
    const avengers = [ironman, thor, capitanAmerica];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
(() => {
    const nombre = 'Fernando';
    const getName = () => {
        console.log('viejo getname');
    };
})();
//# sourceMappingURL=main.js.map