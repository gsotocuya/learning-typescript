namespace Validations{
    export const validateText = (text:string): boolean => {
        return text.length > 3;
    }

    export const validateDAte = (myDate: Date): boolean => {
        return isNaN(myDate.valueOf());
    }
}

console.log(Validations.validateText('Gri'));