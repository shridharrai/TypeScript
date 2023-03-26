"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tuples are the way to define the types of variable to be present in an arr in an speciific order
var user;
user = ["123", 12, true];
var userObj = [123, "Shridhar"];
// let userObj: User = [123, 'Shridhar', 12]; -> Not allowed
userObj[1] = "Shridhar Rai";
userObj.push("new name"); // uncertain behaviour of tuples
console.log("User obj is ", userObj);
