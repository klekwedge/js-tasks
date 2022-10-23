// Удалить лишние слова из строки
// Напишите функцию cutString(str, n),
// которая удаляет лишние слова из строки str, оставив в ней n слов.

function cutString(str, n) {
  const arr = str.split(' ');
  const res = [];
  for (let i = 0; i < arr.length && i < n; i++) {
    const element = arr[i];
    res.push(element);
  }
  return res.join(' ');
  // return str.split(" ").splice(0, n).join(" ");
}

const str = 'Сила тяжести приложена к центру масс тела';
console.log(cutString(str, 5)); // Сила тяжести приложена к центру
