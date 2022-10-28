// Получите полное числовое представление года
// Напишите функцию, чтобы получить полное числовое
// представление года (4 цифры).

function fullYear(date) {
  return date.getFullYear();
}

console.log(fullYear(new Date(2021, 11, 1))); // 2021
