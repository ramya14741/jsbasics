const number = [3,4];
//number = []//cannot assign a new value , but modify or add 
//End
number.push(5,6);
console.log(number);

//beginning
number.unshift(1,2);
console.log(number);

//middle 
// number.splice(index,deletecount, value);
//to insert in the middle in the 2nd position of array 
number.splice(2,0,'a','b');

//finding elements primitive in an array 


//if value exist it will return index otherwise -1 

const test = [1, 2, 3, 4,1,4];
console.log(test.indexOf('c'));
console.log(test.lastIndexOf(1));
console.log(test.indexOf(1)!==-1)
console.log(test.indexOf(1,2))//the second value describes the array index where the search should begin 
console.log(test.includes(1)); 

//finding elements reference types
const courses = [
   {id:1, name:'a'} ,
   {id:2, name:'b'},
]

console.log(courses.includes({id:1,name:'a'}))//return false as object only store references

const course = courses.find(function(course){
    return course.name == 'a'
})
console.log(course);

console.log(courses.includes({id:1,name:'a'}))//return false as object only store references

const courseindex = courses.findIndex(function(course){
    return course.name == 'a'
})
console.log(course);

//arrow function to find value 
const re = courses.find(c=>{
    return c.name == 'a';
})

console.log(re);


const x = [1,2,3,4,5,6];
//removing an element in the end 

console.log(x.pop());

//to remove an element in the beginning 
console.log(x.shift());

//middle 
x.splice(2,2);
console.log(x);

//emptying an array 

let numbers = [1,2,3,4]
numbers=[];
//emptying an array if had multiple references
let c =[1,2,3,4];
let d=c;
c.length = 0;//solution 1
console.log(c);
console.log(d);

c.splice(0, c.length);//solution 2

//solution 3
while(numbers.length>0){
    numbers.pop(); //not a recommended solution if array is large
}

//concatinating array 

const first = [1,2,3];
const second = [4,5,6];
const combined = first.concat(second);
const slice = first.slice(2);
console.log(slice);


//combining two array using spread in ES6

const combinedSpread = [...first,...second];
//copy
const copy =[...combined]


//iterating an array 

const iterate = [1,2,3];
for(let number of numbers){
    console.log(number);
}

numbers.forEach((number,index)=>console.log(index, number));

//joining an array 
const joined = [1,3,4,5];
console.log(joined);
console.log(joined.join(','))
console.log(joined);

//split 

const message ="This is my first message";
const parts = message.split(' ');
console.log(parts);

//sorting and reversing 
const sorting = [1,4,5,6,3];
console.log(sorting.sort());//ascending
console.log(sorting.reverse());//reverse will come in descending 

const testtwo = [1,2,3,4]
const atLeastOnePositive = testtwo.every(a=>{
    return a>=0;//check for all
})

const atleastsome = testtwo.some(a=>{
    return a>=0;//iterate only for first array and stops. 
})//

//fitering an array 
const filterarray = [1,2,3,4]
const filterarrayres = filterarray.filter(f=>{
return f >=0;
})

//mapping an array 

const items = filteredarrayres.map(n=> '<li>'+n+'</li>')
const html = items.join('');

const itemsmap = filteredarrayres.map(n=>{
    const obj = {value:n};
    return obj;
})

//same can be written like below 

const itemssame = filteredarrayres.map(n=>({value:n}));
//chaining 
filteredarraysres.filter(n=>n>=0).map(n=>({value:n}))
.filter(obj=>obj.value>1).map(obj=>({obj.value}));

//reducing an array 

const n= [1,2,3,-1]
let sum = 0;
for(let number of n){
    sum+=n;
}

console.log(sum);

//reduce, can reduce all teh numbers in array to a single value 

n.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue
},0)
//except

const e = [1,2,3,4];



