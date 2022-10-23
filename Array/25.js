// Вернуть случайный элемент из массива
// Напишите функцию randomElement(arr), которая возвращает
// случайный элемент из массива.

function randomElement(arr) {
  return Math.floor(Math.random() * arr.length);
}

const arr = [24, 45, 22, 35, 43];

console.log(randomElement(arr)); // 3
