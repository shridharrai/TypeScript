const score: Array<number> = [];
const names: Array<string> = [];

// We need to define list of all the types manually whichever can be recived and returned
function fun1(value: number | boolean): boolean | number {
  return value;
}

/* With any problem is that it can take any type of input and can return any type of output 
   means can take number as input and return string as output */
function fun2(value: any): any {
  return value;
}

// Generics :- It solves the problem by teking same type as input and returning same as output(Pure ts)
function fun3<T>(value: T): T {
  return value;
}

console.log("Generic with number ", fun3(3));
console.log("Generic with string ", fun3<string>("3"));

// Create some custom type(by type or interface) and pass it as type
type Brand = {
  name: string;
  price: number;
};
const obj: Brand = {
  name: "Adidas",
  price: 10000,
};
console.log("Generic with custom type ", fun3<Brand>(obj));

//Generics in array
function fun4<T>(products: T[]): T {
  //do some Db operations
  return products[1];
}

//Generics in arrow functions
const fun5 = <T>(products: T[]): T => {
  //do some Db operations
  return products[2];
};

let arr = [1, 2, 3];
console.log("Generic with arr type ", fun5(arr));

// Generic with mutliple types
function anotherFun<T, U>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

console.log("Generic with multiple types ", anotherFun(3, "2"));

// Generic with restrictions
interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): T | U {
  return valTwo;
}

const dbObj: Database = {
  connection: "123.20.30",
  username: "shridhar",
  password: "567",
};
console.log("Generic with restrictions ", anotherFunction(3, dbObj));

//Generic class
class Generic<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

let genericObj = new Generic();

export {};
