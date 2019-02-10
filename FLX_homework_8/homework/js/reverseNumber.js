function reverseNumber(number) {
  const reversedNumber = number.toString().split('').reverse().join('');
  return parseInt(reversedNumber) * Math.sign(number);
}

reverseNumber(-456);
reverseNumber(10000);