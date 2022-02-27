class Stack {
    stackTop;
    array;
    stack_size;

    constructor(stack_size) {
        this.array = [];
        this.stackTop = -1;
        this.stack_size = stack_size;
    }
    push(num) {
        if (this.stackTop == this.stack_size - 1) {
            console.log("upper limit of stack reached, cannot insert");
        }
        else {
            this.stackTop = this.stackTop + 1;
            this.array[this.stackTop] = num;
            console.log(`The element being pushed is ${num}`);
            return this.stackTop;
        }
    } 
    pop() {
        if (this.stackTop == -1)
            console.log("Stack underflow.");
    
        else {
            console.log(`element ${this.array[this.stackTop]} is being popped`);
            this.stackTop = this.stackTop - 1;
    
            console.log("Pop process ends ");
            return this.stackTop;
        }
    } 
    peek() {
        if (this.stackTop == -1) {
            console.log("Stack is empty");
        }
        else {
            console.log("The top element of the Stack is " + this.array[this.stackTop]);
        }
    }  
}