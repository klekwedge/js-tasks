// Смена регистра символов строки
// Напишите функцию changeRegister(str),
// которая принимает в качестве аргумента строку
// и заменяет регистр каждого символа на противоположный.
// Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

function changeRegister(str) {
  return str.replace(/[a-zA-zа-яА-яЁё]/g, function (match) {
    if (match.toUpperCase() === match) {
      return match.toLowerCase();
    }
    return match.toUpperCase();
  });
}

const str = 'КаЖдЫй ОхОтНиК жЕлАеТ зНаТь';

console.log(changeRegister(str)); // кАжДыЙ оХоТнИк ЖеЛаЕт ЗнАтЬ
