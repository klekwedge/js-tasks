// Количество вхождений символа в строке
// Напишите функцию count(str, stringsearch),
// которая возвращает количество символов stringsearch в строке str.

function count(str, stringsearch) {
  const pattern = new RegExp(stringsearch, 'ig');
  return str.match(pattern).length;
}

const symb = 'о',
  str = 'Астрономия это наука о небесных объектах';

console.log(count(str, symb)); // 5
