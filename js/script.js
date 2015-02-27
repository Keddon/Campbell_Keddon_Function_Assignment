/**
 * Created by Keddon Campbell on 2/26/15.
 */

var userChoice = prompt("What do you prefer? \n florida lottery or powerball? \n Type one of the two choices below");

while (userChoice === ("") || (!isNaN(userChoice))){
    getPreference();
}
if (userChoice !== ("poweball") || ("florida lottery")){
    getPreference();
}

function getPreference(){
    userChoice = prompt("Sorry we didn't get that. Try typing \n florida lottery of powerball");
    console.log("retry!");
    
}
console.log("here ");