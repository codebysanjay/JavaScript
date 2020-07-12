var num = prompt("Enter the number : ");
var num1=0;
var num2=1;
function fib (num){
  for (var i=1;i<=num;i++){
    if (i<0)
        {
            alert("Enter a positive number :");
        }
    else if (i===1){
        console.log(num1);
    }
    else{     
            console.log(num2)
            var num3=num1+num2;
            num1=num2;
            num2=num3;
        
      }
}}
fib(num);