// Разница между двумя датами в днях
// Напишите функцию, чтобы узнать разницу между двумя датами в днях.

function dateDiffIndays(d1, d2) {
  const firstDate = new Date(d1);
  const secondDate = new Date(d2);

  return new Date(Math.abs(secondDate - firstDate)) / (1000 * 60 * 60 * 24);
}

console.log(dateDiffIndays('04/02/2021', '11/04/2021')); // 216
