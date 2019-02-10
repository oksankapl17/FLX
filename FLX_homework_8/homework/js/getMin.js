function getMin() {
  let smallestNumber = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < smallestNumber) {
      smallestNumber = arguments[i];
    }
  }
  return smallestNumber;
}

getMin(3, 0, -3);