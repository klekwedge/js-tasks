// Замена регистра символов
// Напишите функцию, которая принимает строку в
// качестве аргумента и заменяет регистр каждого символа
// на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК»,
// то на выходе должен быть массив [кАжДыЙ оХоТнИк].

function changeRegister(str) {
  return str
    .split('')
    .map((item) => {
      if (item.toUpperCase() === item) {
        return item.toLowerCase();
      }
      return item.toUpperCase();
    })
    .join('');
}

console.log(changeRegister('КаЖдЫй ОхОтНиК')); // кАжДыЙ оХоТнИк
