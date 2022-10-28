// Получите полное название месяца
// Напишите функцию, чтобы получить название месяца
// на русском языке, например Июнь.

function fullMonth(date) {
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  return months[date.getMonth()];
}

console.log(fullMonth(new Date(2021, 10, 1))); // Ноябрь