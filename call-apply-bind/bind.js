Function.prototype.__bind = function (thisArg, ...argArray) {
  const key = Symbol("key");
  thisArg =
    thisArg !== undefined && thisArg !== null ? Object(thisArg) : window;
  thisArg[key] = this;
  return function (...args) {
    const arr = [...argArray, ...args];
    const result = thisArg[key](...arr);
    delete thisArg[key];
    return result;
  };
};

const obj = {
  name: "li",
};
function fn() {
  console.log(this.name);
  console.log("fn执行了");
}
function sum(num1, num2, num3, num4) {
  console.log(this.name, num1, num2, num3, num4);
  return num1 + num2 + num3 + num4;
}
const a = 1;
const f2 = fn.__bind(obj);
f2();
const f3 = sum.__bind(obj, 10, 20);
const n = f3(30, 50);
const f5 = sum.__bind(obj);
const n2 = f5(10, 20, 30, 40);
console.log(n, n2);
