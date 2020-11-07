//1
// function a(){
//     let b= ['a' , 1 , true]
//     console.log(b)
// }
// a()

//2
// function a(){
//     let b= [Math.random()*(100 - 0)+0 ,Math.random()*(100 - 0)+0,Math.random()*(100 - 0)+0,Math.random()*(100 - 0)+0,Math.random()*(100 - 0)+0]
//     console.log(b)
// }
//   a()

//3
// function min(перше,друге,третє){
//     if(перше<друге&&перше<третє){
//         console.log(перше);
//         return (перше);
//
//     }
//     if (друге<перше&&друге<третє ){
//         console.log(друге);
//         return (друге);
//
//     }
//     if (третє<перше&&третє<друге){
//         console.log(третє);
//         return (третє)
//
//     }
// };
//
// let result=min(6,34,354);


//4
// function result(перше,друге,третє){
//     if(перше>друге&&перше>третє){
//         console.log(перше);
//         return (перше);
//
//     }
//     if (друге>перше&&друге>третє ){
//         console.log(друге);
//         return (друге);
//
//     }
//     if (третє>перше&&третє>друге){
//         console.log(третє);
//         return (третє);
//
//     }
// };
//
// let result=min(6,34,354);

//5
// function a() {
//     min=Math.min.apply(Math,arguments);
//     max=Math.max.apply(Math,arguments);
//     console.log(max);
//     return (min);
// }
// a(2,64,68,526,8,9,35,33)
// console.log(min);

//6
// function a(){
//     let b= [3 , 1 , 24]
//     console.log(b)
// }
// a()


//7
// function a(){
//     let b =[10 , 1 , 20];
//     console.log(b);
//     if (b[0]<b[1]<b[2]){
//         return (b[0]);
//     }
//     if (b[1]<b[0]<b[2]){
//         return (b[1])
//     }
//     if (b[2]<b[0]<b[1]){
//         return (b[2])
//     }
// }
// let c =a()

//8
// function a(){
//     let b =[10 , 1 , 20];
//     console.log(b);
//     if (b[0]>b[1]<b[2]){
//         return (b[0]);
//     }
//     if (b[1]>b[0]<b[2]){
//         return (b[1])
//     }
//     if (b[2]>b[0]<b[1]){
//         return (b[2])
//     }
// }
// let c =a()

//9
// function f(array) {
//     let sum = 0;
//     for (const arrayElement of array) {
//
//         sum += arrayElement;
//
//     }
//     return sum;
// }
// let ff=f([1,1,3]);
// console.log(ff )

//10
// function f(array) {
//     let sum = 0;
//     for (const arrayElement of array) {
//
//         sum += arrayElement;
//
//     }
//     return sum/2;
// }
// let ff=f([1,1,3]);
// console.log(ff )

// 11
// function f(array) {
//     let l = 0;
//
//     for (const m of array) {
//         l ++;
//     }
//     return l;
//
// }
// let result = f([1,3,4,3,1,5]);
// console.log(result);

//12
// function f(array) {
//      let k = 0;
//
//     for (const m of array) {
//         for (const Key in array) {
//             k++;
//         }
//
//     }
//     return k;
//
// }
// let result = f([{
//     seg:'hdrh',
//     gfd:'56',
//     gd:'tyuj',
//     uk:'ghj',
//     jy:'vbn',
// },{
//     seg:'hdrh',
//     gfd:'56',
//     gd:'tyuj',
//     uk:'ghj',
//     jy:'vbn',
// },{
//     seg:'hdrh',
//     gfd:'56',
//     gd:'tyuj',
//     uk:'ghj',
//     jy:'vbn',
// },{
//     seg:'hdrh',
//     gfd:'56',
//     gd:'tyuj',
//     uk:'ghj',
//     jy:'vbn',
// },{
//     seg:'hdrh',
//     gfd:'56',
//     gd:'tyuj',
//     uk:'ghj',
//     jy:'vbn',
// },{
//     seg:'hdrh',
//     gfd:'56',
//     gd:'tyuj',
//     uk:'ghj',
//     jy:'vbn',
// }]);
// console.log(result);

