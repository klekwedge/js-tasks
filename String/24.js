// Сортировка символов строки по алфавиту
// Напишите функцию alphabetize(str),
// которая возвращает строку, отсортировав
// её символы в алфавитном порядке.

function alphabetize(str) {
  return str.split('').sort().join('');
}

const str = 'Europe';
console.log(alphabetize(str)); // Eeopru
