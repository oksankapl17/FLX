function checkRange(x, min, max) {
  if (x === null || isNaN(x)) {
    return false;
  }
  return x >= min && x <= max;
}

function isFloat(n) {
  return parseFloat(n) % 1 !== 0;
}

function formatNumber(number) {
  const num = Math.floor(parseFloat(number) * 100) / 100;
  const numIsFloat = isFloat(num);
  return numIsFloat ? parseFloat(num) : Math.round(parseFloat(num));
}

function showMessage(message) {
  console.log(message); // eslint-disable-line no-console
}

const moneyAmount = formatNumber(prompt('Please enter amount of money within range from 0 to 9999999.'));
const discount = formatNumber(prompt('Please enter discount within range from 0 to 99'));

if (checkRange(moneyAmount, 0, 9999999) && checkRange(discount, 0, 99)) {
  const lastPrice = formatNumber(moneyAmount - ((moneyAmount * discount) / 100));
  const saved = formatNumber(moneyAmount - lastPrice);
  showMessage(`
  Price without discount: ${moneyAmount}
  Discount: ${discount}%
  Price with discount: ${lastPrice}
  Saved:  ${saved}
  `);
} else {
  showMessage('Invalid data');
}