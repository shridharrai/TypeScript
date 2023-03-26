"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email, id) {
        this.name = name;
        this.email = email;
        this.dbId = id;
    }
    return User;
}());
// class User {
//   constructor(
//     public name: string,
//     public email: string,
//     private dbId: number
//   ) {}
// }
var userObj = new User("Shridhar", "shr@gmail.com", 123);
console.log("User obj is ", userObj);
