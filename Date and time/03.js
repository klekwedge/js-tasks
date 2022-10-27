// Узнать количество дней в месяце
// Напишите функцию, чтобы получить количество дней в месяце.

function getDaysInMonth(month, year) {
  const currentMonth = new Date(year, month - 1, 1);
  const nextMonth = new Date(year, month, 1);
  const days = Math.round((nextMonth - currentMonth) / 1000 / 3600 / 24);
  return days;
  // new Date(year, month, 0).getDate()
}
console.log(getDaysInMonth(9, 2021)); // 30
