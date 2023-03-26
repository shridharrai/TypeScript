"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getId(id) {
    // id.toLowerCase(); -> not working as union creates a new type
    if (typeof id === "string")
        id.toLowerCase();
    console.log("Id is ", id);
}
getId(1);
getId("3");
// Union in array
var arr = [1, 2, 3];
var strArr = ["shr", "wer"];
// const mixedArr: number[] | string[] = [1, 'shr']
var mixedArr = [1, "shr", "wer"];
// defininig a list of possible constant values using union
var usertype;
// usertype = 'USER' -> not allowed
usertype = "ADMIN";
