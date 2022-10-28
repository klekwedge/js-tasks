// Подсчитайте количество дней, прошедших с начала года
// Напишите функцию для подсчета количества дней, прошедших с начала года.

function daysPassed(date) {
  const newDate = new Date(date.getFullYear(), 0, 0);
  const days = Math.round((date - newDate) / 1000 / 3600 / 24);
  return days;
}

console.log(daysPassed(new Date(2021, 0, 15))); // 15
