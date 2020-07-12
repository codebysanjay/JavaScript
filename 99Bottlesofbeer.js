var numberOfBottles = 99;
function beer (){
    while(numberOfBottles>1){
        var bottleword = "bottles";
        console.log(numberOfBottles+" "+bottleword+" of beer on the wall, "+numberOfBottles+" "+bottleword+" of beer");
        numberOfBottles --;
        console.log("Take one down and pass it around, "+numberOfBottles+" of beer on the wall.")
    }if (numberOfBottles===1){
            bottleword = "bottle";
        console.log(numberOfBottles+" "+bottleword+" of beer on the wall, "+numberOfBottles+" "+bottleword+" of beer");
        numberOfBottles ="No more"
        console.log("Take one down and pass it around, "+numberOfBottles+" bottles of beer on the wall.")

        }
    console.log("No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wal")
}