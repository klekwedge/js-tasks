// Получите текущую дату
// Напишите функцию, чтобы получить текущую дату.
// Передайте разделитель в качестве аргумента

function curday(sep = '-') {
  const date = new Date();

  const day = date.getDate();
  const month = +date.getMonth() + 1;
  const year = date.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }

  if (month < 10) {
    month = '0' + month;
  }

  return day + sep + month + sep + year;
}

console.log(curday('-')); // 27-10-2022
console.log(curday('=')); // 27=10=2022
