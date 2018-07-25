//Given two strings, write a method to decide if one is a permutation of the
//other

function permutation (str1, str2){
  let arr1 = []
  let arr2 = []

  for (i = 0; i < str1.length; i++) {
    arr1.push(str1[i])
  }
  for (k = 0; k < str2.length; k++) {
    arr2.push(str2[k])
  }

  arr1.sort(function(a, b) {
  return a - b;
})

  arr2.sort(function(a, b) {
  return a - b;
  })

  if (arr1 == arr2){
    return true
  }else {
    return false
  }
}
