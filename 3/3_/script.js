//1
let dog = {
    name : 'Мухтар',
    age :3 ,
    color : 'рыжий',
    species : 'овчарка',
    medal : 'Нет'
};
let people ={
    name : 'Иосиф',
    age : 24,
    position : 'Старший лейтенант',
    medal : 'За отвагу',
    married :'Да'
}
let car ={
    BrandName:'ЗИС 115',
    hight:' 6000 мм',
    weidth:'1960 мм',
    height:' 1730 мм',
    weight:' 4200 кг',
}
let book ={
    BrandName:'Книга Вожатого',
    YearOfIssue:1951,
    Color : 'Синий',
    MadeIn : 'Союз Советских Соцеалистических Республик',
    DoFor : 'Вожатых'
}
let appartament={
    BrandName:'Хрущовка',
    Year:1963,
    height:' 2,5 м.',
    NumberOfApartments:4,
    price : 'Выдавалась бесплатно'
}

//2
house={
    BrandName:'Хрущовка',
    floors:9,
    issued:['Рабочим' , 'Военым' , 'Учителям' , 'Докторам' , 'Докторам наук'],
    decoration:{
        OnTheWall:'Портрет',
        OnTheWall:'Узор',
        OnTheWall:'Год',
    },
    Floors: 9
}
driver={
    parents:{
        Father: 'Иван',
        Mather: 'Катерина',
    },
    Nationality: 'Поляк',
    Location:['1940 год - Польща , Львов' , '1945 год -УССР , Львов' , '1950 год - РСФСР , Сибирь' , '1955 год - КССР , Сарань'],
    Age:46,
    married :'Да'
}
toy={
    BrandName:'ВЕРТОЛЁТ , МАШЫНА , КАТЕР',
    Material:'Железо',
    class : 'Конструктор',
    capabilities : ['ВЕРТОЛЁТ' , 'МАШЫНА' , 'КАТЕР' ],
    production: {
        plant:'По всему СССР'
    }
}
table={
    BrandName:'Нету',
    Material:'Дерево',
    type:['Круглый','Раскладной','Тумбочка','Прямоугольный'],
    production: {
        plant:'По всему СССР'
    },
    class : 'Мебель',
}
bag={
    BrandName:'Полевая сумка, планшет офицерский лётный',
    Material:'Кожа',
    type:['Кажаный','Военный','Прямоугольный'],
    production: {
        plant:'По всему СССР'
    },
    class : 'Вещи',
}

//3
// for (const dogKey in dog) {
//     console.log(dogKey)
// };
// for (const peopleKey in people) {
//     console.log(peopleKey)
// };
// for (const carKey in car) {
//     console.log(carKey)
// };
// for (const bookKey in book) {
//     console.log(bookKey)
// };
// for (const appartamentKey in appartament) {
//     console.log(appartamentKey)
// };
// for (const houseKey in house) {
//     console.log(houseKey)
// };
// for (const driverKey in driver) {
//     console.log(driverKey)
// };
// for (const toyKey in toy) {
//     console.log(toyKey)
// };
// for (const tableKey in table) {
//     console.log(tableKey)
// };
// for (const bagKey in bag) {
//     console.log(bagKey)
// };

//4
// console.log(Object.keys(dog));
// console.log(Object.keys(people));
// console.log(Object.keys(car));
// console.log(Object.keys(book));
// console.log(Object.keys(appartament));
// console.log(Object.keys(house));
// console.log(Object.keys(driver));
// console.log(Object.keys(toy));
// console.log(Object.keys(table));
// console.log(Object.keys(bag));

