let numberArray = [5,7,55,6,35];

function theSum(input){
    let counter = 0;
    let sum = 0;
    let smallestNumber = 5;
      
    while (counter<smallestNumber){
        sum = sum + input[counter];
        counter++;
    }
    return sum;
}

alert(theSum(numberArray))
