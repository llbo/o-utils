// import { Stack } from "./createStack";
const Stack = require("./createStack").Stack;
console.log("Stack", Stack);
/**
 * 十进制转二进制
 * @param {*} num
 */
function dec2bin(num) {
  const stack = new Stack();
  while (num > 0) {
    stack.push(num % 2);
    num = Math.floor(num / 2);
  }
  let binaryString = "";
  while (!stack.isEmpty()) {
    binaryString += stack.pop();
  }
  return binaryString;
}

console.log(dec2bin(10));
console.log(dec2bin(100));
console.log(dec2bin(1000));
