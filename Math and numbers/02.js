// Преобразуйте двоичное число в десятичное
// Напишите функцию для преобразования двоичного числа в десятичное.

function binToDec(str) {
  return parseInt(str, 2);
}

console.log(binToDec('110011')); // 51
console.log(binToDec('100')); // 4
