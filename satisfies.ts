/* What is satisfies */
const broadenValue: string = "Hello";
const narrowValue = "Hello" satisfies string;

type Broad = typeof broadenValue;
type Narrow = typeof narrowValue;

/* Use case of satisfies */
type StateName = "Delhi" | "Mumbai" | "Kolkata";

type StateCords = {
  x: number;
  y: number;
};

type State = StateName | StateCords;

type User = {
  birthState: State;
  currState: State;
};

const user: User = {
  birthState: "Delhi",
  currState: { x: 0.02, y: 0.05 },
};

/* Issue without satisfies operator */
// user.birthState.toUpperCase()

/* Resolution without satisfies operator */
if (typeof user.birthState === "string") user.birthState.toUpperCase();

/* Resolution with satisfies operator */
const user2 = {
  birthState: "Kolkata",
  currState: { x: 0.08, y: 0.09 },
} satisfies User;

user2.birthState.toUpperCase();

/* Property name constraining :- Include a subsets of keys(restricting the names of the keys) */
type Keys = "firstName" | "lastName" | "age" | "email";
const student = {
  firstName: "Shridhar",
  lastName: "Rai",
  age: 23,
} satisfies Partial<Record<Keys, string | number>>;

student.firstName.toLowerCase();
student.age.toFixed();

/* Property name fulfillment :- Include all the keys(restricting the names of the keys) */
type Keys1 = "firstName" | "lastName" | "age" | "email";
const student1 = {
  firstName: "Rohit",
  lastName: "Sharma",
  age: 36,
  email: "rohit.shr@gmail.com",
} satisfies Record<Keys1, string | number>;

student1.lastName.toUpperCase();
student1.age.toFixed();

/* Property value conformance :- Spcifying the types of values(resticting the values)*/
type Book = { title: string; author: string; year: number };
const student2 = {
  book1: { title: "Intro to HTML", author: "Tim Berners", year: 1999 },
  book2: { title: "Intro to React", author: "Jordan Walke", year: 2011 },
} satisfies Record<string, Book>;

export {};
