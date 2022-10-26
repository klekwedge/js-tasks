// Проверьте, является ли значение целым числом или нет
// Напишите функцию, чтобы проверить, является ли значение целым или нет.
// Целыми числами (число, не являющееся дробью) называются все
// натуральные числа, все числа противоположные им по знаку и нуль.

function isInt(num) {
  return Number.isInteger(num);
}

console.log(isInt(4e2)); // true
console.log(isInt(12)); // true
console.log(isInt(-22)); // true
console.log(isInt(2.2)); // false
console.log(isInt(-12.2)); // false
