// Удалить символы отличные от ASCII
// Напишите функцию remove_no_printed(str),
// которая удаляет из строки все символы,
// которые не относятся к печатаемым символам ASCII

function removeNoPrinted(str) {
  return str.replace(/[^\x20-\x7E]/g, '');
}

const str = 'JAVA谷新道ひばヶ丘２丁���ひばりヶ���東久留米市SCRIPT';
console.log(removeNoPrinted(str)); // JAVASCRIPT
