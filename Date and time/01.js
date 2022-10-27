// Проверьте, является ли 'input' объектом даты или нет
// Напишите функцию, чтобы проверить, является ли 'input'
// объектом даты или нет

function isDate(date) {
  return date instanceof Date;
}

console.log(isDate(new Date(86400000))); // true
console.log(isDate(86400000)); // false
