"use strict";
// let userId: number = 123.23
// let userId: number;
// userId = 123.43;
Object.defineProperty(exports, "__esModule", { value: true });
/* typeInference :- when you assign the values immediately on declaration then typescript automatically infer there types,
                    we don't need to define the type mannualy there */
var userId = 123.56;
// userId = 'shridhar'
var nums = [1, 2, 3];
nums.map(function (num) {
    return "Number is ".concat(num);
});
