// 1
// let dog = {
//     name : 'Мухтар',
//     age :3 ,
//     color : 'рыжий',
//     species : 'овчарка',
//     medal : 'Нет'
// };
// let people ={
//     name : 'Иосиф',
//     age : 24,
//     position : 'Старший лейтенант',
//     medal : 'За отвагу',
//     married :'Да'
// }
// let car ={
//     BrandName:'ЗИС 115',
//     hight:' 6000 мм',
//     weidth:'1960 мм',
//     height:' 1730 мм',
//     weight:' 4200 кг',
// }
// let book ={
//     BrandName:'Книга Вожатого',
//     YearOfIssue:1951,
//     Color : 'Синий',
//     MadeIn : 'Союз Советских Соцеалистических Республик',
//     DoFor : 'Вожатых'
// }
// let appartament={
//     BrandName:'Хрущовка',
//     Year:1963,
//     height:' 2,5 м.',
//     NumberOfApartments:4,
//     price : 'Выдавалась бесплатно'
//
//
// }

// 2
// let dog = [
//     'Мухтар','Барсик','Маркиз','Беляш','Герцог'
// ]
// console.log(dog)
// let people = [
//     'Витьок', 'Валера','Витя','Бодья','Лермонтов'
// ]
// console.log(people)
// let car = [
//     'ГАЗ-13 «Чайка»','ГАЗ-21 «Волга»','ГАЗ-24 «Волга»','ЗИС-110','ВАЗ-2101'
// ]
// console.log(car);

// 3
// house={
//     BrandName:'Хрущовка',
//     floors:9,
//     issued:['Рабочим' , 'Военым' , 'Учителям' , 'Докторам' , 'Докторам наук'],
//     decoration:{
//         OnTheWall:'Портрет',
//         OnTheWall:'Узор',
//         OnTheWall:'Год',
//     },
//     Floors: 9
// }
// driver={
//     parents:{
//         Father: 'Иван',
//         Mather: 'Катерина',
//     },
//     Nationality: 'Поляк',
//     Location:['1940 год - Польща , Львов' , '1945 год -УССР , Львов' , '1950 год - РСФСР , Сибирь' , '1955 год - КССР , Сарань'],
//     Age:46,
//     married :'Да'
// }
// toy={
//     BrandName:'ВЕРТОЛЁТ , МАШЫНА , КАТЕР',
//     Material:'Железо',
//     class : 'Конструктор',
//     capabilities : ['ВЕРТОЛЁТ' , 'МАШЫНА' , 'КАТЕР' ],
//     production: {
//         plant:'По всему СССР'
//     }
// }
// table={
//     BrandName:'Нету',
//     Material:'Дерево',
//     type:['Круглый','Раскладной','Тумбочка','Прямоугольный'],
//     production: {
//         plant:'По всему СССР'
//     },
//     class : 'Мебель',
// }
// bag={
//     BrandName:'Полевая сумка, планшет офицерский лётный',
//     Material:'Кожа',
//     type:['Кажаный','Военный','Прямоугольный'],
//     production: {
//         plant:'По всему СССР'
//     },
//     class : 'Вещи',
// }

// 4
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// console.log (users [7] .status)
// console.log (users [4] .status)
// console.log (users [9] .name)
// console.log (users [2] .name)
// console.log (users [6] .age)
// console.log (users [9] .age)
// console.log(users[4] .age + users[4].name)
// console.log(users[3].age + users[3].status)

let content=document.getElementById('content');
let rules = document.getElementById('rules');
let text = document.getElementsByClassName('fc_rules');
 console.log(content);
 console.log(rules);
 console.log(text);
content.innerText= 'Когда меня не станет, сарай достроите сами!\n' +
    'Из тех камней ну или вот может из тех камней\n' +
    'Их называют кирпичами, цемент лежит за баней!\n' +
    'Его водой залей (три к одному) молодец штопор\n'
;
rules.innerText='Когда момент настанет, цемент вдруг твердым станет,\n' +
    'Запускай свиней и поросят - детей свиней.\n' +
    'В природе так бывает, свинья свинью рожает,\n' +
    'Свиноворот свиней (оой папа!)';
// content.style.backgroundColor='#ff0000';
// rules.style.backgroundColor='#ff0000';
// for (const ul of text) {
//  ul.style.backgroundColor='#ff0000';
// };
content.style.backgroundColor='#00217f';
rules.style.backgroundColor='#00217f';
for (const ul of text) {
    ul.style.backgroundColor='#00217f'
};
// for (const ul of text) {
//  ul.style.backgroundColor='#ff0000';
// };

for (const ul of text) {
 ul.style.backgroundColor='#ff0000';
};
