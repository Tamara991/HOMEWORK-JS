 //negde gresham ,mi puka celo vreme :) ako moze help :)
 
 let name = prompt('Enter your name:');
let weight = parseFloat(prompt('Enter your weight:'));

let myDiv = document.getElementById("theDiv");

function weightInChickens (name, weight, element){
    let titleHeader = document.createElement("h2");
    titleHeader.innerText = `Greetings Everyone ${name}`;
    element.appendChild(titleHeader);

    let ChickenWeight = 0.5;
    let paragraph = document.createElement("p");
    let NumberOfChickens = weight / ChickenWeight;
    paragraph.innerText = `You weight exacly as ${NumberOfChickens} chickens!`;
    element.appendChild(paragraph);

}
weightInChickens(name, weight ,myDiv );
 

