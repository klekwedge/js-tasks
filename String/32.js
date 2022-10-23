// Преобразование специальных символов в HTML
// Напишите функцию convChar(str), которая
// преобразовывает специальные символы для
// их отображения в HTML-коде следующим образом:

function convChar(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const str = '<body><div>"start"';
console.log(convChar(str)); // &lt;body&gt;&lt;div&gt;&quot;start&quot;
