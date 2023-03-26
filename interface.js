"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userObj = {
    _id: "123",
    name: "Shridhar",
    isActive: true,
    city: "Delhi",
    isPaidUser: function () {
        return true;
    },
    getCoupon: function (name, value) {
        console.log("params are ", name, value);
        return value;
    },
};
userObj.getCoupon("Shr234", 20);
console.log("User obj is ", userObj);
var adminUserObj = {
    _id: "123",
    name: "Shridhar",
    isActive: true,
    city: "Delhi",
    role: "ADMIN",
    isPaidUser: function () {
        return true;
    },
    getCoupon: function (name, value) {
        console.log("params are ", name, value);
        return value;
    },
};
console.log("Admin user is ", adminUserObj);
