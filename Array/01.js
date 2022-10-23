// Клонирование массива
// Напишите функцию copyArr(arr), которая копирует
// массив не изменяя оригинал.

function copyArr(arr) {
  return [...arr]
}

const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
const arr = copyArr(vegetables);

vegetables[0] = 'Редиска';

console.log(arr); // ['Капуста', 'Репа', 'Редиска', 'Морковка']
