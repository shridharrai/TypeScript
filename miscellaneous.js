"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    _id: "123",
    name: "Shridhar",
    isActive: true,
};
// user._id = '234' -> not allowed as id is readOnly
user.isActive = false;
