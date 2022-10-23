// Двоеточие между нечётными числами
// Напишите функцию colonOdd(num), которая принимает
// число num в качестве аргумента и вставляет двоеточие (:)
// между двумя нечетными числами. Например, если вводится
// число 55639217, то на выход должно быть 5:563:921:7.

function colonOdd(num) {
  const str = String(num);
  let res = '';
  for (let i = 0; i < str.length; i++) {
    const currentEl = str[i];
    const nextEl = str[i + 1];
    res += currentEl;
    if (+currentEl % 2 === 1 && +nextEl % 2 === 1) {
      res += ':';
    }
  }
  return res;
}

console.log(colonOdd(55639217)); // 5:563:921:7
