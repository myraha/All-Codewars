// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot seperating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// Patrick Feeney => P.F

function abbrevName(name){
 var array = name.split(" ");
 var firstLetter = array[0].charAt(0)
 var secondLetter = array[1].charAt(0)
 return firstLetter.toUpperCase() + "." + secondLetter.toUpperCase()
}
