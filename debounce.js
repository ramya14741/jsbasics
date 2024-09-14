/* Write a debounce function that delays the execution 
of a function until after a specified time interval has passed.
A debounce function ensures that a function is not called too frequently. 
It delays the execution of the function until after a certain time has passed 
since the last time it was invoked. 
If the function is called again before that time period elapses, the timer resets.*/
function debounce(func,delay){
let timeoutId;
return function(...args){
    //clear there is previous timeout if there is one 
    if(timeoutId){
        clearTimeout(timeoutId);
    }
    //set a new timeout to execute the function after delay 
    timeoutId = setTimeout(()=>{
func.apply(this,args);
    },delay)
}
}

const logMessage =()=>{
    console.log('delayed execution')
}

// create a debounce version of log message with 1 second delay 
const debounceLogMessage = debounce(logMessage,1000);
debounceLogMessage();
debounceLogMessage();
debounceLogMessage();


/**************************wrong */
function debouncewrong(interval){
    setInterval(()=>{
        console.log('delayed execution')
    },interval+1000)
}

console.log('result',debounce(1000))
