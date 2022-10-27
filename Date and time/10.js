// Узнайте, какой день был вчера
// Напишите функцию для вычисления "вчерашнего дня".

function yesterday(date) {
  return new Date(new Date(date) - 1000 * 60 * 60 * 24).toString();
  // new Date((dt.setDate(dt.getDate()-1))).toString()
}

console.log(yesterday('Nov 16, 2021')); // Mon Nov 15 2021 00:00:00 GMT+0300 (Москва, стандартное время)