//5
let carr=[{
    Модель:'ЗИС115',
    ГодВыпуска:1940,
    Мощгость:'900 л.с',
    Цвет:'Чорный',

},{
    Модель:'ЗИС116',
    ГодВыпуска:1941,
    Мощгость:'901 л.с',
    Цвет:'Белый',
},{
    Модель:'ЗИС117',
    ГодВыпуска:1942,
    Мощгость:'902 л.с',
    Цвет:'Серый',
},{
    Модель:'ЗИС118',
    ГодВыпуска:1943,
    Мощгость:'903 л.с',
    Цвет:'Чорный',
},{
    Модель:'ЗИС119',
    ГодВыпуска:1944,
    Мощгость:'904 л.с',
    Цвет:'Белый',
},{
    Модель:'ЗИС120',
    ГодВыпуска:1945,
    Мощгость:'905 л.с',
    Цвет:'Серый',
},{
    Модель:'ЗИС121',
    ГодВыпуска:1946,
    Мощгость:'906 л.с',
    Цвет:'Чорный',
},{
    Модель:'ЗИС122',
    ГодВыпуска:1947,
    Мощгость:'907 л.с',
    Цвет:'Белый',
},{
    Модель:'ЗИС123',
    ГодВыпуска:1948,
    Мощгость:'908 л.с',
    Цвет:'Серый',
},{
    Модель:'ЗИС124',
    ГодВыпуска:1949,
    Мощгость:'909 л.с',
    Цвет:'Чорный',
}];
//6
let cities=[{название:'Stalingrad' ,популяция:10000,страна:'USSR',регион:'Kavkaz'},{название:'Leningrad' ,популяция:100000,страна:'USSR',регион:'Baltika'},{название:'Moscow' ,популяция:1000000,страна:'USSR',регион:'Central'},{название:'Lviv' ,популяция:10000,страна:'Ukraine',регион:'Західний'},{название:'Kyiv' ,популяция:1000000,страна:'Ukraine',регион:'Central'}];
//7
let cars=[{
    Модель:'ЗИС115',
    ГодВыпуска:1940,
    Мощгость:'900 л.с',
    Цвет:'Чорный',
    driver:{
        parents:{
            Father: 'Иван',
            Mather: 'Катерина',
        },
        Nationality: 'Поляк',
        Location:['1940 год - Польща , Львов' , '1945 год -УССР , Львов' , '1950 год - РСФСР , Сибирь' , '1955 год - КССР , Сарань'],
        Age:46,
        married :'Да'
    }
},{
    Модель:'ЗИС116',
    ГодВыпуска:1941,
    Мощгость:'901 л.с',
    Цвет:'Белый',
    driver:{
        name:'Леонид',
        пол:'Муж',
        стаж:'10 лет',
        parents:{
            Father: 'Иван',
            Mather: 'Катерина',
        },
        Nationality: 'Поляк',
        Location:['1940 год - Польща , Львов' , '1945 год -УССР , Львов' , '1950 год - РСФСР , Сибирь' , '1955 год - КССР , Сарань'],
        Age:46,
        married :'Да'
    }
},{
    Модель:'ЗИС117',
    ГодВыпуска:1942,
    Мощгость:'902 л.с',
    Цвет:'Серый',
    driver:{
        name:'Леонид',
        пол:'Муж',
        стаж:'10 лет',
        parents:{
            Father: 'Иван',
            Mather: 'Катерина',
        },
        Nationality: 'Поляк',
        Location:['1940 год - Польща , Львов' , '1945 год -УССР , Львов' , '1950 год - РСФСР , Сибирь' , '1955 год - КССР , Сарань'],
        Age:46,
        married :'Да'
    }
}]

//8
// let a =0;
// while (a<carr.length){
//     console.log(carr[a]);
//     a++;
// }
// let b=0;
// while (b<cities.length){
//     console.log(cities[b]);
//     b++;
// }
// let c=0;
// while (c<cars.length){
//     console.log(cars[c]);
//     c++;
// }

//9
// for (let a= 0; a < carr.length; a++) {
//     const car1 = carr[a];
//     console.log(car1);
//
// };
// for (let b = 0; b < cities.length; b++) {
//     const citiesElement = cities[b];
//     console.log(citiesElement);
// };
// for (let c = 0; c < cars.length; c++) {
//     const carsElement = cars[c];
//     console.log(carsElement);
// };

//10
// for (const car1 of carr) {
//     console.log(car1);
// };
// for (const cities1 of cities) {
//     console.log(cities1);
// };
// for (const cars1 of cars) {
//     console.log(cars1);
// };

//11
// dog
// people
// car
// book
// appartament
let a = JSON.stringify(dog);
let b = JSON.stringify(people);
let c = JSON.stringify(car);
let d = JSON.stringify(book);
let e = JSON.stringify(appartament);

//12
let aa =JSON.parse(a);
let bb =JSON.parse(b);
let cc =JSON.parse(c);
let dd =JSON.parse(d);
let ee =JSON.parse(e);

//13
for (const carrElement of carr) {
    let carrjson =JSON.stringify(carrElement);
};
//14
for (const citiesElement of cities) {
    let citiesjson =JSON.stringify(citiesElement);
};

//15
for (const carsElement of cars) {
    let carsjson = JSON.stringify(carsElement);
    carsjsoncopy=[carsjson];
    // console.log(carsjsoncopy);
}

//16 / 17
let user =[
    {
        name:'Михаил',
        age : 20,
        married: true,
        skills:['linux' , 'C++' , 'C#' , 'JAVA' ]
    },
    {
        name:'Илизавета',
        age : 19,
        married: false,
        skills:['HTML/CSS' , 'JS' , 'python' ]
    }
]
for (const useri of user) {
    for (const skill of useri.skills) {
        console.log(skill);
        let skillcopy = [skill];

    }
}
