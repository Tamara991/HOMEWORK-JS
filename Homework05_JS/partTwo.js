let numbers = [5, 10, 15, 20];
let theList = document.getElementById("header");


function printNumbers(number, element){
    let sum = 0; 
    element.innerHTML = "";
    element.innerHTML ='<h3>My List od Numbers is:</h3>';
    let theElementInside = document.createElement("ul");
    
    for(i in number){
        let item = document.createElement("li");
        item.innerText = `${number[i]}`;
        theElementInside.appendChild(item);
    }

    element.appendChild(theElementInside);
  



let theSUM = document.createElement("p");
for (a of number) {
    sum +=a;
    theSUM.innerText = `The sum of all numbers from the list is : ${sum}`;

}
element.appendChild(theSUM);
}

printNumbers(numbers, theList);


