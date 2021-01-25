let firstNames = ['Tamara', 'Borce', 'Daniela'];
let lastNames = ['Maksimovska', 'Jefremov', 'Nikolovska'];
 function fullName(fName,lName) {
     let result = [];
     let space = "";
     for (let i=0; i<fName.length; i++){
         space = `${i} . ${fName[i]} ${lName[i]}`;

         result.push(space);
     }
     return result;
 }
 
 console.log(fullName(firstNames, lastNames));