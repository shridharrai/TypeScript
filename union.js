"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getId(id) {
    // id.toLowerCase();
    if (typeof id === "string")
        id.toLowerCase();
    console.log("Id is ", id);
}
getId(1);
getId("3");
// getId(false);
// Union in array
var arr = [1, 2, 3];
var strArr = ["shr", "wer"];
// const mixedArr: number[] | string[] = [1, 'shr']
var mixedArr = [1, "shr", "wer"];
var user = {
    id: "123",
    name: "Shridhar",
    userName: "Rai",
    isActive: false,
};
// user = { userName: "Shridhar Rai", id: "1234" };
// defininig a list of possible constant values using union
var usertype;
// usertype = 'USER' -> not allowed
usertype = "ADMIN";
