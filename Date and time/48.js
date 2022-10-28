// Получить разницу во времени в месяцах между двумя датами
// Напишите функцию, чтобы получить разницу во времени в месяцах между двумя датами.

function diffMonths(dt1, dt2) {
  return Math.abs(Math.round((dt1 - dt2) / 1000 / 60 / 60 / 24 / 7 / 4));
}

const dt1 = new Date("June 13, 2020 08:11:00");
const dt2 = new Date("October 19, 2020 17:11:00");

console.log(diffMonths(dt1, dt2)); // 5
