/* ARGUMENTS SHOULD NOT BE MUTATED */


/*
Write a function which adds a class "highlight" to the introduction paragraph
*/
var highlightText = function(){
  document.querySelector(".introduction").classList.add('highlight')
}
highlightText(); //uncomment me to test

/*
Write a function which removes the class "highlight" from the introduction
paragraph
*/
var unHighlightText = function(){
  document.querySelector(".introduction").classList.remove('highlight')
}
unHighlightText(); //uncomment me to test


/*
Write a function which, if the introduction paragraph has the class "highlight",
it will be removed; otherwise the class "highlight" is added.
*/
var toggleHighlight = function(){
  document.querySelector(".introduction").classList.toggle('highlight')
}
toggleHighlight(); //uncomment me to test



/*
Write a function which returns all text content of the introduction paragraph
*/
var getText = function(){
  return document.getElementsByClassName('introduction')[0].innerText;

}
getText(); //uncomment me to test


/*
Write a function which returns the number of charachters in the introduction
paragraph
*/
var getNumChars = function(){
  //return document.getElementsByClassName('introduction')[0].innerText.length;
  return getText().length;
}
getNumChars(); //uncomment me to test


/*
Write a function which returns the number of words in the introduction paragraph
*/
var getNumWords = function(){
  return getText().split(' ').length;
}
getNumWords(); //uncomment me to test


/*
Write a function which returns the number of sentences in the introduction
paragraph
*/
var getNumSentences = function(){
  return getText().split('.').length;
}
getNumSentences(); //uncomment me to test

/*
Write a function which takes a string, and returns true if the introduction
paragraph contains that string, and false if it doesn't.
*/
var containsString = function(str){
  return getText().includes(str);
}
containsString(); //uncomment me to test


/*
Write a function which returns the value in the `firstName` text input
*/
var getFirstNameValue = function(){
  return document.querySelector(".test").value
}
getFirstNameValue(); //uncomment me to test


/*
Write a function which takes a string, `inputName`, and returns the value in the input which
has `inputName` as the name attribute
*/
var inputFields = document.querySelectorAll('input')

var getValue = function(inputName){
  //var inputFields = document.querySelectorAll('input')
  var result = ''
  inputFields.forEach(function(inputField) {
    if (inputField.name === inputName) {
      result = inputField.value
    }
  })
  return result;
}
getValue(); //uncomment me to test


/*
Write a function which takes an object,`formState`, and a string, `inputName`,
and returns a copy of the object, but with an `inputName` key on the object
whose value is taken from the input element with that name.
*/
//var formState = {};
var updateStateValue = function (formState, inputName){
  var copyObj = {}
  Object.keys(formState).forEach(function(key){
    copyObj[key] = formState[key]
  })
  //var copyObj = Object.assign({}, formState)
  copyObj[inputName] = getValue(inputName)
  return copyObj
}
//updateStateValue(); //uncomment me to test


/*
Write a function which takes an object,`formState`, and an array of string,
`inputNames`, and returns a copy of the object, which stores the values of each
input with name in `inputNames` array.
*/
var updateStateValues = function(formState, inputNames){
  var copyObj = {}
  Object.keys(formState).forEach(function(key){
    copyObj[key] = formState[key]
  })
  for (var eachName = 0; eachName < inputNames.length; eachName++){
    copyObj[inputNames[eachName]] = getValue(inputNames[eachName])
  }
  return copyObj
}
// updateStateValues(put an argument here ); //uncomment me to test


/*
Write a function which returns an **array** of values of inputs with a given class
*/
var getInputValues = function(className){
  var resultArr = [];
  inputFields.forEach(function(inputField) {
    if (inputField.className === className) {
      console.log(inputField.className);
      resultArr.push(inputField.value)
    }
  })
  return resultArr;
}
getInputValues('test'); //uncomment me to test


/*
Write a function which takes a className, and returns the number of elements in
the DOM with that className. If the function is passed an argument which doesn't
have type `string`, the function should return 0;
*/
var getNumElsOfClass = function(className){
  var inputClass = document.getElementsByClassName(className)
  return inputClass.length
}
getNumElsOfClass(); //uncomment me to test


/*
Write a function, `generateUl`, which takes an array of strings, and returns a
`ul` htmlElement containing `li` elements for each array element. Each `li'
should contain the value of the array element.
*/
var generateUl = function(array){
  var list = document.createElement('ul');
  array.forEach(function(arrayElement){
    var listItem = document.createElement('li')
    listItem.textContent = arrayElement;
    list.appendChild(listItem);
  })
  return list
}
// generateUl(put an argument here ); //uncomment me to test


/*
Write a function, `generateNestedUl`, which takes array whose elements can be
either strings or arrays of strings, and which returns a `ul` htmlElement
containing `li` elements for each array element. Each `li` should contain the
value of the array element if is a string, or a `ul` containing `li` elements
of the array if element is an array.
*/
var generateNestedUl = function(array) {
  var bigList = document.createElement('ul');
  array.forEach(function(arrayElement){
    if (Array.isArray(arrayElement)) {
      bigList.appendChild(generateUl(arrayElement));
    }
    else {
      var listItem = document.createElement('li')
    listItem.textContent = arrayElement;
    bigList.appendChild(listItem);
  }
  })
  return bigList
}
generateNestedUl(['hello', 'bye', ['hello1', 'hello2']]); //uncomment me to test


/*
Using the above functions, write a function which takes a filter function,
which returns a function that takes an array, that generates a `ul` as above
but with filtered elements.
*/
