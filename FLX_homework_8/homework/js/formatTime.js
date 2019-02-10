function formatTime(minutes) {
  const days = Math.floor(minutes / (60 * 24));
  const hours = Math.floor(minutes % (60 * 24) / 60);
  const mins = Math.floor(minutes % 60);

  return days + ' day(s) ' + hours + ' hour(s) ' + mins + ' minute(s)';
}

formatTime(3601);