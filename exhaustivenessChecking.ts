//Discriminated Union :- We are uniquely identifying the interfaces with the help of same var. in all of them
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2; // "**" shortcut for doing square of a no.

    case "square":
      return shape.side * shape.side;

    default: // Exhaustiviness checking
      const _default: never = shape;
      return _default;
  }
}
