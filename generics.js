"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = [];
var names = [];
// We need to define list of all the types manually whichever can be recived and returned
function fun1(value) {
    return value;
}
/* With any problem is that it can take any type of input and can return any type of output
   means can take number as input and return string as output */
function fun2(value) {
    return value;
}
// Generics :- It solves the problem by teking same type as input and returning same as output(Pure ts)
function fun3(value) {
    return value;
}
console.log("Generic with number ", fun3(3));
console.log("Generic with string ", fun3("3"));
var obj = {
    name: "Adidas",
    price: 10000,
};
console.log("Generic with custom type ", fun3(obj));
//Generics in array
function fun4(products) {
    //do some Db operations
    return products[1];
}
//Generics in arrow functions
var fun5 = function (products) {
    //do some Db operations
    return products[2];
};
var arr = [1, 2, 3];
console.log("Generic with arr type ", fun5(arr));
// Generic with mutliple types
function anotherFun(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo,
    };
}
console.log("Generic with multiple types ", anotherFun(3, "2"));
function anotherFunction(valOne, valTwo) {
    return valTwo;
}
var dbObj = {
    connection: "123.20.30",
    username: "shridhar",
    password: "567",
};
console.log("Generic with restrictions ", anotherFunction(3, dbObj));
//Generic class
var Generic = /** @class */ (function () {
    function Generic() {
        this.cart = [];
    }
    Generic.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Generic;
}());
var genericObj = new Generic();
