// Получить последние элементы массива
// Напишите функцию getLast(array, n), которая возвращает фрагмент
// массива, содержащий последние 'n' элементов массива.

function getLast(arr, n) {
  if (!n) {
    return arr[arr.length - 1];
  } else if (n > arr.length) {
    return arr;
  }
  return arr.slice(n + 1);
  // return array.slice(Math.max(array.length - n, 0));
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getLast(array)); // 9
console.log(getLast(array, 4)); // [ 6, 7, 8, 9 ]
console.log(getLast(array, 12)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
