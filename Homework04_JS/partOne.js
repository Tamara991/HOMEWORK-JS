let array= ['Tamara', 'happy','dancing'];
 function theStory(input){
     let name = input[0];
     let mood = input[1];
     let activity = input[2];
     
     let fullArray= 'This is a Story about a person named' + ' ' + name + ' ' + 'and she was very' + ' ' + mood + ' ' + 'about the party for her Birthday!' + 'She was' + ' ' + activity + ' ' + 'all night!!'

     return fullArray;


 }
 console.log(theStory(array));