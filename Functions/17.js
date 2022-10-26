// Найти элементы массива, которые больше указанного числа
// Напишите функцию, которая возвращает элементы массива,
// которые больше указанного числа.

function biggerElements(val) {
  return function (el, index, array) {
    return el > val;
  };
}

const result = [14, 45, 4, 31, 64, 10].filter(biggerElements(18));
console.log(result); // [ 45, 31, 64 ]
