// Получить разницу во времени в минутах между двумя датами
// Напишите функцию, чтобы получить разницу во времени в минутах между двумя датами.

function diffMinutes(dt1, dt2) {
  return Math.abs(Math.round((dt1 - dt2) / 1000 / 60));
}

const dt1 = new Date('October 15, 2020 11:11:00');
const dt2 = new Date('October 15, 2020 11:13:00');

console.log(diffMinutes(dt1, dt2)); // 2
