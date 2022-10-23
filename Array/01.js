// Клонирование массива
// Напишите функцию copyArr(arr), которая копирует
// массив не изменяя оригинал.

function arrayClone(arr) {
  return [...arr]
}

const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
const arr = arrayClone(vegetables);

vegetables[0] = 'Редиска';

console.log(arr); // ['Капуста', 'Репа', 'Редиска', 'Морковка']
