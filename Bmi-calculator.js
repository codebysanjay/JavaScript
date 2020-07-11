function bmiCalculate(height,weight){
    height = height/100
    var value=weight/((height)^2)
    return value
}
function getBmi(){
    var height=prompt("Enter your height iin Centimeters")
    var weight=prompt("Enter your weight in Kilograms")
    var bmi = bmiCalculate(height,weight);
    bmi=bmi.toFixed(2);
    alert("Your BMI is : "+bmi);
}
getBmi();