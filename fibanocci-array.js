let arr=[0,1];
function fib(n){
if (n<1){
    console.log("Enter a postive number")
}
else if (n==1){
    console.log(arr[0])
}
else{
    for (i=2;i<n; i++) {
        arr.push(arr[i-2]+arr[i-1]);
    }
    return arr;
}}
var n =prompt("Enter the value ?");
fib(n);