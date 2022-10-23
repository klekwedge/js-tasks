// Определить в каком регистре записан n-й символ строки
// Напишите функцию isUpperCase(str, character), которая
// определяет в каком регистре написан символ строки
// в указанной позиции. Если в верхнем регистре выводится – true,
// если в нижнем – false.

function isUpperCase(str, character) {
  return str[character].toUpperCase() === str[character];
}

const str = 'tasks JavaScript';
console.log(isUpperCase(str, 6)); // true
