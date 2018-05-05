function breakOut(array,changeValue,stopValue) {
  
  for (var i = 0; i < array.length; i++) {
    if (array[i]===stopValue) {
      break;
    }
    element=changeValue
  }
}


function keepGoing(array,changeValue,stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i]===stopValue) {
      break;
    }
    element=changeValue
  }
}

function findBy(array,findFn) {
  for (var i = 0; i < array.length; i++) {
    if (array[i]===findFn) {
      return array[i]
    }
  }
  return null
}
