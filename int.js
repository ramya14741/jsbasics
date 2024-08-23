//write a code to get the array of names from the given array of users

const users =[
    {id:1,name:'jack',isActive:true, age:20},
    {id:2, name:'john', isActive:true,age:30},
    {id:3, name:'Mike', isActive:false,age:40}
]
//to sort in descending order

users.sort((user1,user2)=>(user1.age<user2.age?1:-1))
//to sort in ascending order
users.sort((user1,user2)=>(user1.age<user2.age?-1:1))

let names =[];

users.forEach(u=>{
    names.push(u.name);
})
console.log(names);
//same can be written like below. map iterate through all teh element of an array and return some value
const namesmap = users.filter(u=>{u.isActive}).map(u=>{u.name})

//difference between null and undefined

//altogether in single code, sort, filter, map
users.sort((user1,user2)=>(user1.age>user2.age?-1:1))
.filter(u=>{u.isActive})
.map(u=>{u.name});

let var1;
console.log(var1);//undefined as we didnt define value
console.log(typeof var1);//undefined as we didnt define value

let var2=null;
console.log(var2);//result is null
console.log(typeof var2);

//

console.log(foo);
foo =1;

console.log(foo);
var foo = 2;

//
var foo3 ;
foo3 = 3;
console.log(foo3);

//create a counter function which has increment and getValue functionality

function countfunction(variable){
    return variable++
}
// const count = countfunction(1);
// console.log(count.getValue());
const counterFunction = ()=>{
    return{
        increment:(val=1)=>{
count+=val;
        },
        getValue:()=>{
            return count;
        }
    }
}
//closure means we can access inside of a function to the outside scope.example , we are accessing getValue and increment outside
//console.dir(counter.getValue) result will ahve the property closure 
const counter = counterFunction();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());

//create a function which stores a secret string inside which is not accessible but is returned only when we call this function 
//this can be achieved using closure 

const privateSecret=()=>{
    const secret='foo'
    return{
        getSecret:()=>{
            return secret
        }
    }
}

const s = privateSecret();
s.getSecret();
//write a function which helps to acheive multiply(a)(b) and returns  multiplication of a and b

function multiply(a,b){
    return a*b;
}

console.log(multiply(1,2));

const multiply =(num1)=>{
    return(num2)=>{
        num1*num2
    }
}

//same can be written like 
const multiply = num1=>num2=> num1*num2;
console.log(multiply(2)(3))
//create a curried function-passing 3 arg as a single arg
const curry = function(fn){
    var arity = fn.length;
   return function f1(...args){
    if(args.length>=arity){
        return fn(...args)
    }
    else{
        return function f2(...moreArgs){
            var newArgs = args.concat(moreArgs);
            return f1(...newArgs);
        }
    }
   }
}
const curriedSum = curry((a,b,c)=>a+b+c);
const get = curry((property,id)=>id[property]);

//write a function which gets an array and an element and returns an array with this element at the end

function append(numbers,value){
    return numbers.push(value);//this modifies as we are making changs in teh original value.
    
}
const numbers = [1,2];
const newNumbers = append(numbers,3);
console.log(newNumbers,numbers);
//instead we can use spread which takes a copy 
const numbersSpread=[1,2];
const append =(arr,el)=>{
    return[...arr,el]//spread operator takes a copy and modifies
}
const newNumbersSpread = append(numbersSpread,5)
console.log(newNumbersSpread)//result is [1,2,3]
console.log(numbersSpread)//result is [1,2];


//write a function which concatinate two arrays 
const array1 = [1,2,3];
const array2 = [4,5,6];
const finalarray = array1.concat(array2);
console.log(finalarray);

const mergeArrays = (arr1,arr2)=>{
    return arr1.concat(arr2);//same can also be written like
    return[...arr1,...arr2]
}
const arr1 =[1];
const arr2=[2,3];
const result = mergeArrays(arr1,arr2);
console.log(result,arr1,arr2);

//write  a function which accepts a list of users and a name to check if such user exists in the array
function isNameExist(name,usersname){
     const user= usersname.find(u=>{
        u.name = name;
    })
    return Boolean(user);
}

//using Index
const isNameExist = (name,usersname)=>{
    const index = usersname.findIndex(u=>{
        u.name = name;
    })
    return index>0; //index -1 means element doesnt exist 
}
const usersname = [
    {id:1,name:'jack',isActive:true},
    {id:2,name:'john',isActive:true},
    {id:3,name:'Mike',isActive:false}
]
console.log(isNameExist('jack',usersname))

//user.some to check if some element of hte array exist
const isExist = (name, usersname)=>usersname.some(u=>u.name =name);

//write a function which removes all duplicates from an array 

//sort the array of numbers 

const sortnumbers = [1,2,3,4,5];
console.log(sortnumbers.sort());

//sort an array of object by author name 
const books =[
    {name:'Harry Potter',author:'Joanne Rowling'},
    {name:'warcross', author:'Marie Lu'},
    {name:'The hunger games', author:'Suzanne Collins'}
]

console.log(books.sort());

//write a function which implements a range 
function range(i,j){
    let arr=[];
    for ( i;i<=j;i++){
        arr.push(i);

    }
    console.log(arr);
}

console.log(range(1,50));

//write  a shuffle function which mixes the element 

