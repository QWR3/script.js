//1
// let text = document.getElementById('textarea')
// console.log(text);
// text.value =localStorage.getItem('textarea')
// text.oninput=()=>{
//     localStorage.setItem('textarea' ,text.value)
// }

//2
// let form = document.forms.myform;
// let parse = JSON.parse(localStorage.getItem('local'));
//
// for (const key in parse) {
//     if (key.startsWith('ch')) {
//         form[key].checked = true;
//     }
//     form[key].value = parse[key];
// }
// form.oninput=()=>{
//     let obj = {};
//     for (let item of form) {
//         if (item.type === 'radio' || item.type==='checkbox') {
//             if (item.checked) {
//                 obj[item.name] = item.value;
//             }
//         } else {
//             obj[item.name] = item.value;
//         }
//     }
//     localStorage.setItem('local', JSON.stringify(obj));
// }

//3
// let button1 = document.getElementById('button1')
// let button2 = document.getElementById('button2')
// let save = document.getElementById('save')
// let textarea = document.getElementById('textarea')
//
//
//
// save.onclick=()=>{
//
//     localStorage.setItem(localStorage.length ,textarea.value)
//
//
// }
// button1.onclick=()=>{
//     let index;
//     for (const Key in localStorage) {
//         if (localStorage.getItem(Key)===textarea.value){
//             index =+Key-1
//             console.log(index);
//         }
//     }
//     textarea.value =localStorage.getItem(index)
//
// }
// button2.onclick=()=>{
//     let index;
//     for (const Key in localStorage) {
//         if (localStorage.getItem(Key)===textarea.value){
//             index =+Key+1
//             console.log(index);
//         }
//     }
//     textarea.value =localStorage.getItem(index)
//
// }

//4
// let h2 =document.getElementById('h2')
// let form =document.forms.form
// let text1 =document.forms.form.text1
// let text2 =document.forms.form.text2
// let text3 =document.forms.form.text3
// let text4 =document.forms.form.text4
// let text5 =document.forms.form.text5
// let text6 =document.forms.form.text6
// let button =document.forms.form.button
// let button1 =document.forms.form.button1
//
//
//
//
//
// button.onclick=()=>{
//     let arr =[text1.value,text2.value,text3.value,text3.value ,text4.value,text5.value,text6.value]
//     localStorage.setItem(localStorage.length ,JSON.stringify(arr))
// }
// button1.onclick=()=>{
//     let but1R=JSON.parse( localStorage.getItem(+localStorage.length-1))
//     h2.innerHTML =but1R[0]+ ' '+but1R[1]+ ' '+but1R[2]+ ' '+but1R[3]+ ' '+but1R[4]+ ' '+but1R[5]+ ' '+but1R[6]
// }

