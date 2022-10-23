// Вычислить средний балл и квалификацию учащихся
// Напишите программу, которая вычисляет количество баллов
// следующих учеников. Затем эти баллы используются для определения квалификации.

const students = [
  ['Степан', 80],
  ['Игнат', 77],
  ['Денис', 88],
  ['Иван', 95],
  ['Радион', 68],
];

let gpa = 0;

for (let i = 0; i < students.length; i++) {
  const el = students[i];
  gpa += el[1];
}

console.log('GPA', gpa);

for (let i = 0; i < students.length; i++) {
  const score = students[i][1];
  const name = students[i][0];
  if (score < 60) {
    console.log(`${name} имеет классификацию F`);
  } else if (score < 70) {
    console.log(`${name} имеет классификацию D`);
  } else if (score < 80) {
    console.log(`${name} имеет классификацию C`);
  } else if (score < 90) {
    console.log(`${name} имеет классификацию B`);
  } else if (score < 100) {
    console.log(`${name} имеет классификацию A`);
  }
}

// GPA 408
// Степан имеет классификацию B
// Игнат имеет классификацию C
// Денис имеет классификацию B
// Иван имеет классификацию A
// Радион имеет классификацию D