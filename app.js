var oneButton = document.getElementById("btn-one");
var twoButton = document.getElementById("btn-two");
var threeButton = document.getElementById("btn-three");
var fourButton = document.getElementById("btn-four");
var fiveButton = document.getElementById("btn-five");
var sixButton = document.getElementById("btn-six");
var sevenButton = document.getElementById("btn-seven");
var eightButton = document.getElementById("btn-eight");
var nineButton = document.getElementById("btn-nine");
var zeroButton = document.getElementById("btn-zero");
var decimalButton = document.getElementById("btn-decimal");
var clearButton = document.getElementById("btn-clear");
var clearAllButton = document.getElementById("btn-all-clear");
var deleteButton = document.getElementById("btn-delete");
var displayValElement = document.getElementById("calc-display-val")
var displayVal = '0';
var pendingVal;
var evalStringArray = [];

  
var numButtons = document.getElementsByClassName("btn-number");
var operationButtons = document.getElementsByClassName("btn-operation");

var updateDisplayVal = (clickobj) => {
  var btnText = clickobj.target.innerText;

  if (displayVal === '0')
    displayVal = '';
  displayVal += btnText;
  displayValElement.innerText = displayVal;
};

var performOperation = (clickobj) => {
  var operator = clickobj.target.innerText;

  switch (operator) {
    case '+':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('+');
      break;
    
    case '-':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('-');
      break;
    
    case '*':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('*');
      break;
    
    case '/':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('/');
      break;
    
    case '=':
      evalStringArray.push(displayVal);
      var evaluation = eval(evalStringArray.join(' '));
      displayVal = evaluation + '';
      displayValElement.innerText = displayVal;
      evalStringArray = [];
      break;
    default:
      break;
  };


};


for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", updateDisplayVal, false)
};
for (let i = 0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener("click", performOperation, false)
};


clearButton.addEventListener("click", function () {
  displayVal = '0';
  pendingVal = undefined;
  evalStringArray = [];
  displayValElement.innerHTML = displayVal;
});

deleteButton.addEventListener('click', function () {
  let lengthDisplay = displayVal.length;
  displayVal = displayVal.slice(0, lengthDisplay - 1);
  if (displayVal === '')
    displayVal = '0';
  displayValElement.innerText = displayVal;
});

decimalButton.addEventListener('click', function () {
  if (!displayVal.includes('.'))
    displayVal += '.';
  displayValElement.innerText = displayVal;
});
