function getId(id: string | number | null | undefined) {
  // id.toLowerCase(); -> not working as union creates a new type
  if (typeof id === "string") id.toLowerCase();

  console.log("Id is ", id);
}

getId(1);
getId("3");

// Union in array
const arr: number[] = [1, 2, 3];
const strArr: string[] = ["shr", "wer"];
// const mixedArr: number[] | string[] = [1, 'shr']
const mixedArr: (number | string)[] = [1, "shr", "wer"];

// Union in type
type User = {
  id: string;
  name: string;
};

type Admin = {
  id: string;
  userName: string;
};

let user: User | Admin = {
  id: "123",
  name: "Shridhar",
};

user = { userName: "Shridhar Rai", id: "1234" };

// defininig a list of possible constant values using union
let usertype: "BUYER" | "SELLER" | "ADMIN";
// usertype = 'USER' -> not allowed
usertype = "ADMIN";

export {};
