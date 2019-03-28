/* CHALLENGE 20 - Sum positive and negative numbers

Create a function sumPlusMinus() that takes array
and sums separately positive and negative numbers.

It should return an object like this:
{
  plus: 74, // sum of all positive numbers
  minus: -54 // sum of all negative numbers
}
*/

"use strict";

var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Write sumPlusMinus() function here
// function sumPlusMinus(numbers) {
//   let minus = numbers.filter(number => number < 0).reduce((acc, num) => acc + num, 0)
//   let plus = numbers.filter(number => number >= 0).reduce((acc, num) => acc + num, 0)
//   return {plus, minus}
// }

// function sumPlusMinus(numbers) {
//   let plus = 0
//   let minus = 0

//   numbers.forEach(number => {
//     if(number >= 0) plus += number
//     else minus += number
//   });

//   return {plus, minus}
// }

function sumPlusMinus(numbers) {  
  return numbers.reduce((acc, num) => ({ plus: num > 0 ? acc.plus + num : acc.plus, minus: num < 0 ? acc.minus + num : acc.minus }), { plus: 0, minus: 0 })
}


console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}
