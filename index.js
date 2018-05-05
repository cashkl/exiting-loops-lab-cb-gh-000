function breakOut(array,changeValue,stopValue) {
  array.foreach(element => {
    if(stopValue===element) break;
    element=changeValue;
  })
}


function keepGoing(array,changeValue,stopValue) {
  array.foreach(element => {
    if(stopValue===element) continue;
    element=changeValue;
  })
}

function findBy(array,findFn) {
  array.foreach(element => {
    if(element===findFn) return element
  })
}
