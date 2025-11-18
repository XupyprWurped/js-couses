// json -> об'єкт у якому зберігається певна інфа
// object:
// {key: value}

// об'єкт (json)

let person = {
  1: {
    id: "1",
    name: "sdkflsdf",
  },
  2: {
    id: "2",
    name: "sdkflsdf",
    // ...
  },
  // ...
};

//  масиви з об'єктами

const people = [
  { name: "Nick", age: 18, zp: 400 }, // 0
  { name: "Artem", age: 19, zp: 200 }, // 1
  { name: "Kate", age: 22, zp: 600 }, // 2
  { name: "Roma", age: 21, zp: 100 }, // 3
];
console.log(people[3].name); // 'Roma'
// Методи масивів - спеціальний JS code, якій використовується для роботи з об'єктами
// !!! це 100% питається на співбесідах !!!

// forEach, filter, sort, find, reduce, map, some

// ==== forEach ====
// схожий на цикл, але не він. Він створює функцію ДЛЯ кожного елементу який перебирає, також його не можна зупинити break, і у нього немає свого оператору this
people.forEach((person) => console.log(`Name: ${person.name}`));

//  ==== sort ====
//  дозволяє сортувати елементи у порядку зростання або спадання
//  (a, b) => a - b (від наймешного до найбільшого)
//  (a, b) => b - a (від більшого до найменшого)
//  a -> найменше число
//  b -> найбільше число
//  '-' -> діапозон (від і до)

let number = [2, 4, 1, 3, 5]; // 1,2,3,4,5
let newNumbers = number.sort((a, b) => a - b); // 1,2,3,4,5
//  =======================================================
let sortedByZP = people.sort((a, b) => a.zp - b.zp);

// ==== map ====
// Він створює функцію ДЛЯ кожного елементу який перебирає, створює новий масив на основі переданого у середину і повертає назад цей масив

let newArray = people.map((person) => person.name); // ['Roma', 'Artem', 'Nick', 'Kate']
console.log(newArray);
// =======================================================
let newNewNumbers = number.map((num) => num * 2); // [2, 4, 6, 8, 10]
console.log(newNewNumbers);

//  ==== filter ====
// фільтрує дані в масиві
// =======================================================
//  фільтрація
//  видалення зайвих елементів
//  реалізація пошуку на сайті
//  реалізація сортування на сайті (певне)
// ======================Фільтрація==============================
let filtered = people.filter((person) => person.age > 20);
// {name: 'Kate', age: 22, zp: 600},
// {name: 'Roma', age: 21, zp: 100},

// =======================Видалення==============================

let deletePerson = people.filter((person) => person.name !== "Artem");
// {name: 'Nick', age: 18, zp: 400},
// {name: 'Kate', age: 22, zp: 600},
// {name: 'Roma', age: 21, zp: 100},
// =======================================================
// 'Nick' !== 'Artem' -> true
// 'Artem' !== 'Artem' -> false (delete)

// ==== find ====
//  find - довзоляє знайти та відобразити перший знайдений елемент, що задовільняє умову
const Nick = people.find((person) => person.zp === 400); // {name: 'Nick', age: 18, zp: 400},

// reduce -> розрахунки

const total = people.reduce((sum, person) => sum + person.zp, 0)

// ==== for ====

let sum = 0

for(let person = 0 < people.length; person++) {
  sum += people[person].zp
}
// ==== some ====
// повертае або true\false якщо хоча б один елемент задовільняе умову

const numbersOne = [1,2,3,5,7,8,]
const hasEven = numbersOne.some(num => num % 2 === 0)
console.log(hasEven)


// for of - для перебору масивів

for(let num of numbersOne) {
  sum += num
}
// for in - для перебору методів масиву

for(let person in people) {
  sum += people[person].zp
}

// this - посилання на об'єкт в якому виконуєтся функція

const persons = {
  name: "Nick",
  age: 44,
  displayInfo: function() {
    console.log(`${this.name}, ${this.age}`)
  }
}
persons.displayInfo()

// =============================================================================

//1. Повернути унікальних користувачів за ім'ям (без дублікатів)

const users = [
  { name: 'Anna' },
  { name: 'Ivan' },
  { name: 'Anna' },
  { name: 'Petro' },
  { name: 'Ivan' },
  { name: 'Oleh' },
]

function getUsers (users) {
  let newUsers = []
  users.forEach(oldUsers => {
    const isAlreadyExist = newUsers.some(newUsers => oldUsers.name === newUsers.name)
    if(!isAlreadyExist) newUsers.push(oldUsers)
  })
return newUsers
}
//==============================================================================

//2. Повернути користувачів, які мають конкретну роль

const usersWithRoles = [
  { name: 'Anna', roles: ['admin', 'editor'] },
  { name: 'Ivan', roles: ['viewer'] },
  { name: 'Oleh', roles: ['editor'] },
  { name: 'Petro', roles: ['admin'] },
  { name: 'Olena', roles: ['moderator', 'viewer'] },
]
// includes -> робемо перевірку на наявність одного елемнта всередині іншого

function getUsersByRole (users, role) {
  return users.filter(user => user.roles.includes(role))
}

getUsersByRole(usersWithRoles, 'editor')
//==============================================================================

// 3. Отримати імена повнолітніх (18+) осіб, відсортованих за віком за спаданням

const people = [
  { name: 'Anna', age: 17 },
  { name: 'Ivan', age: 22 },
  { name: 'Petro', age: 15 },
  { name: 'Olena', age: 19 },
]
const adultNames = people
  .filter(p => p.age >= 18)
  .sort((a, b) => b.age - a.age)
  .map(p => p.name);
console.log(adultNames)

//==============================================================================

// 5. Знайти спільні елементи між двома масивами

const arr1 = [1, 2, 3, 4]
const arr2 = [3, 4, 5, 6]
const common = arr1.filter(el => arr2.includes(el))
console.log(common)

//==============================================================================

// 6. Знайти унікальні значення (ті, що є тільки в одному з масивів)

const arr12 = [1, 2, 3, 4]
const arr22 = [3, 4, 5, 6]
const unique = arr12
  .filter(el => !arr22.includes(el))
  .concat(arr22.filter(el => !arr12.includes(el)))
console.log(unique)