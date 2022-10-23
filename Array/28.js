// Массив указанной длины
// Напишите функцию generateNumbers(start, len), которая генерирует массив
// заданной длины len, заполненный целыми числами, где каждое число больше
// предыдущего на единицу.

function generateNumbers(start, len) {
  const arr = [];

  for (let i = 0; i < len; i++) {
    if (i === 0) {
      arr[i] = start;
    } else {
      arr[i] = arr[i - 1] + 1;
    }
  }
  return arr;
}

console.log(generateNumbers(0, 5)); // [ 0, 1, 2, 3, 4 ]
console.log(generateNumbers(-5, 4)); // [ -5, -4, -3, -2 ]
