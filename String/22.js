// Удалить лишние пробелы из строки
// Напишите функцию strip(str), которая удаляет
// все лишние пробелы из строки str.

function strip(str) {
  return str.replace(/\s+/g, ' ').replace(/^\s/g, '').replace(/\s$/g, '');
}

const str = '    Max is a good      boy     ';
console.log(strip(str)); // Max is a good boy
