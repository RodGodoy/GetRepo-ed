

//////Index/////
////////////////
// Constans
// Main Function
// Matching Functions
// User Input
////////////////





const baseUnits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];




///////////////////////////////////////////////////////main function

const start = () => {



    //find the the cents
    let bfrDecimal = numbers.split('.');
    let cents = 0;

    if (bfrDecimal[1] == 00) {
        cents = " dollars";
    } else {
        cents = " dollars and " + bfrDecimal[1] + "/100 cents";
    }


    //find the dollars
    let dollars = bfrDecimal[0];


    chunks = dollars.split(',');

    let charOne;
    let charTwo;
    let charThree;
    let finalOutput;
    let firstPoint;
    let secondPoint;
    let thirdPoint;

////////////////////////////////////////////////////////////////if a 6 digit number
    if (chunks.length === 2) {

       ////////////////////////////first three digits of 6 digit number

       let partOne = chunks[0];

       let firstChunk;
           firstPoint = partOne.charAt(0);
           secondPoint = partOne.charAt(1);
             thirdPoint = partOne.charAt(2);

            //if 3 digits
            if (partOne.length === 3) {


                charOne = findHundreds(firstPoint);
                charTwo = findTens(secondPoint);
                     if (charTwo == 1) {
                            charTwo = findTeens(secondPoint, thirdPoint);
                            charThree = "";
                     } else {
                        charThree = findLastDigit(thirdPoint);
                    }

               firstChunk = charOne + " " + charTwo + " " + charThree + " thousand, ";

                //if 2 digits
                } else if (partOne.length === 2) {

                    charOne = findTens(firstPoint);
                      if (charOne == 1) {
                          charOne = findTeens(firstPoint, secondPoint);
                          charTwo = "";
                     } else {
                      charTwo = findLastDigit(secondPoint);
                     }

                 firstChunk = charOne + " " + charTwo + " thousand, ";

                //if 1 digit
                } else if (partOne.length === 1) {

                    charOne = findLastDigit(firstPoint);

                 firstChunk = charOne + " thousand, ";

                }

        ///////////////////////////////////last 3 digits of six digit number

        let partTwo = chunks[1];
        let secondChunk;
            firstPoint = partTwo.charAt(0);
            secondPoint = partTwo.charAt(1);
            thirdPoint = partTwo.charAt(2);


            /////////////////////////////////////////////// if 3 digits long

            if (partTwo.length === 3) {

                  charOne = findHundreds(firstPoint);
                  charTwo = findTens(secondPoint);
                       if (charTwo == 1) {
                              charTwo = findTeens(secondPoint, thirdPoint);
                              charThree = "";
                       } else {
                          charThree = findLastDigit(thirdPoint);
                      }
                 secondChunk = charOne + " " + charTwo + " " + charThree;

                   ////////////////////////////////// if 2 digits long

                  } else if (partTwo.length === 2) {

                      charOne = findTens(firstPoint);
                        if (charOne == 1) {
                            charOne = findTeens(firstPoint, secondPoint);
                            charTwo = "";
                       } else {
                        charTwo = " and " + findLastDigit(secondPoint);
                       }
                   secondChunk = charOne + " " + charTwo;

                  /////////////////////////////////// if 1 digit long

                  } else if (partTwo.length === 1) {

                      charOne = findLastDigit(firstPoint);
                   secondChunk = charOne;
                  }

    finalOutput = firstChunk + secondChunk;

///////////////////////////////////////////////////////////// if a 3 digit number

    } else if (chunks.length === 1) {

        let partTwo = chunks[0];
        let shortChunk;
            firstPoint = partTwo.charAt(0);
            secondPoint = partTwo.charAt(1);
            thirdPoint = partTwo.charAt(2);

            /////////////////////////////////// if 3 digits long
            if (partTwo.length === 3) {


                  charOne = findHundreds(firstPoint) + " and ";
                  charTwo = findTens(secondPoint);
                       if (charTwo == 1) {
                              charTwo = findTeens(secondPoint, thirdPoint);
                              charThree = "";
                       } else {
                          charThree = findLastDigit(thirdPoint);
                      }
                 shortChunk = charOne + " " + charTwo + " " + charThree;

                     /////////////////////////// if 2 digits long

                  } else if (partTwo.length === 2) {

                      charOne = findTens(firstPoint);
                        if (charOne == 1) {
                            charOne = findTeens(firstPoint, secondPoint);
                            charTwo = "";
                       } else {
                        charTwo = findLastDigit(secondPoint);
                       }
                   shortChunk = charOne + " " + charTwo;

                    /////////////////////////////// if 1 digitlong

                  } else if (partTwo.length === 1) {

                      charOne = findLastDigit(firstPoint);
                   shortChunk = charOne;
                  }
        finalOutput = shortChunk;
    }

    finalOutput = (finalOutput + cents);


        if (finalOutput.includes("undefined")) {
            console.log("wrong format used, please use format xxx,xxx.xx");

        } else if (cents.length > 25) {
            console.log("wrong format used, please use format xxx,xxx.xx");
        } else {
            console.log(finalOutput);
        }


}

