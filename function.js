//function declaration 
walk()//we can call before initialized
function walk(){
    console.log('walk')
}
//function expression //annonymus function without a name 

run()//will get error as initializing down only 
let run = function (){
    console.log('run');
}//function is also a object

run();
let move = run ;
move();

//hoisting is the process of moving js function at the top of the file. 
// this is done automatically by JS engine 

function sum(a,b){
    console.log(arguments)//every js function has arguments object. the result is 1,2,3,4

return a+b
}

console.log(sum(1))//1+undefined result is NaN
console.log(sum(1,2,3,4))//valid will take only first two arg


//we no need to get hte argument like below 

function sum(){//no values as we are workign with arguments
    let total = 0;
    for(let value of arguments){
        total+=value;
        return total;
    }
}

console.log(sum(1,2,3,4,5,7))

//rest operator 

function sum(...args){
    console.log(args);
    return args.reduce((a,b)=> a+b)//result is 16
}
console.log(sum(2,4,5,5));


//rest parameter must be the last formal parametre 

//default parametres 

function interest(principal, rate = 3.5, years = 5){
    return principal* rate/100 * years
}

console.log(interest(1000));

//local vs global variable 

const color = 'red';

function start(){
    const message = 'hi';
    const color = 'blue';
    console.log(color)//result is blue.local variable takes precedence over global variable 
}

function stop(){
    const message = 'bye';
}


//let vs var - scope is not limited with var 

function star(){
    for (var i =0;i<5;i++)
        console.log(i)
    console.log(i)//result is 0,1,2,3,4,5 -  5 gets printed because of var. 
    // scope is not limited within for. it is limited within the function 

    }

    //difference between call and apply is we have to pass the param as array to apply 
    function playvideo(a,b){
        console.log(a,b);
    }

    playvideo.call({name:'Mosh'},1,2)
    playvideo.apply({name:'Mosh'},[1,2]);
    playvideo.bind({name:'Mosh'})()//this doesnot call the function, no matter how many times we call , this will always pass the object here

    playvideo();

