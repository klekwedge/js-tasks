// Массив, содержащий все целые числа между start и end
// Напишите функцию generateRange(start, end), которая генерирует
// массив заданной длины len, заполненный целыми числами.
// Каждое последующее число в массиве должно быть больше предыдущего на единицу.

function generateRange(start, end) {
  const arr = [];

  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(generateRange(0, 5)); // [ 0, 1, 2, 3, 4, 5 ]
console.log(generateRange(-5, 4)); // [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4]
