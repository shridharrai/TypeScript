/* What is satisfies */
var broadenValue = "Hello";
var narrowValue = "Hello";
var people = {
    myInfo: "Shridhar",
    myOtherInfo: {
        id: 2345,
        age: 23,
    },
};
/* Issue without satisfies operator */
// people.myInfo.toUpperCase()
if (typeof people.myInfo === "string")
    people.myInfo.toUpperCase();
/* Resolution with satisfies operator */
var people2 = {
    myInfo: "Shridhar",
    myOtherInfo: {
        id: 2345,
        age: 23,
    },
};
people2.myInfo.toUpperCase();
