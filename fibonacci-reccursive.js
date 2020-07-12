var num = prompt("Enter the number : ");
function fib(num){
    if(num<=1){
        return num;
    }
    return fib(num-1)+fib(num-2);
}
fib(num);