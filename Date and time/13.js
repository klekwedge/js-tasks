// Конвертировать количество минут в часы и минуты
// Напишите функцию, которая будет возвращать количество минут в часах и минутах.

function timeConvert(minutes) {
  return `${minutes} минут = ${(minutes - (minutes % 60)) / 60} часа и ${
    minutes % 60
  } минут.`;
}

console.log(timeConvert(200)); // 200 минут = 3 часа и 20 минут.
console.log(timeConvert(60)); // 60 минут = 1 часа и 0 минут.
console.log(timeConvert(62)); // 62 минут = 1 часа и 2 минут.
