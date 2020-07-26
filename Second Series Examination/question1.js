//  Initialising variables
var number1, number2, number3, sum, average, product, largest, smallest;

//Inpuing the Numbers 
// parseInt is used to covert the var to integer value or else the result will be concatenation of all the values
number1 = parseInt(window.prompt('Enter Number 1 :'));
number2 = parseInt(window.prompt('Enter Number 2 :'));
number3 = parseInt(window.prompt('Enter Number 3 :'));

// Adding the Numbers
sum = number1 + number2 + number3;

// Finding the average
average = parseInt(sum) / 3;

// Finding Product 
product = number1 * number2 * number3;


// Checking the Largest value
if (number1 > number2 && number1 > number3) {
    largest = number1;
} else if (number2 > number1 && number2 > number3) {
    largest = number2;
} else {
    largest = number3;
}
//Checking the smallest value
if (number1 < number2 && number1 < number3) {
    smallest = number1;
} else if (number2 < number1 && number2 < number3) {
    smallest = number2;
} else {
    smallest = number3;
}

//Returning or Printing Result in Alert box
window.alert('Sum : ' + sum + '\nAverage : ' + average.toFixed(2) + '\nProduct : ' + product + '\nLargest : ' + largest + '\nSmallest : ' + smallest);
