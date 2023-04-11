// 1
let films = {
  Бивень: 2014,
  Зелёный_слоник: 1999,
  Человеческая_многоножка: 2009,
}
console.log(Object.keys(films));

// 2
let friends = {
  Vasya: 35,
  Petya: 89,
  Siryozja: 22,
}
for (key in friends) {
  if (friends[key] > 30) {
    console.log(key);
  }
}

// 3
function printObject(films) {
  for (const key in films) {
    if (films.hasOwnProperty(key)) {
      console.log(`${key}: ${films[key]}`);
    }
  }
}
printObject(films);
// Эта функция принимает объект в качестве аргумента и использует цикл for...in для перебора всех ключей объекта. Оператор hasOwnProperty используется для проверки, что свойство принадлежит самому объекту, а не его прототипу. Затем функция выводит каждый ключ и соответствующее ему значение в консоль с помощью метода `console.log()`.

// 4
let people = {
  name: 'Vasya',
  surname: 'Pupkin',
  age: 42,
  favorite_color: 'red',
}
for (let key in people) {
  if (people.hasOwnProperty(key)) {
    console.log(`${key}: ${people[key]}`)
  }
}

// 5
let buys = {
  картошка: 100,
  мясо: 500,
  рыба: 400,
}
let sum = 0;
for (key in buys) {
  if (buys.hasOwnProperty(key)) {
    sum += buys[key];
  }
}
console.log(sum);

// 6
function countKeys(buys) {
  let count = 0;
  for (let key in buys) {
    if (buys.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}
countKeys(buys);

// 7
let students = {
  Vasya: 5,
  Petya: 4,
  Siryozja: 3,
}
let highestScore = -Infinity;
let studentWithHighestScore = "";

for (let key in students) {
  if (students[key] > highestScore) {
    highestScore = students[key];
    studentWithHighestScore = key;
  }
}
console.log(studentWithHighestScore);

// 8
function sortFilmsByYear(films) {
  let sortedFilms = Object.keys(films).sort((a, b) => films[a] - films[b]);
  return sortedFilms;
}

let sortedFilmsTitles = sortFilmsByYear(films);
console.log(sortedFilmsTitles);

// 9
