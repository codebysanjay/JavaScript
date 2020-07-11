prompt("What is your name ?")
prompt("What is lover's name ?")

var lovescore=Math.random()*100;
lovescore=Math.floor(lovescore)+1;
if (lovescore>100){
     alert("Your score is "+lovescore+ "%. You Guys are great lovers ❤️ :)")
}else if (lovescore<70||lovescore>20 ){
     alert("Your score is "+lovescore+"% .You Guys love as much as you can.")
}else {
    alert("your score is "+lovescore+"%. You should put more effort in love.")
}