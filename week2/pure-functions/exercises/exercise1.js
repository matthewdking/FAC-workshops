var addOne = function (arg) {
  return arg + 1;

};

var timesTwo = function (arg) {
  return arg * 2;
};

var incrementArray = function (array) {
  var arrayNew = array.map(function(x){
    return x + 1
  })
  return arrayNew
}

// var incrementArray = function (array) {
//   var arrayNew = []
//   array.forEach(function(x, i) {
//     arrayNew[i] =  x + 1;
//   })
//   return arrayNew
// }

var addNumberArray = function (array, number) {
  var addNumberArrayNew = []
  array.forEach(function(x, i) {
    addNumberArrayNew[i] =  x;
  })
  addNumberArrayNew.push(number);
  return addNumberArrayNew;
};

// var addNumberArray = function (array, number) {
//   array.push(number);
//   return array;
// };

var incrementObject = function (object) {
  var newObj = Object.assign({}, object);
  Object.keys(newObj).forEach(function(x) {
    newObj[x] = newObj[x] + 1
  });
  return newObj;
};

// var incrementObject = function (object) {
//   Object.keys(object).forEach(function(x) {
//     object[x] = object[x] + 1
//   });
//   return object;
// };

// leave me alone :) :) :) <3 <3 <3
var constantNumber = 5;
var constantArray = [5, 7, 23, 4];
var constantObject = {
  "a": 5,
  "b": 2,
  "c": 8
};
// leave me alone :) :) :) <3 <3 <3
