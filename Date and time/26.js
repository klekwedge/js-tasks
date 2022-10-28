// Получите числовое представление месяца
// Напишите функцию, чтобы получить числовое представление месяца
// с ведущими нулями (от 01 до 12)

function fullMonth(date) {
  const month = date.getMonth() + 1;
  return month < 9 ? `0${month}` : month;
}

console.log(fullMonth(new Date(2021, 11, 1))); // 12
