function numbers() {
    let result= ""
    for (i = 1; i <=20; i++){
        if (i % 2==0) {
            result += `${i}` + "\n";
        }
        else if (i % 2 !=0){
            result += `${i}` + " ";
        }
    }
    return result;
}
console.log(numbers());