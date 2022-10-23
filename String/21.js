// Удалить HTML-теги из строки
// Напишите функцию cutTegs(str),
// которая возвращает строку str, очищенную от всех HTML-тегов.

function cutTegs(str) {
  return str.replace(/<.*?>/gi, '');
}

const str =
  '<div id="tera">Здесь важная <a href="link">информация</a></div> о тегах HTML.';

console.log(cutTegs(str)); // Здесь важная информация о тегах HTML.
