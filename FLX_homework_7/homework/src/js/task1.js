const userName = prompt('Please login with Your username:', '');
if (userName === '' || userName === null) {
  alert('Canceled!');
} else if (userName.length < 4) {
  alert('I don\'t know any users having name length less than 4 symbols');
} else {
  if (userName === 'Admin' || userName === 'User') {

    const pass = prompt('Please enter Your password:', '');
    const time = new Date().getHours() < 20 ? 'day' : 'evening';

    if (userName === 'Admin' && pass === 'RootPass') {
      alert(`Good ${time}, dear ${userName}!`);
    } else if (userName === 'User' && pass === 'UserPass') {
      alert(`Good ${time}, dear ${userName}!`);
    } else if (pass === '' || pass === null) {
      alert('Canceled');
    } else {
      alert('Wrong password');
    }
  } else if (userName === '') {
    alert('Canceled!');
  } else {
    alert('I don’t know you');
  }
}