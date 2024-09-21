class Stack{
    constructor(){
        this.stack = [];
    }

    push(value){
        this.stack.push(value);
    }
    pop(){
        if(this.stack.length===0){
            return 'stack is empty'
        }
        return this.stack.pop();
    }
    peek(){
        return this.stack[this.stack.length-1];
    }
    isEmpty(){
        return this.stack.length=0;
    }
}

let myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.isEmpty());