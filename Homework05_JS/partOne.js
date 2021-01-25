let firstChagne = document.getElementById("myTitle");
firstChagne.innerText += " and adding some new text here!";

 let secondChange  = document.getElementsByClassName("paragraph")[0];
 secondChange.innerText = "";
 secondChange.innerText = " this text is replacing the other one!";

 let thirdChange = document.getElementsByClassName("anotherDiv")[0];
 let child = thirdChange.firstElementChild
 child.innerText += "And cool also!!!";

 let fourthChange  = document.getElementsByTagName("text")[0];
 fourthChange.innerText += " changing their values!! ";
