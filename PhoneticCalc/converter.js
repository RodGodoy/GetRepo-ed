let arr=[];
const baseUnits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const splitIt = () => {
    let centsSplit = input.split('.');
    if (centsSplit[1].length > 2 || centsSplit[0].length > 17) {
        console.log("wrong format used");
        centsSplit = "";     
    } else if (centsSplit.includes('$')) {
        console.log("wrong format used");
        centsSplit = "";
    } else {  
             cents = centsSplit[1] + "/100 cents";
    }
    let number = centsSplit[0];  
    let dollars = number.split(",");      
    let text = dollars.map(phonicConverter);
    //// log final output
    console.log(text[dollars.length - 1]);        
}
            ///number converter
const phonicConverter = (dollars, index, arr) => {
            let firstUnit;
            let secondUnit;
            let thirdunit;
            let unitWording;
            let text;
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
            switch(arr.length) {
                case 5: text = arr[0] + " trillion, " + arr[1] + " billion, " + arr[2] + " million, " + arr[3] + " thousand, " + arr[4] + " dollars and " + cents;
                     break;
                case 4:
                    text = arr[0] + " billion, " + arr[1] + " million, " + arr[2] + " thousand, " + arr[3] + " dollars and " + cents;  
                    break;
                case 3:
                    text = arr[0] + " million, " + arr[1] + " thousand, " + arr[2] + " dollars and " + cents;
                    break;
                case 2:
                    text = arr[0] + " thousand, " + arr[1] + " dollars and " + cents;
                    break;
                case 1:
                    text = arr[0] + " dollars and " + cents;   
                    break;
             }
            return text;      
}

//////////////////user input here: 
let input = "425,352,455,154.94";
splitIt();
