//require("../Node js/xyz");

// const { calculateMutiply } = require("./calculate/multiply");
// const {calculateSum}= require("./calculate/sum");
//import {x, calculateSum } from "./sum.js";
const {calculateMultiply,calculateSum} = require("./calculate");
const data = require("./data.json");

console.log('data :>> ', data);

var a =10;
var b =20;
calculateSum(a,b);
calculateMultiply(a,b);

console.log('a+b :>> ', a+b);

///console.log(global);

