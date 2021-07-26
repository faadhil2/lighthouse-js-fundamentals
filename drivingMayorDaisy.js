const carPassing = function (cars, speed) {
  // Your code in here ...
  let newCarObject = {
    time : Date.now(),
    speed : this.speed
  };

  let newArray = cars;
  newArray.push(newCarObject);

  return newArray
}
