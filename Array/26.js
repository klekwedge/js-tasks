// Массив с заданным количеством элементов
// Напишите функцию arrayFilled(len, value), которая возвращает
// массив с заданным количеством len элементов value.

function arrayFilled(len, value) {
  const arr = [];
  arr[len - 1] = null;
  return arr.fill(value);
}

console.log(arrayFilled(5, 1)); // [ 1, 1, 1, 1, 1 ]
console.log(arrayFilled(4, 12)); // [ 12, 12, 12, 12 ]
