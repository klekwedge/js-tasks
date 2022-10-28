// Получить день месяца, 2 цифры с ведущими нулями
// Напишите функцию, чтобы получить день месяца, 2 цифры с ведущими нулями.

function dayOfMonth(date) {
  const day = date.getDate();
  return day < 9 ? `0${day}` : day;
}

console.log(dayOfMonth(new Date(2020, 10, 1))); // 01
