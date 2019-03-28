/* CHALLENGE 9 - Object Destructuring

Declare mult() function that will multiply values
of the x, y, z fields of the passed object.
*/

"use strict";

var obj = {
  x: 5,
  y: 20,
  z: 3
};

// Write mult() function here
// function mult(obj) {
//   console.log(obj)
//   return Object.entries(obj).reduce((acc, num) => acc * num[1], 1)
// }

function mult ({x, y, z}) {
  return x * y * z
}

console.log(mult(obj));
// 300
