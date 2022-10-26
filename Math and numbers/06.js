// Найти наименьшее значение в массиве
// Напишите функцию JavaScript, чтобы найти наименьшее значение в массиве.

function min(arr) {
  return Math.min(...arr);
}

console.log(min([12, 34, 77, 3])); // 3
console.log(min([-18, -34, 0, -77, -1])); // -77
