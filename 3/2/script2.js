//                                 CLASS
let red =document.getElementById('main_header');
red.style.backgroundColor='#b30000';
let UlPx =document.getElementsByTagName("ul");
for (const ul of UlPx) {
    ul.style.width='400px';
};

let link= document.getElementsByClassName('linkList');
for (const links of link) {
    links.style.width='50%'
};
let list = document.getElementsByClassName('listElement2');
for (const listElement of list) {
    console.log(listElement);
};
let lii = document.getElementsByTagName('li');
for (const li of lii) {
    li.style.backgroundColor='#494949';
};
let a =document.getElementsByTagName('a');
for (const aa of a) {
    aa.classList.add('anchor');
    if (aa.innerText == 'link3'){
        aa.style.fontSize='40px';
    };
    aa.classList.add('element_XXX');
    aa.innerText = 'XXX'
};
let color =prompt('color');
let sub =document.getElementsByClassName('sub-header');
for (const subs of sub) {
    subs.style.backgroundColor=color;
};

let elementp =document.getElementsByTagName('p');
for (const elementsp of elementp) {
    elementsp.style.padding='5px';
}

let text = document.getElementsByClassName('text2');
for (const texts of text) {
    texts.innerText = 'За родину!';
};