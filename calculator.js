//_____________________ADDITION_____________

var button = document.getElementById("submitButton");

button.addEventListener("click", function() {
  if  (document.getElementById("DropdownMenu1").value == "Addition"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) + parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;

  }

}, true);

//_______________________SUBTRACT______________________________
button.addEventListener("click", function() {
  if (document.getElementById("DropdownMenu1").value == "Subtraction"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) - parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;

  }
    }, true);

//_____________________MULTIPLICATION_________________

button.addEventListener("click", function() {
  if  (document.getElementById("DropdownMenu1").value == "Multiplication"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) * parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;

  }

}, true);

//_____________________DIVISION_______________________
button.addEventListener("click", function() {
  if  (document.getElementById("DropdownMenu1").value == "Division"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) / parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;

  }

}, true);

//____________________EXPONENTS_______________________

button.addEventListener("click", function() {
  if  (document.getElementById("DropdownMenu1").value == "Exponents"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    num1 = parseInt(num1);

    num2 = parseInt(num2);

    var answer = Math.pow(num1, num2);

    document.getElementById('Answer').innerHTML = answer;

  }

}, true);

//____________________SQUARE_ROOTS__________________________
button.addEventListener("click", function() {
  if  (document.getElementById("DropdownMenu1").value == "X Root"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    num1 = parseInt(num1);

    num2 = parseInt(num2);

    var answer = Math.pow(num1, 1/num2);

    document.getElementById('Answer').innerHTML = answer;

  }

}, true);