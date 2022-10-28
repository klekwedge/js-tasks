// Получить разницу во времени в днях между двумя датами
// Напишите функцию, чтобы получить разницу во времени в днях между двумя датами.

function diffDays(dt1, dt2) {
  return Math.abs(Math.round((dt1 - dt2) / 1000 / 60 / 60 / 24));
}

const dt1 = new Date("October 15, 2020 11:11:00");
const dt2 = new Date("October 19, 2020 17:11:00");

console.log(diffDays(dt1, dt2)); // 4
