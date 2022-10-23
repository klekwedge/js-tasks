// Получить первые элементы массива
// Напишите функцию getFirst(array, n), которая возвращает
// фрагмент массива, содержащий первые 'n' элементов массива.

function getFirst(arr, n = 1) {
  return arr.slice(0, n);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getFirst(array));    // 1
console.log(getFirst(array, 4)); // 1,2,3,4
console.log(getFirst(array,-3)); // 1,2,3,4,5,6 