//13
//1
// function f(array , index) {
//     let arr=array;
//     for (let i = 0; i < arr.length; i++) {
//         let This = arr[index];
//         arr[index ] =arr[index+1];
//         arr[index+1]=This;
//
//     }
//     return arr;
// }
// let result = f([0,1,2,3,4],2);
// console.log(result);
//2
// function f (array , i ) {
//      let one = array;
//      if (i >= 0 && i < array.length) {
//          let a = one[i];
//          one[i] = one[i + 1];
//          one[i + 1] = a;
//      }
//     return(one);
// }
// let consoleLog=f([0,1,2,3,4] ,3)
// console.log(consoleLog)
//3
// function f(array) {
//     let zero = [];
//     let notZero =[];
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         if (arrayElement === 0){
//             zero.push(arrayElement);
//         }else {
//             notZero.push(arrayElement)
//         }
//
//     }
//     return [...notZero,...zero]
// }
// let result=f([0,2,3,7,6,5,4,2,])
// console.log(result);
//14
// let div = document.createElement("div");
// document.body.appendChild(div);
// function f() {
//     let text = 'hello owu';
//     div.innerHTML = text;
// }
// f()

//15
// // let promptETN=prompt('element tag name');
// // let promptT=prompt('text');
// // let div = document.createElement(promptETN);
// // document.body.appendChild(div);
// // function f() {
// //     // let text = promptT;
// //     div.innerHTML = promptT;
// // }
// // f()
// function f(tag , text) {
//     let div = document.createElement(tag);
//     div.innerHTML = text;
//     document.body.appendChild(div);
// }
// f('div' , 'Hello ');

//16
// let car=[
//     'ГАЗ-13 «Чайка»','ГАЗ-21 «Волга»','ГАЗ-24 «Волга»','ЗИС-110','ВАЗ-2101'
// ]
// function f(array,tag) {
//     let div = document.createElement(tag);
//     div.innerHTML = array;
//     document.body.appendChild(div)
// }
// let result = f(car , 'div')
// console.log(result);

//17
// let car=[
//     {brandname:'ГАЗ-13 «Чайка»'},{brandname:'ГАЗ-21 «Волга»'},{brandname:'ГАЗ-24 «Волга»'},{brandname:'ЗИС-110'},{brandname:'ВАЗ-2101'} ,'lada'
// ]
// function f(array,tag ,tag2 ,tag3) {
//     let div =document.createElement(tag);
//     document.body.appendChild(div)
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         let div1 = document.createElement(tag2);
//         if ( typeof arrayElement=== 'string'){
//             div1.innerHTML = '<p>'+ arrayElement +'</p>';
//         }
//         div.appendChild(div1);
//         for (const arrayElementKey in arrayElement) {
//              if ( typeof arrayElement==='object'){
//                  let div2 = document.createElement(tag3);
//                  div2.innerHTML = '<p>'+ arrayElementKey +'</p>';
//                  div1.appendChild(div2);
//
//
//              }
//
//         }
//     }
// }
//  f(car , 'div' ,'div' ,'div')
//18
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
//
// function f(users , cities) {
//     for (const array1 of users) {
//         for (const array2 of cities) {
//             if (array1.id === array2.user_id){
//                 array1.adress = array2;
//             }
//         }
//     }
//     return users;
// }
// let result = f(usersWithId,citiesWithId )
// console.log(result);

//19
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
// function f(arr){
//     for (const arrElement of arr) {
//         if (typeof arrElement ==='object'){
//             let div = document.createElement("div");
//             // div.innerHTML =arrElement;
//             document.body.appendChild(div);
//             let div1 =document.createElement('div');
//             div1.innerHTML =arrElement.title;
//             div.appendChild(div1);
//             let div2 = document.createElement('div');
//             div2.innerHTML =arrElement.body;
//             div.appendChild(div2)
//         }
//     }
// }
// f(rules);