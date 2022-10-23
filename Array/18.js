// Сумма и произведение значений массива
// Напишите код, который определяет сумму и произведение
// значений массива.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = arr.reduce((prev, next) => prev + next);
const multipl = arr.reduce((prev, next) => prev * next);

console.log(sum); // 45
console.log(multipl); // 362880
