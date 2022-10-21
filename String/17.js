// Вставить подстроку в указанную позицию строки
// Напишите функцию insert(str, substr, pos),
// которая вставляет подстроку substr в указханную
// позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

const str = 'Казнить нельзя';

function insert(str, substr = '', pos = 0) {
  return str.slice(0, pos) + substr + str.slice(pos);
  // const array = str.split('');
  // array.splice(pos, 0, substr);
  // return array.join('');
}

console.log(insert('Казнить нельзя')); // Казнить нельзя
console.log(insert('Казнить нельзя', 'Помиловать ')); // Помиловать Казнить нельзя
console.log(insert('Казнить нельзя', 'Помиловать ', 8)); // Казнить Помиловать нельзя
