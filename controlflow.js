let role;
switch(role){
    case 'guest':
        console.log('guest user')
        break;//to exit the switch if condition satisified
    case 'moderate':
        console.log('moderate');
        break;
    default:
        console.log('unknown');
}
//for loop

for(let i=0;i<=5;i++){
    if(i%2!==0)
        console.log(i)

}

let i = 0;
while(i<=5){
    if(i%2!==0)
        console.log(i)
    i++;
}

// do while loop are always executed atleast once even if the conditions are executed to false

let x =0;
do
{
if(x%2==0)
    console.log(x)
x++;
}
while(x<=5)

    //infine loop
    // let y = 0;
    // if(y<5){
    //     console.log(y)
    // }

    //for in loop - iterate properties of a object 

    const person ={
        name:'ramya',
        age:'30'
    }

    for(let key in person){
        console.log(key, person[key])
    }

    const colour = ['red','greeb','blue'];
    for (let c in colour){
        console.log(c,colour[c]);
    }

    //start from ecma 6 

    for(let c of colour)
    {
        console.log(c);
    }

    //write a function that takes maximum of two number

    function max(a,b)
    {
       const result =  a>b?a:b;
       console.log(result);
       return result;
    }

    max(3,3);

    //Nan
    function fizzbuzz(input)
    {
        if(typeof input != 'number')
            return NaN;
    }

    //count truthy 

    const array = [0,null, undefined, '',2,3];
    console.log(countTruthy(array));
    function countTruthy(array){
        let count = 0;
        for (let v of array){
            if(v){
                count++;
                return count;
            }
            
        }
    }