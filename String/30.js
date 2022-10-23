// Найти слово в строке
// Напишите функцию findWord(word, str),
// которая проверяет, существует ли в строке str слова word.

function findWord(word, str) {
  const pattern = new RegExp(word);
  return pattern.test(str);
}

const str = 'abc def ghi jkl mno pqr stu';
console.log(findWord('mno', str)); // true
