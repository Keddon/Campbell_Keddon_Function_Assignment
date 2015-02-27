/**
 * Created by Keddon Campbell on 2/26/15.
 */

var userChoice = prompt("What do you prefer? \n florida lottery or powerball? \n Type one of the two choices below");
var retryTimes = 1;
var retryCount = retryTimes;
var userInput = userChoice;





while (userInput != ("powerball") || ("florida lottery")){
    if (retryCount <= 10) {
        getPreference(userChoice);
        userInput = userChoice;
        retryTimes = retryCount++;
        console.log(retryCount + " This is hard work");
    }
}

function getPreference(userChoice) {
        userChoice = prompt("Sorry we didn't get that. Try typing \n florida lottery or powerball");
        console.log("retried!");
        userInput = userChoice;
        console.log(userChoice);
        console.log(userInput + " is what I have....");
        return userChoice;
}
console.log(userChoice);
console.log(retryTimes);
