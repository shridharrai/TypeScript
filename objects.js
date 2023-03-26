"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
createUser({ name: "Shridhar", isActive: true });
//Object weird behaviour while passing as a arg
// createUser({ name: "Shridhar", isActive: true, email:'shri@gmail.com'}) -> not working
var user = { name: "Shridhar", isActive: true, email: "shri@gmail.com" };
createUser(user); //Working
//returning obj from func.
function createObject(name, email) {
    return { name: "Shridhar", email: "shri@gmail.com" };
}
