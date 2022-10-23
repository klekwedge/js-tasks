// Преобразовать десятичное значение в hex
// Напишите функцию decimalToHexString(number),
// которая преобразовывает десятичные значения в их
// шестнадцатеричный эквивалент hex. Hex (hexadecimal) —
// обозначение шестнадцатеричной системы счисления.

function decimalToHexString(number) {
  return Number(number).toString(16);
}

console.log(decimalToHexString('100')); // 64
