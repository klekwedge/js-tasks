// Найти самое длинное слово в строке
// Напишите функцию findLongestWord(str), которая принимает
// строку в качестве параметра и находит самое длинное слово в строке.

function findLongestWord(str) {
  return str
    .split(' ')
    .sort((a, b) => b.length - a.length)[0]
}

console.log(findLongestWord('Web Development Tutorial')); // Development
