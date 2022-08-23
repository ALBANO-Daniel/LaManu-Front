// const textCss = document.body;

// function changeBold(){
//     if(textCss.style.fontWeight != "bold"){
//         textCss.style.fontWeight = "bold";
//     } else {
//         textCss.style.fontWeight = "normal";
//     }
// }
// function changeColor(){  
//     console.log(textCss.style.color)
//     if(textCss.style.color == "green"){
//         textCss.style.color="black";
//     } else {
//         textCss.style.color = "green";
//     }
// };
// function changeSize(){

// // first check of IF on the BTN need to be false 
// // against "undefined"/or the value before event..
// // or it will do the fake click effect... 

// // first check need to be diferent from ( undefined && "already implemented style"(parentHeritage) )
//     if(textCss.style.fontSize != '12px'){
//         textCss.style.fontSize = '12px';
//     } else {
//         textCss.style.fontSize = '16px';
//     }
// };


/* --------------- WITHOUT ONCLICK in HTML ------------------ */



// const textCss = document.body.style;

// btnGroup = document.getElementById("buttons").children;

// btnGroup[0].addEventListener('click', () => {
//     if(textCss.fontWeight != "bold"){
//         textCss.fontWeight = "bold";
//     } else {
//         textCss.fontWeight = "normal";
//     }
// })
// btnGroup[1].addEventListener('click', () => {
//     if(textCss.color == "green"){
//         textCss.color="black";
//     } else {
//         textCss.color = "green";
//     }
// })
// btnGroup[2].addEventListener('click', () => {
//     if(textCss.fontSize != '12px'){
//         textCss.fontSize = '12px';
//     } else {
//         textCss.fontSize = '16px';
//     }
// }) 



// object.addEventListener("click", myScript);



//  EXAMPLE CLAUDE 

// le CSS =  .bold bold .color red .zoom  2rem


// document.getElementById('colorBtn').addEventListener('click', () => { 
//     addStyle('zoom')
// })
// document.getElementById('colorBtn').addEventListener('click', () => { 
//     addStyle('color')
// })
// document.getElementById('colorBtn').addEventListener('click' , () => { 
//     addStyle('zoom')
// })

// function addStyle(styleOnClick){
//     let paragraphs = document.querySelectorAll('p');
//     for (let paragraph of paragraphs){
//         paragraph.classList.toogle(styleOnClick)
//     }
// }



//  LE OBBJET EVENEMENT  TEST

// (event) => {}
// console.log event
// function example()

