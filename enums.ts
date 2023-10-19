// enum constantEnum {
//     open = 'open',
//     close = constantEnum.open
// }

// let type1: constantEnum = constantEnum.open
// console.log("Type 1 is ", type1)
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let val: Direction;
val = Direction.Down;

console.log(Direction);

console.log(Direction.Up);
console.log("Reverse mapping ", Direction[Direction.Up]);

const stringEntered = "Up";
if (stringEntered == Direction[Direction.Up]) {
  console.log("The user has pressed key UP");
  console.log(stringEntered); //"UP"
}

const enum test {
  A,
  B,
}

if (test.A === 0) {
  console.log("");
}

//usage
function testConst(val: test) {
  if (test.A) {
    return "A";
  }
  if (test.B) {
    return "B";
  } else {
    return "Undefined";
  }
}
export {};
