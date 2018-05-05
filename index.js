function breakOut(array,changeValue,stopValue) {
  array.foreach(element => {
    if(stopValue==element) break;
    element=changeValue;
  })
}