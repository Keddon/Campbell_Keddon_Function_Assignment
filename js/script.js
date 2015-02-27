/**
 * Created by Keddon Campbell on 2/26/15.
 */

var userChoice = prompt("What do you prefer? \n florida lottery or powerball? \n Type one of the two choices below");
var retryTimes = 1;


while (userChoice === ("") || (!isNaN(userChoice))){
    getPreference();
    retryTimes = retryTimes ++;
    console.log(retryTimes);
}
while (userChoice !== ("powerball") || ("florida lottery")){
    getPreference();
    retryTimes = retryTimes ++;
    console.log(retryTimes)
}

function getPreference(retryTimes){
    while (retryTimes <= 20) {
        userChoice = prompt("Sorry we didn't get that. Try typing \n florida lottery of powerball");
        console.log("retry!");
    }
}
console.log(userChoice);
console.log(retryTimes);