//////////////////////////////////////////////////////////////// functions

const findHundreds = (x) => {
         // first character


         if (x == 1) {
            x = baseUnits[1] + " hundred";
        } else if (x == 2) {
            x = baseUnits[2] + " hundred";
        } else if (x == 3) {
            x = baseUnits[3] + " hundred";
        } else if (x == 4) {
            x = baseUnits[4] + " hundred";
        } else if (x == 5) {
            x = baseUnits[5] + " hundred";
        } else if (x == 6) {
            x = baseUnits[6] + " hundred";
        } else if (x == 7) {
            x = baseUnits[7] + " hundred";
        } else if (x === 8) {
            x = baseUnits[8] + " hundred";
        } else if (x == 9) {
            x = baseUnits[9] + " hundred";
        } else if (x == 0) {
            x = baseUnits[0];
        }
        return x;
}

const findTens = (x) => {
        // second
         if (x == 2) {
            x = tens[2];
        } else if (x == 3) {
            x = tens[3];
        } else if (x == 4) {
            x = tens[4];
        } else if (x == 5) {
            x = tens[5];
        } else if (x == 6) {
            x = tens[6];
        } else if (x == 7) {
            x = tens[7];
        } else if (x == 8) {
            x = tens[8];
        } else if (x == 9) {
            x = tens[9];
        } else if (x == 0) {
            x = "";
        }
        return x;
}

const findLastDigit = (x) => {

//third
        if (x == 2) {
            x = baseUnits[2];
        } else if (x == 3) {
            x = baseUnits[3];
        } else if (x == 4) {
            x = baseUnits[4];
        } else if (x == 5) {
            x = baseUnits[5];
        } else if (x == 6) {
            x = baseUnits[6];
        } else if (x == 7) {
            x = baseUnits[7];
        } else if (x == 8) {
            x = baseUnits[8];
        } else if (x == 9) {
            x = baseUnits[9];
        } else if (x == 0) {
            x = "";
        } else if (x == 1) {
            x = baseUnits[1];
        }
        return x;
}

const findTeens = (x, y) => {

        if (x == 1 && y == 0) {
            x = baseUnits[10];
        } else if (x == 1 && y == 1) {
            x = baseUnits[11];
        } else if (x == 1 && y == 2) {
            x = baseUnits[12];
        } else if (x == 1 && y == 3) {
            x = baseUnits[13];
        } else if (x == 1 && y == 4) {
            x = baseUnits[14];
        } else if (x == 1 && y == 5) {
            x = baseUnits[15];
        } else if (x == 1 && y == 6) {
            x = baseUnits[16];
        } else if (x == 1 && y == 7) {
            x = baseUnits[17];
        } else if (x == 1 && y == 8) {
            x = baseUnits[18];
        } else if (x == 1 && y == 9) {
            x = baseUnits[19];
        }
        return x;
}







/// replace "numbers" with ammount to convert, result will be logged.
/// ex. "147,256.89"

let numbers = "147,256.89";
start();