//find the number of occurances of minimum value in the list 

const arr =[1,1,2,4,5,5,6,7]
//what will be logged here 

function getItem(){
    console.log(this);
}
getItem();
//what will be logged here 
const item ={
    title :'Ball',
    getItem(){
        console.log(this);
    }
}
item.getItem();

//What will be logged here 
class Item{
    title ='Ball'
    getItem(){
        console.log(this);
    }
}

const itemnew = new Item();
itemnew.getItem();

//what will be logged here 
class ItemSecond{
    title = 'Ball'
    getItem(){
        [1,2,3].map(function(item){
console.log(this);
        })
    }
}
const itemsecond = new ItemSecond();
itemsecond.getItem();

//design a class for Employee which takes id and name in during construction of object and has a salary property

class Employee{
    constructor(){
        let id;
        let name;
        let salary;
    }
}

const employee = new Employee(1,'jack');
employee.setSalary(1000);

//design a class for manager which is employee and can have department property 

// class Manager{
//     let deparment;
// }

//design the same classes as in previous question but by using only javascript prototypes and not class keyword.

//create an ES6 module with the function getName, getSurName and default export getFullName
//create the same with CommonJS module
//what is the differences between ES6 module and commonJS module 

//Implement a debounce function 

//Implement throttle function 

//Highlight All words over 8 chars with yellow. Highlight all of the words in markup over 8 characters long in the paragraph text

//Add a link "Back to source" after a paragraph tag which goes to https:techbrainnetworks.com in teh markup

//split each new sentence on to a separate line in the paragraph text. A sentence can be assumed to a string of text terminated with a period.

//Implement a click on todo which has a high performance.

<ul class="todo-app">
    <li class = "item"> Walk the dogs</li>
    <li class ="item">Pay bills</li>
    <li class = 'item'>Make dinner</li>
    <li class = 'item'> code for one hour</li>
</ul>

//write an example  of fetching data with XMLhttpRequest

//write an example of fetching data using fetch API 

//Write a asynchronous function which executes callback after finishing it is asynchronous task 

//what problem does callback hve?
//Execute the given list of asynchronous function in parallel and return the results as an array to the callback 

const asyncFn1 = callback =>{
    setTimeout(()=>{
        callback(1)
    },3000)
}

const asyncFn2 = callback=>{
    setTimeout(()=>{
        callback(2)
    },2000)
}

const asyncFn3 = callback =>{
    setTimeout(()=>{
        callback(3);
    },1000)
}

asyncParallel([asyncFn1,asyncFn2,asyncFn3],result=>{
    console.log(result);
})

//convert callback to promise 
//create a promise function to be able to use callback function via promise approach 

//Map data in promises
//you have 2 function which return promises.Map data from getUsers and getUserStatuses to get array of users with id, name, isActive

const usersMap =[
    {id:1, name:'Jack'},
    {id:2,name:'john'},
    {id:3, name:'Mike'}
]

const userstatusMap =[
    {id:1, isActive:true},
    {id:2, isActive:true},
    {id:3,isActive:false}
]

const getUsers=()=>{
    return new Promise(resolve=>{
        resolve(users);
    })
}

const getUserStatus = ()=>{
    return new Promise(resolve=>{
        resolve(userstatuses)
    })
}

//Rewrite the above using mapping data in async await 

//Design an utility which takes URL and a value for attempts which will attempt to make a fetch request.
//IF on failure it tries again with increasing delay for more number of times which user has requested.

//Design a shallow comparison function 

//Design a deep comparison function 

//Design a memorization function which adds 10 to provided value and takes it from cache if it was already calculated.

//Design a function which returns a fibonnaci sequence value 

//Write a function which check if a string is palindrome 

//write a function which check if string is an anagram 

//write a function whcih counts vowel in a string 

//write a function to convert a string to title case 

// write a function which can convert the time input given in 12 hours format to 24 hours format 

//Map data to front end format. The main element is location key and we need to map all data to it

const loc =[
    {
        location_key :[32,22,11],
        autoassign:1
    },
    {
        location_key:[41,42],
        autoassign:2
    }
]

const bulkconfig =[
    {
        dataValues:{
            config_key:100
        }
    },
    {
        dataValues:{
            config_key:200
        }
    }
]

//write a function to replace parametres in url 

const initialUrl = '/posts/:postId/comments/:commentId'
const resultUrl = replaceParamsInUrl(initialUrl,[
    {from:'postId',to:1},
    {from:'commentId',to:'3'}
])


//format backend validation message to front end

const backendErrors={
    email:{
        errors:[
            {message:'cannot be blank'}
        ]
    },
    password:{
        errors:[
            {message:'must contain symbol in different case'},
            {message:"must be atleast 8 symbols length"}
            
        ]
    },
    passwordConfirmation:{
        errors:[
            {message:"must match with password"}
        ]
    }
}


//Transform flat list to nested list 

const flatList =[
    {
        id:1,
        name:'lvl 1 item 1',
        parentId:null
    },{
        id:2,
        name:'lvl 1 item 2',
        parentId:null
    },
    {id:3,
        name:'lvl 2 item 3',
        parentId:1
    }
    ,
    {
        id:4,
        name:'lvl 3 item 4',
        parentId:3
    },
    {
        id:5,
        name:'lvl 2 item 5',
        parentId:2
    }
]

