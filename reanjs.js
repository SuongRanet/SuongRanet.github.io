let num1 = document.querySelector('#box1');
let num2 = document.querySelector('#box2');
let num3 = document.querySelector('#box3');
let btn  = document.querySelector('.plus');
let btn1 = document.querySelector('.minus');
let btn2 = document.querySelector('.divides');
let btn3 = document.querySelector('.multiply');
 function plus1(){
    let result = parseInt(num1.value) + parseInt(num2.value) ;
    num3.value = result ;
 }
 function minus1(){
    let result = parseInt(num1.value) - parseInt(num2.value) ;
    num3.value = result ;
 }
 function divide1(){
    let result = parseInt(num1.value) / parseInt(num2.value) ;
    num3.value = result ;
 }
 function multiply1(){
    let result = parseInt(num1.value) * parseInt(num2.value) ;
    num3.value = result ;
 }
//  btn.addEventListener('plus', plus);
//  btn1.addEventListener('minus', minus);
//  btn2.addEventListener('divide', divide);
//  btn3.addEventListener('multiply', multiply);
