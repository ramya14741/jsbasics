/*Write a function rotateArray(arr, k) that rotates an array arr by k steps to the right.*/
function rotateArray(arr,k){
    let count = 0;
    let result =[];
    const arrLength = arr.length;
    let j =0;
    let a=0;
    for(let i = 0;i<arr.length ;i++){
       
     
       if(count<k){
        let index = arrLength+j;
           result[i]=(arr[index-k]);
           j++;
           count++;
       }
       else{
   result[i]=(arr[a]);
   a++;
       }
      
    }
    console.log(result,'result');
}

console.log(rotateArray([1,2,3,4,5],3));

//optimized code 
function rotateArray(arr, k) {
    const result = [];
    const arrLength = arr.length;

    // Normalize k in case it's larger than the array length
    k = k % arrLength;

    for (let i = 0; i < arrLength; i++) {
        // Calculate the new index for each element
        const newIndex = (i + k) % arrLength;
        result[newIndex] = arr[i];
    }

    return result;
}

console.log(rotateArray([1, 2, 3, 4, 5], 3)); // Output: [3, 4, 5, 1, 2]
