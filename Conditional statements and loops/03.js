// Отсортируйте три числа по убыванию
// Используйте условный оператор для сортировки трех чисел по убыванию.

const a = 0;
const b = -1;
const c = 4;

if (a > b && a > c) {
  if (b > c) {
    console.log(a, b, c);
  } else {
    console.log(a, c, b);
  }
} else if (b > a && b > c) {
  if (a > c) {
    console.log(b, a, c);
  } else {
    console.log(b, c, a);
  }
} else {
  if (a > b) {
    console.log(c, a, b);
  } else {
    console.log(c, b, a);
  }
}

// 4 0 -1

// -
