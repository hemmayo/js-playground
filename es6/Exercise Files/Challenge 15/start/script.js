/* CHALLENGE 15 - Iterate over String

Count number of the lowercase vowel letters in the string.
Vowel letters - a, e, i, o, u
*/

"use strict";

var vowelsCount = 0;
var vowels = ["a", "e", "i", "o", "u"];

var str = "Today is best day of my life";

// Write code here
vowelsCount = [...str].reduce((acc, letter) => vowels.includes(letter) ? acc + 1 : acc + 0, 0)

// for(let s of str) {
//     if(vowels.includes(s)) {
//         vowelsCount++
//     }
// }

console.log(vowelsCount);
// 8
