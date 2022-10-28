// Выведите год в виде двух цифр
// Напишите функцию, чтобы получить двузначное представление года.

function fullYear(date) {
  return String(date.getFullYear()).slice(2);
}

console.log(fullYear(new Date(2021, 11, 1))); // 21
