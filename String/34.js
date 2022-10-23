// Преобразовать первый символ строки в нижний регистр
// Напишите функцию capitalizeFirstLetter(str),
// которая преобразоввывает первый символ строки в нижний регистр.

function capitalizeFirstLetter(str) {
  return str[0].toLowerCase() + str.slice(1);
}

const str = 'Пример строки';
console.log(capitalizeFirstLetter(str)); // пример строки
