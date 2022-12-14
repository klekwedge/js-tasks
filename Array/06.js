// Найдите високосные годы
// Високосным годом является каждый четвертый год и века
// начинаются только на высокостные года, отличие високосного
// года от обычного заключается в появлении 366-го дня. Напишите
// функцию chooseYears(start, end), которая принимает в качестве
// аргументов диапозон лет и возвращает массив високосных лет в
// заданном диапазоне.

function chooseYears(start, end) {
  const res = [];
  for (let i = start; i <= end; i++) {
    if (i % 4 === 0) {
      res.push(i);
    }
  }
  return res;
}

console.log(chooseYears(2000, 2018)); // [ 2000, 2004, 2008, 2012, 2016 ]
