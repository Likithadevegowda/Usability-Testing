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
}