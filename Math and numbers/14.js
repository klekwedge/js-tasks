// Округлите число до определенного десятичного знака
// Напишите функцию для округления числа до заданного десятичного знака.

function preciseRound(num, dec) {
  return num.toFixed(dec);
}

console.log(preciseRound(12.37499, 2)); // 12.37
console.log(preciseRound(12, 2)); // 12.00
console.log(preciseRound(-22, 2)); // -22.00
