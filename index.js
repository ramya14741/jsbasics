const { getRemoteConfig } = require("firebase-admin/remote-config");

console.log('Hello world')

//primitive types 

let name = 'Mosh';
let age = 30;
let isApproved = false;
let firstName = undefined;
let selectedColor = null
//dynamic typings 
console.log(typeof this.name);
console.log(typeof selectedColor)//type is object

//object {} object literal 
let person = {
name:'ramya',
age:'30'
}

console.log(person);

//dot notation 

person.name = 'ramyaaa';
console.log(person.name)
//bracket notation 
person['name'] ='Mary'
console.log(person.name)

//another way for bracket notation 
let selection = 'name';
person[selection] = 'wafa'
console.log(person.name);

//arrays
let selectedColours = ['red','green'];
selectedColours[2]= 'green'
selectedColours[3]=1;
console.log(selectedColours);
console.log(selectedColours[0]);
//arrray lenght property 
console.log(selectedColours.length);

//Functions 
function greet(){
    console.log('hello world')
}
greet();

function greetname(name,lastname)//parametre
{
    console.log('hello world'+name+''+lastname)//last name by default is undefined as we didnt pass
}
greetname('Ramya');//argument
greetname('Ramya');//argument

//calculating a value 
function square(number){
    return number*number;
}
let number = square(2);
console.log(number);

//arithmetic operators

let x = 10;
let y = 5;
console.log(x+y);//x+y is  an expression 
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x ** y); //x to the power of y

//increment operator arithmetic
console.log(x++)//value is 10
console.log(++x)//value is 12

//decrement operator - arithmetic
console.log(--x);//value is 11

//assignment operator

let a = 10;
//both are same 
a = a+5;
a+= 5;
a=a*3;
a*= 3;

//comparison operators

//relation operators

let b = 1;
console.log(b>10);
console.log(b>=10);
console.log(b>10);
console.log(b<=10);


//equality operator
console.log(b===1);
console.log(b!==1);

//strict equality operator - same type and value 
console.log(1===1);

//lose equality operator - checks value alone 
console.log(1==1);
console.log('1'==1)//convert the right side value to string so result become true 
console.log(true == 1)// convert the right side value to true so the value becomes true
//ternary operator
// example 
let points = 110;
let type = points>100? 'gold':'silver' //result is boolean either true or false
console.log(type);

//logical operator with non boolean 
console.log(true && true);//result is true
console.log(true && false); //result is false

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

//logical or ||
let highIncomeor = false;
let goodCreditScoreor = true;
let eligibleForLoanor = highIncomeor || goodCreditScoreor;
console.log(eligibleForLoanor);
//not !

let applicationRefused = !eligibleForLoan;
console.log(applicationRefused);

//result of logical operations depends on the value of operands we have 

false || true //result is true
false||'ramya' //result is ramya
false || 1 //result is 1
false ||1 ||2 //result is 1 // short circuiting 

//
let userColour = 'red';
let defaultColour = 'green'
let currentColor = userColour|| defaultColour //result is userColour. 
//result will be defaultColour if userColour doesnt exist

//bitwise operators
//1 =00000001
//2 =00000010
//3= 00000011
console.log(1|2)//bitwise OR//result is 3
console.log(1&2)//result is 0
//swapping variable 

let e = 'red'
let d= 'blue'
let c= e;
e=d;
d= c;



