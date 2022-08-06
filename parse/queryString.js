function parse(str) {
  return str.split("&").reduce((o, i) => {
    const [key, value] = i.split("=");
    console.log(
      "-----------",
      key,
      key.split(/[\[\]]/g).filter((x) => x)
    );
    if (key) {
      deepSet(
        o,
        key.split(/[\[\]]/g).filter((x) => x),
        value
      );
    }
    return o;
  }, {});
}

function deepSet(o, path, value) {
  let i = 0;
  for (; i < path.length - 1; i++) {
    if (o[path[i]] === undefined) {
      if (path[i + 1].match(/^\d+$/)) {
        o[path[i]] = [];
      } else {
        o[path[i]] = {};
      }
    }
    o = o[path[i]];
  }
  o[path[i]] = decodeURIComponent(value);
}
console.log(parse("a=1&b=2&c=3"));
console.log(parse("a&b&c"));
console.log(parse("a[name][en]=libo&b[age]=18&c=0"));
console.log(parse("color=Deep%20Blue"));
console.log(parse("a[0]=1&a[1]=2"));
