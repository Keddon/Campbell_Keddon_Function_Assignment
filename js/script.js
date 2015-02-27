/**
 * Created by Keddon Campbell on 2/26/15.
 */

var userChoice = prompt("What do you prefer? \n florida lottery or powerball? \n Type one of the two choices below"); //takes the user's information on what lottery they want
var retryTimes = 1; //a counter to stop a infinite loop
var retryCount = retryTimes; //
var userInput = userChoice; //
var lotteryNum = [0]; //an array to store all the lottery numbers
var validation = false; //to validate if the information given by user is correct





while ((validation == false) && (retryCount <= 10)) {  //while user info and retry count is false and low respectively, run the code...
    if (userInput === ("powerball") || ("florida lottery")) {  // if the information is valid set the validator to true
        validation = true; //sets the variable to true
    }else lazzyBox(); // otherwise run the function to get more information

}



function lazzyBox(){ //this function takes the asks for the user to reenter information
    userInput = getPreference(userChoice); //runs the getPreference function
    userInput = userChoice; //sets userInput based on variable user choice
    retryTimes = retryCount++; //increment the retry count
}


function getPreference(userChoice) {  //this function prompts the user for more information
        userChoice = prompt("Sorry we didn't get that. Try typing \n florida lottery or powerball"); //stores the input in variable userChoice
        return userChoice; //returns the value of userChoice
}
// console.log(userChoice);
// console.log(retryTimes);
// console.log(userInput);



if (userInput === "powerball"){ //validates user input
    lotteryNum[0] = winningNumbers(1, 59);
    lotteryNum[1] = winningNumbers(1, 59);
    lotteryNum[2] = winningNumbers(1, 59);
    lotteryNum[3] = winningNumbers(1, 59);
    lotteryNum[4] = winningNumbers(1, 59);
    lotteryNum[5] = winningNumbers(1, 35);
console.log("The lottery is "+ lotteryNum[0] +","+ lotteryNum[1] +","+ lotteryNum[2] +","+ lotteryNum[3] +","+ lotteryNum[4] +" and the powerball is "+ lotteryNum[5]);
}
if (userInput === "florida lottery"){ //validates user input
    lotteryNum[0] = winningNumbers(1, 53);
    lotteryNum[1] = winningNumbers(1, 53);
    lotteryNum[2] = winningNumbers(1, 53);
    lotteryNum[3] = winningNumbers(1, 53);
    lotteryNum[4] = winningNumbers(1, 53);
    lotteryNum[5] = winningNumbers(1, 53);
    console.log("The lottery is "+ lotteryNum[0] +","+ lotteryNum[1] +","+ lotteryNum[2] +","+ lotteryNum[3] +","+ lotteryNum[4] +" and "+ lotteryNum[5]);

}

function winningNumbers(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}






















