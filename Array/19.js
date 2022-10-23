// Удаление ложных значений из массива
// Напишите функцию filterFalse(arr), которая очищает
// массив от ложных (false) значений: false, null,
// undefined, 0, –0, NaN и "" (пустя строка).

function filterFalse(arr) {
  return arr.filter((item) => item);
}

const array = [NaN, 0, 77, false, -17, '', undefined, 99, null];

console.log(filterFalse(array)); // [ 77, -17, 99 ]
