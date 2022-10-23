// Сортировка массива по убыванию
// Напишите функцию compareNumbers(arr), которая возвращает массив,
// элементы которого отсортированы по убыванию их значений.

const numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];

function compareNumbers(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(compareNumbers(numbers)); // [-4, 1, 2, 3, 3, 5, 6, 7, 8]

