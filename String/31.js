// Начинается ли строка символами другой строки
// Создайте метод объекта String startsWith(),
// который определяет, начинается ли строка
// символами другой строки, возвращая,
// соотвественно, true или false.

function startsWith(start) {
  const pattern = new RegExp(`^${start}`, 'g');
  return pattern.test(this);
}

String.prototype = startsWith;
const str = 'abc def ghi jkl mno pqr stu';
console.log(str.startsWith('abc')); // true
