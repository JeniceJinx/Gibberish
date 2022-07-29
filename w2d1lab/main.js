// function sayHello(name){
//     console.log(`Hello, ${name}`)
// }

// function secondSayHello(name){
//     return `Hello, ${name}`;
// }

// const result = secondSayHello('Jinx');
// console.log(result);

// function addTwoNum(num1, num2){
//     return num1 + num2;
// }

// addTwoNum(5, 8);

//parameters vs argrument
//parameter is the representation of the "special" variable that is the input to a function
//argument is the specific value you give the function

//ie function addTwoNums(num1,num2) => num1 and num 2 are the parameters
//ie addTwoNum(5, 8)  => 5 and 8 are the arguments

//if you want to use the return set the return equal to a const/let variable 
//then pass it as a variable to console.log

/* 
scope is whether or not you have access to a variable
global scope can be used anywhere, it can be used anywhere 
because it is not confined to a particular block of code
if it is code block specific, you can not use it globally

a code block is what's between two curly braces{}

global scopes are defined at the top of the program (in general)

can't use a variable until you are 'under it' meaning it must be defined first

compiled language vs interpreted language =>  top down reading
compiled language => everything is there all at once

*/

// const array = [1, 2, 3];
// const number = 12;
// const name = 'Jinx';

// function grabOutsideVariable(){
//     console.log(`hello ${name}`);

// }

// function nestedFunctionParent(){
//     const age = 2000;

//     function nestedFunctionChild(){
//         console.log(age)
//     }
//     nestedFunctionChild(); //run child function
// }

// nestedFunctionParent(); // run parent function

//you can use a nested function when created recursive functions (functions that call themselves)
//binary trees and data structures are interview questions
//using nested functions are not that common

// function newbieBasic(){
//     console.log('Hello world!');
//   return newbieBasic;
// }
// newbieBasic();


// function numSquare(num){ 
//     let num1 = num * num;
//     console.log(num1);
//     return num1;  
// }

// console.log(numSquare(7));


//Write a function to calculate compound interest based on the principle amount
//CI = P * pow((1 + R / 100), T)
//A=P(1+r/n)^nt

// A	=	final amount
// P	=	initial principal balance
// r	=	interest rate
// n	=	number of times interest applied per time period
// t	=	number of time periods elapsed
 
function compoundInterest(){
    let 
    return
}