//Declaring variables
var work1, work2, work3, rate1, rate2, rate3, grosspay1, grosspay2, grosspay3;

// Getting Input Data
work1 = parseInt(window.prompt('Employee1 the worling time :'));
rate1 = parseInt(window.prompt('Employee1 the Hourly Rate :'));
work2 = parseInt(window.prompt('Employee2 the worling time :'));
rate2 = parseInt(window.prompt('Employee2 the Hourly Rate :'));
work3 = parseInt(window.prompt('Employee3 the worling time :'));
rate3 = parseInt(window.prompt('Employee3 the Hourly Rate :'));

//Calculating GrossPay of Employee1
if (work1 <= 40) {
    grosspay1 = rate1 * work1;
} else {
    grosspay1 = rate1 * (40 + (work1 - 40) * 1.5);
}
//Calculating GrossPay of Employee2
if (work2 <= 40) {
    grosspay2 = rate2 * work2;
} else {
    grosspay2 = rate2 * (40 + (work2 - 40) * 1.5);
}
//Calculating GrossPay of Employee3
if (work3 <= 40) {
    grosspay3 = rate3 * work3;
} else {
    grosspay3 = rate3 * (40 + (work3 - 40) * 1.5);
}

//Displaying Result
document.write('<table border=\"1\" style=\"margin-left: auto;margin-right: auto;\">');
document.write('<caption style=\"margin-bottom:10px;\">GrossPay Table</caption>');
document.write('<tr><th>Employee Name</th><th>Hourly Rate</th><th>Hours Worked</th><th>Gross Pay</th></tr>');
document.write('<tr><td>Employee 1</td><td>' + rate1 + '</td><td>' + work1 + '</td><td>' + grosspay1 + '</td></tr>');
document.write('<tr><td>Employee 2</td><td>' + rate2 + '</td><td>' + work2 + '</td><td>' + grosspay2 + '</td></tr>');
document.write('<tr><td>Employee 3</td><td>' + rate3 + '</td><td>' + work3 + '</td><td>' + grosspay3 + '</td></tr>')
document.write('</table>')