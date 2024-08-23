//function inside object

const circle ={
    radius:1,
    location:{
        x:1,
        y:1
    },
    isVisible :true,
    draw:function(){
        console.log('draw')
    }
}

circle.draw();

//factory function to avoid duplication of object
//example instead of creating two circle object 

function createCircle(radius){
    return{
        radius,
        
        isVisible:true,
        draw(){
            console.log('draw');
        }
    }

}
const circle1 = createCircle(1);
//constructor function 
function Circle(radius){
    this.radius = radius,
    this.draw= function(){
        console.log('draw')
    }

}
const circleConstructor  = new Circle(1)

//dynamic nature, we can always add property after initialization 
const circleex = {
    radius:1
}
circleex.color = 'yellow';//dynamic nature 
circleex.draw = function(){}
//we can also delete the property 
delete circleex.color;

new String()//'',"",
new Boolean() // true , false 
new Number()//1,2,3

//every function is a object 

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}

Circle.name;
Circle.length;
Circle.constructor;

Circle.call({},1)//another way to call a function 
Circle.apply({},[1,2,3]) // pass all the arguments in a array instead of passing explicitly 

const Circle1 = new Function('radius',
    `this.radius = radius;
    this.draw = function(){
    console.log('draw')}`
)

const circleobj = new Circle1(1);
circleobj;


//prmitive types example

let x = 10;
let y = x;
x= 20 
console.log(x);//result is 20
console.log(y);//result is 10 

//reference types

let a= {value:10};//value is not stored in memory. location is stored.
let b = a;
a.value = 20;

console.log(a)//value is 20
console.log(b)//value is 20 because we are referencing 

//primitives are copied by value, objects are copied by reference

//
let number = 10;
function increase(number){
    number++;
}
increase(number);

console.log(number)//value is 10. the scope of number++ is within the function though we increment .



//rewriting the above same function to reference type 

let obj = {value:10};
function increaseob(obj){
obj.value++;
}

increase(obj);
console.log(obj);//result is 11 as the we are reference the location adn updatin g
//enumerating properties of an object 
const ramya = {
    radius:1,
    draw(){
        console.log('draw')
    }
};
for(let c in ramya){
    console.log(c,ramya[c])
}

for(let c of Object.keys(ramya)){//for of can be used only with array and map. We used Object.to read property of object
    console.log(c)
}

for(let entries of Object.entries(ramya)){//return the key value pair 
    console.log(entries)
}

if('radius' in ramya){
    console.log('yes')
}
//cloning an object
const another = {};
for (let key in ramya){//older way of cloning an object
    another[key] = ramya[key]
}

another['radius']=ramya['radius']
console.log(another);
console.log(ramya);

//new way of cloning an object

const anothernew = Object.assign({},ramya);
console.log(anothernew)

//we can also add new properties

const addProp = Object.assign({color:'red'},ramya)
console.log(addProp)

//another way to clone is spread operator

const anotherspread = {...ramya};
console.log(anotherspread);

//string primitive
const g = ' hi this is my mew vpi' //typeof a //result is string 
console.log(g.length);
console.log(g.includes('hi'));
console.log(g.startsWith('this'));
console.log(g.endsWith('i'));
console.log(g.indexOf('my'));
console.log(g.replace('hi','hello'));
console.log(g.trim());
console.log(g.trimLeft());
const example = 'this is my \' first message'; // /' escape notation to include special character
const space = 'this is /n new message'// to come in next line 
console.log(space.split(''));
console.log(example);
//escape notation 
console.log('example for ',' escape notation')

//string object
const s = new String('hi');//type of b , result is object

//to surrend the words in quotes
const message ='this is my \n'+ '\'first\' message'

//object {}
//boolean true or false
//String'',""
//template literals ``

//example using template literal. we dont need \n to add space. instead we can break a new line
const temp = `this is my
example`
console.log(temp);

//we can add dynamic value easily 
//string literal dynamic value 

const name ='ramya';
const messagenew = 'Hi'+ name + 'example';
const spacelit = `Hi, ${name} example`

//date 

console.log(new Date());
console.log(new Date('May 11 2018 09:00'))
console.log(new Date(2018,4,11,9,0));
const now = new Date();
now.setFullYear(2019);
now.toDateString();
now.toTimeString();
now.toISOString();

//factory function example 

function address(city, street, zip){
    return{
        city,
        street,
        zip
    }
}
//constructor function example 
function ConstructorAddress(city, street, zip){
    this.city = city,
    this.street = street,
    this.zip = zip
}