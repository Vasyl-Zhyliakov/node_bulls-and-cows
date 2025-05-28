'use strict';

const readline = require('readline');
const generateRandomNumber = require('./modules/generateRandomNumber.js');
const checkIsValidUserInput = require('./modules/checkIsValidUserInput.js');
const getBullsAndCows = require('./modules/getBullsAndCows.js');

const newNumber = generateRandomNumber();

const terminal = readline.createInterface(process.stdin, process.stdout);

// console.log(
//   'I created a number that includes 4 unique digits. Can you guess it?',
// );

function askPlayer() {
  terminal.question('Enter 4 unique digits', (digits) => {
    if (!checkIsValidUserInput(digits)) {
      askPlayer();
    }

    if (digits === newNumber) {
      // console.log('You win. Congratulations!!!');
      terminal.close();
    } else {
      getBullsAndCows(digits, newNumber);
      askPlayer();
    }
  });
}

askPlayer();
