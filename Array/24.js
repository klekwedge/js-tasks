//  Удалить определенный элемент из массива
// Напишите функцию removeItem(arr, num), которая удаляет
// определенный элемент из массива.

function removeItem(arr, num) {
  return arr.filter((item) => item !== num);
}

console.log(removeItem([3, 5, 7, 8, 5], 5)); // [ 3, 7, 8 ]
