// Нулевое заполнение строки
// Напишите функцию zeros(num, len), которая дополняет
// нулями до указаной длины числовое значение с
// дополнительным знаком «+» или «-« в зависимости от
// передаваемого аргумента.

function zeros(num, len, sign) {
  if (!num || !len || !sign) {
    return null;
  }

  let str = String(num);
  while (str.length < len) {
    str = '0' + str;
  }

  return `${sign}${str}`;
}

console.log(zeros(145, 5, '-')); // -00145
console.log(zeros(33, 4, '+')); // +0033
console.log(zeros(33, 4)); // null
