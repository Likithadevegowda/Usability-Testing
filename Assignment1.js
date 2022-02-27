class Stack {
    stackTop;
    array;
    stack_size;

    constructor(stack_size) {
        this.array = [];
        this.stackTop = -1;
        this.stack_size = stack_size;
    }
}