Jeff Bezo's Checkbook Phonetic Converter

Introduction
This application is part of Jeff Bezo's checkbook function of converting numbers (up to the trillions) into their phonetic spelling.

Code Samples
MY CONVERTER:

const phonicConverter = (dollars, index, arr) => { let firstUnit; let secondUnit; let thirdunit; let unitWording; let text;

        if (dollars <= 19) {  //if # is 19 o below
             firstUnit = baseUnits[dollars];
            unitWording = firstUnit;
        } else if (dollars > 19 && dollars <= 99) { //numbers above 20
             firstUnit = tens[Math.floor(dollars / 10)] + " " + baseUnits[dollars % 10];       
            unitWording = firstUnit;
        } else if (dollars >= 100 && dollars.charAt(1) > 1) {   //numbers over 100
             firstUnit = baseUnits[Math.floor(dollars / 100)] + " hundred ";
             secondUnit = tens[dollars.charAt(1)] + " ";
             thirdunit = baseUnits[dollars % 10];               
            unitWording = firstUnit + secondUnit + thirdunit;
        } else if (dollars >= 100 && dollars.charAt(1) == 1) {  //3 digit chuncks with teens
            firstUnit = baseUnits[Math.floor(dollars / 100)] + " hundred ";
            secondUnit = baseUnits[dollars % 100];
            thirdunit = "";              
            unitWording = firstUnit + secondUnit + thirdunit;
        } else if (dollars >= 100 && dollars.charAt(1) == 0) { //if second # is 0
            firstUnit = baseUnits[Math.floor(dollars / 100)] + " hundred ";
             secondUnit = tens[dollars.charAt(1)] + " ";
             thirdunit = baseUnits[dollars % 10];
             unitWording = firstUnit + secondUnit + thirdunit;
        }

        arr[index] = unitWording;
Installation
The converter.js file must be opened with a text editor and the user input must be placed as the value of variable "input" at the bottom of the file before the main function. Output is seen through the dev tools of a the webpage provided.

Input must be entered as shown in the code with no $ sign, and must include commas for numbers bigger than 999. Decimals must be in ".00" for full dollar values.