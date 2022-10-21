// Получить имя файла
// Напишите функцию path(pathname),
// которая вовращает имя файла (подстрока после последнего символа "\" )
// из полного пути к файлу.

function path(pathname) {
  return pathname.match(/\w+\.\w+$/g)[0];
  // pathname.split("/").pop()
}

const pathname = '/home/user/dir/file.txt';
console.log(path(pathname)); // file.txt
