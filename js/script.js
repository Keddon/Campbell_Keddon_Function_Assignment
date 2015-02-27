/**
 * Created by Keddon Campbell on 2/26/15.
 */

var userChoice = prompt("What do you prefer? \n florida lottery or powerball? \n Type one of the two choices below");
var retryTimes = 1;
var userInput = userChoice;





while (userInput !== ("powerball") || ("florida lottery")){
    getPreference();
    userInput = userChoice;
    retryTimes = retryTimes ++;
    console.log(retryTimes + " level 2");
}

function getPreference() {
    userChoice = prompt("Sorry we didn't get that. Try typing \n florida lottery or powerball");
    console.log("retried!");
    return userChoice;

}
console.log(userChoice);
console.log(retryTimes);
