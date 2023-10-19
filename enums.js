"use strict";
// enum constantEnum {
//     open = 'open',
//     close = constantEnum.open
// }
Object.defineProperty(exports, "__esModule", { value: true });
// let type1: constantEnum = constantEnum.open
// console.log("Type 1 is ", type1)
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var val;
val = Direction.Down;
console.log(Direction);
console.log(Direction.Up);
console.log("Reverse mapping ", Direction[Direction.Up]);
var stringEntered = "Up";
if (stringEntered == Direction[Direction.Up]) {
    console.log("The user has pressed key UP");
    console.log(stringEntered); //"UP"
}
if (0 /* test.A */ === 0) {
    console.log("");
}
//usage
function testConst(val) {
    if (0 /* test.A */) {
        return "A";
    }
    if (1 /* test.B */) {
        return "B";
    }
    else {
        return "Undefined";
    }
}
