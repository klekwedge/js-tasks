// Подсчитать количество вхождений указанной буквы в строке
// Напишите функцию, которая принимает два аргумента: строку и букву.
// Функция должна подсчитывать количество вхождений указанной буквы в строке.

function charCount(str, letter) {
  const pattern = new RegExp(letter, 'gi');
  return str.match(pattern).length;
}

console.log(charCount('hello world', 'o')); // 2
