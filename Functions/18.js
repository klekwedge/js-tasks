// Cгенерировать строковый идентификатор (строку заданной длины)
// из случайных символов.
// Напишите функцию, которая генерирует строковый
// идентификатор (заданной длины) из случайных символов.

function makeid(length) {
  let res = '';
  const letters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * letters.length);
    // const index = letters.charAt(Math.floor(Math.random() * letters.length))
    res += letters[index];
  }

  return res;
}
console.log(makeid(10)); // CrkTP1XEcw
