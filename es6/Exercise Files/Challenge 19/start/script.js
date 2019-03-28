/* CHALLENGE 19 - Iterate over Object

Create a function sumObjectValues() that will sum all values
of the fields that contain numbers.
Ensure that iteration is done only over own properties of the object.
*/

"use strict";

var nums = {
  a: 10,
  b: 20,
  c: "string",
  d: 12
};
// Write code here
function sumObjectValues(nums) {
  return Object.entries(nums).filter(num => typeof num[1] === 'number').reduce((acc, num) => acc + num[1], 0)
}

console.log(sumObjectValues(nums));
//42
