//An isogram is a word that has no repeating letters, consecutive or
//non-consecutive. Implement a function that determines whether a string that
//contains only letters is an isogram. Assume the empty string is an isogram.
//Ignore letter case.


function isIsogram(str){
  let newStr = ""
  for ( i = 0; i < str.length; i ++){
    for (k = 0; k < newStr.length; k++){
      if( newStr[k].toUpperCase()==str[i].toUpperCase()){
        return false
      }
    }
    newStr+= str[i]
  }
  return true
}
