let arrayNumbers = [2, 6, 10 ,15, 20];
function theFinalSum(array) {
    let max = array[0];
    for ( let i = 0; i < array.length; i++){
        if (array[i] >=max) {
            max = array[i];
        }
    }
    console.log(`The maximum number from the array is:${max}`)
     let min = array[0];
     for (let i = 0; i<array.length; i++) {
         if(array[i] <min){
             min = array[i];
         }
     }
     console.log(`The minimum nubmer from the array is:${min}`);
     let sum = max + min;
     return sum;
}
console.log(`The sum od maximum plus minimum number from the array is:  ${theFinalSum(arrayNumbers)}`)

