/* Tuples are the sort of Array type that knows exactly how many elements it contains, and exactly which types it contains 
   at specific positions.(Pure ts thing)*/

let user: [string, number, boolean];
user = ["123", 12, true];
// user = [12, '123', true] -> not allowed

type User = [number, string];
let userObj: User = [123, "Shridhar"];
// let userObj: User = [123, 'Shridhar', 12]; -> Not allowed
userObj[1] = "Shridhar Rai";
userObj.push("new name"); // uncertain behaviour of tuples
console.log("User obj is ", userObj);

export {};
