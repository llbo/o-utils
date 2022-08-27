Function.prototype.__apply = function (thisArg, argArray) {
  const key = Symbol("key");
  thisArg =
    thisArg !== undefined && thisArg !== null ? Object(thisArg) : window;
  thisArg[key] = this;
  const args = argArray || [];
  const result = thisArg[key](...args);
  delete thisArg[key];
  return result;
};
const obj = {
  name: "li",
};
function fn() {
  console.log(this.name);
  console.log("fn执行了");
}
function sum(num1, num2) {
  console.log(this.name);
  return num1 + num2;
}
const a = 1;
fn.__apply(obj);
const s = sum.__apply(obj, [1, 5]);
const n = sum.__apply(a, [1, 5]);
console.log(s, n);
