const data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'age': 39,
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple',
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'age': 38,
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry',
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'age': 2,
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple',
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'age': 19,
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana',
  },
];

// 1
function findTypes() {
  const types = [];
  for (let i = 0; i < arguments.length; i++) {
    types.push(typeof arguments[i]);
  }
  return types;
}

console.log(findTypes(null, 5, 'hello'));

// 2
function executeforEach(array, iterator) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(iterator(array[i]));
  }
  return result;
}

executeforEach([1, 2, 3], function(el) {
  console.log(el);
});

// 3
function mapArray(array, iterator) {
  return executeforEach(array, iterator);
}

console.log(mapArray([2, 5, 8], function(el) {
  return el + 3;
}));

// 4
function filterArray(array, iterator) {
  const result = [];
  const comparator = executeforEach(array, iterator);
  for (let i = 0; i < comparator.length; i++) {
    if (comparator[i]) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(filterArray([2, 5, 8], function(el) {
  return el > 3;
}));

// 5
function getAmountOfAdultPeople(inputData) {
  return filterArray(inputData, function(el) {
    return el['age'] > 18;
  }).length;
}

console.log(getAmountOfAdultPeople(data));

// 6
function getGreenAdultBananaLovers(inputData) {
  const filteredData = filterArray(inputData, function(el) {
    return (el.age > 18 && el.favoriteFruit === 'banana' && el.eyeColor === 'green');
  });
  return mapArray(filteredData, function(el) {
    return el.name;
  });
}

console.log(getGreenAdultBananaLovers(data));