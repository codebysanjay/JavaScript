var guest = ["Sanjay","Vaishnav","Salman","Irshad","Adwaid","Kiran","Aravind","Hari","Sreejith"];
var name = prompt("What is your good name?");
if (guest.includes(name)==true){
    alert("Welcome to the party "+ name);
}else{
    alert("Sorry may be next time "+name);
}