let a = "92.840";
let b = "2192.80";

const aa = a.split("");
const bb = b.split("");
let cc = [];

const found1 = a.indexOf(".");
const found2 = b.indexOf(".");
const aSize = a.length;
const bSize = b.length;
const biggerNum = Math.max(aSize, bSize);

/**CEROS A LA IZQUIERDA */
if (found2 > found1) {
  var temp = found2 - found1;
  for (var i = 0; i < temp; i++) {
    aa.unshift("0");
  }
} else if (found1 > found2) {
  var temp = found1 - found2;
  for (var i = 0; i < temp; i++) {
    bb.unshift("0");
  }
}

const temp1 = aSize - found1 - 1;
const temp2 = bSize - found2 - 1;
/**CEROS A LA DERECHA */
if (temp1 > temp2) {
  var temp = temp1 - temp2;
  for (var i = 0; i < temp; i++) {
    bb.push("0");
  }
} else if (temp2 > temp1) {
  var temp = temp2 - temp1;
  for (var i = 0; i < temp; i++) {
    aa.push("0");
  }
}

var temp = 0;
for (var k = biggerNum - 1; k >= 0; k--) {
  if (aa[k] != "." && bb[k] != ".") {
    cc[k] = parseInt(aa[k]) + parseInt(bb[k]) + temp;
    if (cc[k] > 10) {
      temp = 1;
      cc[k] = cc[k] - 10;
    } else {
      temp = 0;
    }
  } else {
    cc[k] = ".";
  }
}

var result = cc.join("");

console.log(`
${a} +
${b}
-------
${result}`);

// console.log(aa);
// console.log(bb);
// console.log(cc);
