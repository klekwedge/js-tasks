// Функция для создания идентификатора UUID
// Напишите функцию для создания идентификатора UUID.
// Примечание: Согласно Википедии - универсальный
// уникальный идентификатор (UUID) - это стандарт идентификатора,
// используемый при создании программного обеспечения. UUID - это
// просто 128-битное значение. Значение каждого бита определяется
// любым из нескольких вариантов. Для удобочитаемого отображения
// многие системы используют канонический формат с использованием
// шестнадцатеричного текста со вставленными дефисами. Например:
// ec53b8ad-1a66-4f7f-a057-6262b5563a06.

function createUUID() {
  let range = (start, end) =>
    [...Array(end - start).keys(), end - start].map((n) => start + n);
  let A = range(65, 90); // A-Z
  let a = range(97, 122); // a-z
  let dig = range(48, 57); // 0-9
  let all = dig.concat(A).concat(a);

  let uuid = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (letter) {
      let randomLetter = String.fromCharCode(
        all[Math.floor(Math.random() * all.length)]
      );
      return letter === 'x' ? randomLetter : letter;
    }
  );
  return uuid;
}

console.log(createUUID()); // MlsuxDBk-Uqio-akM5-12Im-8QX606nlpi0T
