import {genericFunction, genericFunctionArrow, printObject} from "./generics/generics";
import {Hero} from "./interfaces/hero";
import {Villain} from "./interfaces/villain";

// printObject(123);
// printObject(new Date());
// printObject({a:1,b:2,c:3});
// printObject([1,2,3,4,5,6]);
// printObject(':)');

// const name:string = 'Grimaldo';
//
// console.log(genericFunctionArrow(3.1416).toFixed(2))
// console.log(genericFunctionArrow(new Date()).getDate())
// console.log(genericFunctionArrow(name).toUpperCase())

const deadpool = {
    name: 'deadpool',
    realName: 'Wade Windston Wilson',
    dangerLevel:130
}
console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);