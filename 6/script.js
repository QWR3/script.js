//1
// let arr = [ 7,22,5,9,95,65,26,15,24,75 ,84,48,65,78,925,68,12,23,45,78
// ]
// let sort = arr.sort((a,b) =>{
//     if (b>a){
//         return -1
//     }
//     return 1
// });
// console.log(arr);

//2
// let arr = [ 7,22,5,9,95,65,26,15,24,75 ,84,48,65,78,925,68,12,23,45,78
// ]
// let sort =arr.sort((a,b)=>{
//     if (a>b){
//         return -1
//     }
//     return 1
// })
// console.log(sort);

//3
// let arr = [ 7,22,5,9,95,65,26,15,24,75,84,48,65,78,925,68,12,23,45,78]
// let filter =arr.filter((value, index, array) => {
//     if (!(value%3)) {
//         return value
//     }
//
// })
// console.log(filter);

//4
// let arr = [ 7,22,5,9,95,65,26,15,24,75,84,48,60 ,78,925,68,12,23,45,78]
// let filter =arr.filter((value)=>{
//     if (!(value%10)){
//         return value
//     }
// })
// console.log(filter);

//5
// let arr = [ 7,22,5,9,95,65,26,15,24,75,84,48,60 ,78,925,68,12,23,45,78]
// let forEach =arr.forEach((value, index, array) =>{
//     console.log(value);
// })

//6
// let arr = [ 7,22,5,9,95,65,26,15,24,75,84,48,60 ,78,925,68,12,23,45,78]
// let map = arr.map((value, index, array) => {
//     value = value*3;
//     return value;
// })
// console.log(map);

//7
// let arr = ['abandon','civilian','incorporate','party','extend','fact','soviet','opposition','thousand','context','wonderful','zone','yourself','dear','between','teenager']
// let sort=arr.sort()
// console.log(sort);

//8
// let arr = ['abandon','civilian','incorporate','party','extend','fact','soviet','opposition','thousand','context','wonderful','zone','yourself','dear','between','teenager']
// let sort=arr.sort((a, b) =>{
//     return b-a;
// } )
// console.log(sort);

//9
// let arr = ['abandon','civilian','incorporate','party','extend','ok','soviet','opposition','thousand','context','wonderful','hi','yourself','dear','between','teenager']
// let filter = arr.filter((value, index, array) => {
//     if (value.length < 4){
//         return value
//     }
// })
// console.log(filter);

//10
// let arr = ['abandon','civilian','incorporate','party','extend','fact','soviet','opposition','thousand','context','wonderful','zone','yourself','dear','between','teenager']
// let map =arr.map((value, index, array) => {
//     return value+`!`
//
// })
// console.log(map);

//11
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// let sort = users.sort((a, b) => {
//     return b.age-a.age
// })
// // let sort = users.sort((a, b) => {
// //     return a.age-b.age
// // })
// console.log(sort);

//12
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// let sort =users.sort((a, b) => {
//     // if (a<b){
//     //    return -1
//     // }
//     // return 1
//     if (a<b){
//         return 1
//     }
//     return -1
// })
// console.log(sort);

//13
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// let json1 = JSON.stringify(users)
// let json2 = JSON.parse(json1)
// let map =json2.map((value, index, array) => {
//     value.id =index
//     return value
// })
// console.log(users)
// console.log('**************')
// console.log(map);

//                                                              CLASS


let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
//1
// let filter= cars.filter((value, index, array) => {
//     if (value.volume > 3){
//         return value;
//     }
// })
// console.log(filter);

//1
// let filter= cars.filter((value, index, array) => {
//     if (value.volume > 2){
//         return value;
//     }
// })
// console.log(filter);

//3
// let filter= cars.filter((value, index, array) => {
//     if (value.producer === 'mercedes'){
//         return value;
//     }
// })
// console.log(filter);

//4
// let filter= cars.filter((value, index, array) => {
//     if (value.producer === 'mercedes'&& value.volume > 2){
//         return value;
//     }
// })
// console.log(filter);

//5
// let filter= cars.filter((value, index, array) => {
//     if (value.producer === 'subaru'&& value.volume > 2){
//         return value;
//     }
// })
// console.log(filter);

//6
// let filter= cars.filter((value, index, array) => {
//     if ( value.power > 300){
//         return value;
//     }
// })
// console.log(filter);

//7
// let filter= cars.filter((value, index, array) => {
//     if ( value.power > 300 && value.producer === 'subaru'){
//         return value;
//     }
// })
// console.log(filter);

//8
// let filter= cars.filter((value, index, array) => {
//
//     if (  value.engine.startsWith('ej') ){
//         return value;
//     }
// })
// console.log(filter);

//9
// let filter= cars.filter((value, index, array) => {
//
//     if (  value.engine.startsWith('ej' )&& value.producer ==='subaru'&& value.power >300 ){
//         return value;
//     }
// })
// console.log(filter);

//10
// let filter= cars.filter((value, index, array) => {
//
//     if (   value.producer ==='mercedes'&& value.volume <3 ){
//         return value;
//     }
// })
// console.log(filter);

//11
// let filter= cars.filter((value, index, array) => {
//
//     if (   value.power >250&& value.volume >2 ){
//         return value;
//     }
// })
// console.log(filter);

//12
// let filter= cars.filter((value, index, array) => {
//     if (   value.power >250&& value.producer ==='bmw' ){
//         return value;
//     }
// })
// console.log(filter);

let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Ahevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Bhevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Dhevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Chevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
//13 , 14
// let sort =usersWithAddress.sort((a, b) => {
//     // return a.id - b.id
//     return b.id - a.id
// })
// console.log(sort);

//15,16
// let sort =usersWithAddress.sort((a, b) => {
//     // return a.age - b.age
//     return b.age - a.age
// })
// console.log(sort);

//17,18
// let sort =usersWithAddress.sort((a, b) => {
//     // return a.name.length -b.name.length
    // return b.name.length-a.name.length
// })
// console.log(sort);

//19
// let sort=usersWithAddress.sort((a, b) => {
//     let astreet =a.address.street.toLowerCase();
//     let bstreet =b.address.street.toLowerCase();
//     if (astreet<bstreet){
//         return -1
//     }
//     if (astreet>bstreet){
//         return 1
//     }
//     return 0
// })
// console.log(sort);

//20
// let sort =usersWithAddress.sort((a, b) => {
//     return a.address.number - b.address.number
// })
// console.log(sort);

//21
// let filter =usersWithAddress.filter((value, index, array) => {
//     if (value.age<30){
//         return value
//     }
// })
// console.log(filter);

//22
// let filter =usersWithAddress.filter((value, index, array) => {
//     if(value.status === false){
//         return value
//     }
// })
// console.log(filter);

//23
// let filter = usersWithAddress.filter((value, index, array) => {
//     if (value.status===false && value.age < 30){
//         return value
//     }
// })
// console.log(filter);

//24
// let filter =usersWithAddress.filter((value, index, array) => {
//     if(!(value.address.number%2)){
//         return value
//     }
// })
// console.log(filter);

// let arr =[6,48,8,74,852,63,2,5,56,853,2,56,984]
// let reduce =arr.reduce((acc,value) =>{
//     if(acc>value){
//         return acc
//
//     }
//     console.log(acc);
//
//     return  value
// })
// console.log(reduce);