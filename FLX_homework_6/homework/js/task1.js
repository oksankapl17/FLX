function showMessage(text) {
  console.log(text); // eslint-disable-line no-console
}

function checkInput(n) {
  return isNaN(n) || n === 0;
}

function calcD(a, b, c) {
  return (b * b) - (4 * a * c);
}

function solve(descr, a, b) {
  let x1;
  let x2;
  if (descr > 0) {
    x1 = ((b * -1) - Math.sqrt(descr)) / (2 * a);
    x2 = ((b * -1) + Math.sqrt(descr)) / (2 * a);
    showMessage(`x\u2081=: ${x1} and x\u2082=${x2}`);
  } else if (descr === 0) {
    x1 = -(b / 2 * a);
    return showMessage(`x=${x1}`);
  } else {
    return showMessage('no solution');
  }
}

const a = parseFloat(prompt('Please enter а:'));
if (checkInput(a)) {
  showMessage('Invalid input data');
} else {
  const b = parseFloat(prompt('Please enter b:'));
  const c = parseFloat(prompt('Please enter c:'));
  if (b && c) {
    const D = calcD(a, b, c);
    solve(D, a, b);
  } else {
    showMessage('Invalid input data');
  }
}
