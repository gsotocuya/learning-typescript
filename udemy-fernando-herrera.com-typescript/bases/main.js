"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3;
    };
    Validations.validateDAte = (myDate) => {
        return isNaN(myDate.valueOf());
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Gri'));
//# sourceMappingURL=main.js.map