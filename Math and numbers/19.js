// Функция Пифагора
// Создайте функцию Пифагора.
// Примечание: Теорема Пифагора говорит нам, что соотношение в
// каждом прямоугольном треугольнике: c^2 = a^2 + b^2, где c - гипотенуза,
// а a, b - два катета треугольника.

function pythagoreanTheorem(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    return false;
  }
  return Math.sqrt(a * a + b * b);
}

console.log(pythagoreanTheorem(2, 4)); // 4.47213595499958
console.log(pythagoreanTheorem(3, 4)); // 5
