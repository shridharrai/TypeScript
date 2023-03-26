"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return {
        name: user.name,
        age: user.age,
        email: user.email,
    };
}
createUser({ name: "Shridhar", age: 22, email: "shri@gmail.com" });
