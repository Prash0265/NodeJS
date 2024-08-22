
const {calculateSum}=require("./sum");
const {calculateMultiply} = require("./multiply")
const {data}=require("./data.json");
console.log('test :>> ', data);

var a = 10;
var b = 20;

calculateSum(a,b);
calculateMultiply(a,b);

