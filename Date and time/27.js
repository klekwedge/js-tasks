// Краткое текстовое представление месяца (англ)
// Напишите функцию, чтобы получить краткое текстовое
// представление месяца на английском из трех букв (с января по декабрь).

function shortMonths(date) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return months[date.getMonth()];
}

console.log(shortMonths(new Date(2021, 11, 1))); // Dec
