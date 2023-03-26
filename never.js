"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* never :- In a return type, this means that the function throws an exception or terminates execution of the program.
           It will never return a value */
var handleError = function (errMsg) {
    throw new Error(errMsg);
};
