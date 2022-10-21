// Первая буква каждого слова заглавная
// Напишите функцию capitalize(str), которая
// возвращает строку, в которой каждое слово начинается с заглавной буквы.

function capitalize(str) {
  return str
    .split(' ')
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(' ');
}

const str = 'каждый охотник желает знать';

console.log(capitalize(str)); // Каждый Охотник Желает Знать
