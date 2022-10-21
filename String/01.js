// 1. Преобразовать строку в массив слов
// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

function stringToarray(str){
  return str.split(' ');
}

const str = 'Каждый охотник желает знать';

console.log(stringToarray(str)); // [ 'Каждый', 'охотник', 'желает', 'знать' ]