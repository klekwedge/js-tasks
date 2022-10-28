// Получить количество дней в году
// Напишите функцию, чтобы получить количество дней в году.

function daysOfYear(year) {
  const currentYear = new Date(year, 0, 1);
  const nextYear = new Date(year + 1, 0, 1);
  const days = Math.round((nextYear - currentYear) / 1000 / 3600 / 24);
  return days;
}

console.log(daysOfYear(2021)); // 365
