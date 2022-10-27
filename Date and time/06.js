// Добавление минут к объекту Date
// Напишите функцию для добавления указанных минут к объекту Date.

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

console.log(addMinutes(new Date(2020, 10, 2), 30).toString());
// Mon Nov 02 2020 00:30:00 GMT+0300 (Москва, стандартное время)
