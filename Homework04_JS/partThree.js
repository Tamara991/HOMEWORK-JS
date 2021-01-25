let firstArray = ['This', 'is', 'some', 'text', 'from', 'first', 'array'];
let secondArray = ['And', 'this', 'is', 'the', 'text', 'from', 'second', 'array'];

function firstPlusSecondArray(input){
    let theFinalAsrray = "";
    for (a of input){
        let result = [`${a}`];
        b = `${result}`
        theFinalAsrray += b + ' ';
    }
    return theFinalAsrray;

}
console.log(firstPlusSecondArray(firstArray));
console.log(firstPlusSecondArray(secondArray));