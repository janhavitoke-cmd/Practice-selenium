//parseInt
//parseInt(string,radix)

let V1= parseInt("3.17");
let v2= parseInt("a,b,c");

console.log(V1,v2);

//parsefloat

let N1 = parseFloat("3.17");
let N2 = parseFloat("-3.17");
let N3 = parseFloat("abc123");
console.log(N1,N2,N3);
//or
console.log(parseFloat("3.89"))

//tofixed

let M1= 23.345
let M2 = 45.567
console.log(M1.toFixed(),M2.toFixed(2));

//number
//Math.random

//const num = Math.random();
console.log(Math.random());

//Math.floor()

console.log(Math.floor(4.8));

//Math.round()

console.log(Math.round(5.9));