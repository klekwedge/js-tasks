// Округлить число до указанного количества цифр и удалить лишние нули
// Напишите функцию для округления числа до указанного количества цифр
// и удаления лишних нулей (если есть).

const a = 5.0001;

console.log(a.toFixed(5)); // 5.00010
console.log(parseFloat(a.toFixed(5))); // 5.0001