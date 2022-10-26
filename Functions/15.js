// Извлечение уникальных символов из строки
// Напишите функцию для извлечения уникальных символов из строки.

function uniqueChar(str) {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (res.indexOf(str.charAt(i)) == -1) {
      res += str[i];
    }
  }

  return res;
}
console.log(uniqueChar('позволяеткопироватьтекстиз')); // позвляеткираьс
