// let num1: number = 2;
// let num2: string = "2";
// let sum: number = num1 + num2;
// console.log("Sum is ", sum);
function fun(obj) {
    Object.keys(obj).map(function (key) { return console.log("Key is ", key); });
}
var obj = undefined;
fun(obj);
