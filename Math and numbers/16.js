// Проверьте, является ли переменная числовой или нет
// Напишите функцию, чтобы проверять, является ли переменная числовой или нет.

function isNumeric(num) {
  return typeof num === 'number';
}

console.log(isNumeric(-22)); // true
console.log(isNumeric('14')); // false
