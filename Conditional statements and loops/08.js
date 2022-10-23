// Найдите и распечатайте первые 5 счастливых чисел
// Определение счастливого числа: "Начиная с любого положительного целого числа,
// замените число суммой квадратов его цифр и повторяйте процесс,
// пока число не станет равным 1 (где оно останется). Те ​​числа, для которых
// этот процесс заканчивается на 1, являются счастливыми числами.".
// Напишите программу, чтобы найти и распечатать первые 5 счастливых чисел.

// for (let i = 1; i <= 100; i++) {
//   let el = String(i);
//   let sumSquares = 0;
//   let count = 0;

//   while (sumSquares !== 1 && count < 100) {
//     sumSquares = 0;
//     for (let i = 0; i < el.length; i++) {
//       sumSquares += +el[i] * +el[i];
//     }
//     count++;
//     el = String(sumSquares);
//   }

//   if (sumSquares === 1) {
//     console.log('Счастливое число', i);
//   }
// }

function happy_number(num) {
  let m, n;
  let c = [];

  while (num !== 1 && c[num] !== true) {
    c[num] = true;
    m = 0;
    while (num > 0) {
      n = num % 10;
      m += n * n;
      num = (num - n) / 10;
    }
    num = m;
    console.log('num', num);
    console.log('c[num]', c[num]);
  }
  console.log('!!!!!');
  console.log(c);
  console.log('========================');
  return num === 1;
}

let count = 3;
let num = 1;
let f5 = '';

while (count-- > 0) {
  while (!happy_number(num)) {
    num++;
  }
  f5 += num + ', ';

  num++;
}
console.log('Первые 5 счастливых чисел: ' + f5);
