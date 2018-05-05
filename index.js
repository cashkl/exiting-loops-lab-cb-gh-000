function breakOut(array,changeValue,stopValue) {

  for (var i = 0; i < array.length; i++) {
    if (array[i]===stopValue) {
      break;
    }
    array[i]=changeValue
  }
  return array
}


function keepGoing(array,changeValue,stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i]===stopValue) {
      continue;
    }
    array[i]=changeValue
  }
  return array
}

function findBy(array,findFn) {
var result

array.forEach(element => {
if(element===findFn)result=findFn;
})
   return result
  for (var i = 0; i < array.length; i++) {
    if (array[i]===findFn) {
      return findFn
    }
  }
  return
}
