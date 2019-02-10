function isInteger(int) {
  return (typeof int === 'number' && (int % 1) === 0);
}

isInteger(5.1);