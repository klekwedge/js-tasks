// Переместить элемент массива из одной позиции в другую
// Напишите функцию moveElement(arr,from,to), которая позволяет
// переместить элемент массива из позиции from в позицию to.

function moveElement(arr, from, to) {
  [arr[from], arr[to]] = [arr[to], arr[from]];
  return arr;
}

var arr = ['a', 'b', 'c', 'd', 'e'];
console.log(moveElement(arr, 3, 1)); // [ 'a', 'd', 'c', 'b', 'e' ]
