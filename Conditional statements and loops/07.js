// Выполните итерацию целых чисел от 1 до 100
// Напишите программу, которая выполняет
// итерацию целых чисел от 1 до 100. Для кратных трем выведите «Three»
// вместо числа, а для кратных пяти выведите Five.
// Для чисел, кратных трем и пяти, выведите «Three-Five».

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(i, ' Three-Five');
  } else if (i % 5 === 0) {
    console.log(i, ' Five');
  } else if (i % 3 === 0) {
    console.log(i, ' Three');
  }
}

// 3  Three
// 5  Five
// 6  Three
// 9  Three
// 10  Five
// 12  Three
// 15  Three-Five
// 18  Three
// 20  Five
// 21  Three
// 24  Three
// 25  Five
// 27  Three
// 30  Three-Five
// 33  Three
// 35  Five
// 36  Three
// 39  Three
// 40  Five
// 42  Three
// 45  Three-Five
// 48  Three
// 50  Five
// 51  Three
// 54  Three
// 55  Five
// 57  Three
// 60  Three-Five
// 63  Three
// 65  Five
// 66  Three
// 69  Three
// 70  Five
// 72  Three
// 75  Three-Five
// 78  Three
// 80  Five
// 81  Three
// 84  Three
// 85  Five
// 87  Three
// 90  Three-Five
// 93  Three
// 95  Five
// 96  Three
// 99  Three
// 100  Five
