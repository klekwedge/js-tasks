// Операции с валютой (сложение, вычитание, умножение, деление и т. д.)
// Напишите функцию для вычисления валют (сложение, вычитание, умножение,
// деление и т. д.).

function operations(a, b) {
  a = +a.replace('$', '');
  b = +b.replace('$', '');

  return {
    addition: a + b,
    subtraction: a - b,
    multiplication: a * b,
    division: a / b,
  };
}

const n1 = '$50.24';
const n2 = '$33.57';

console.log(operations(n1, n2));

// {
// addition: 83.81,
// subtraction: 16.67,
// multiplication: 1686.5568,
// division: 1.4965743223115877
// }
