function registration_1() {  //  Handling the click event
	hideMainTitle(); // Hide element with id="selectJob"
	showHideButton(false); // Hide calculator buttons
	var getFullName = enter(); //  Call handler values 'name' and 'surname'

	getFullName ? alert('Welcome ' + getFullName + '!') : alert('You have refused to register');
};

function registration_2() { //  Handling the click event
	hideMainTitle();
	showHideButton(false);
	var getFullName = enter();
	
	if (getFullName) {
		var getGender = setGender(); // confirm - Mister or Miss
		getGender ? alert('Welcome mister ' + getFullName + '!') : alert('Welcome miss ' + getFullName + '!');
	} else {
		alert('You have refused to register');
	}
};

function calculator() { //  Handling the click event
	hideMainTitle(); 
	showHideButton(true); // Show calculator buttons
};

function calc(target) { //  Handling the click event
	var v = target.id; // get id element
	read(v); // call the function with a parameter id element
};

var read = function(sign) { 

	a = prompt('Please enter the first integer:', '');
	b = prompt('Please enter the second integer:', '');

	if ( a === null || b === null || a == '' || b == '' ) { // If it was pressed "Cancel" or sent an empty string
		return alert('You clicked cancel or forgot to enter a numeric value. Try again!');
	} else if ( !isNaN(a) && !isNaN(b)) {
		a = +a;
		b = +b;

		var metod = sign;

		if (metod == 'plus') {
			var result = a + b;
			return alert(a + '+' + b + '=' + result);
		} else if (metod == 'min') {
			var result = a - b;
			return alert(a + '-' + b + '=' + result);
		} else if (metod == 'mul') {
			var result = a * b;
			return alert(a + '*' + b + '=' + result);
		} else{
			var result = a / b;
			return alert(a + '/' + b + '=' + result);
		};
	} else {
		return alert('Enter at numerical values!');
	};
};
 
function solveFactorial() { // Handling the click event
	hideMainTitle();
	showHideButton(false);

	function factorial(n) { // function returns the factorial of a number 'n' using a recursion
		return (n != 1) ? n * factorial(n - 1) : 1;
	};

	var result = 1;
	var n = prompt('Specify the number of factorial. The number must be an integer greater than 1', '');

	if (n === null || n == '' ) { // If it was pressed "Cancel" or sent an empty string
		return alert('You clicked cancel or forgot to enter a numeric value. Try again!');
	} else if ( !isNaN(n) ) {
		n = +n;

		if (  ((1+n)+"").indexOf(".") > 0 ) { // check that the number is an integer
			return alert('Enter an integer!' );
		} else if ( n < 0 ) {
			return alert('Value must be greater than 0!' );
		} else if ( n == 0 ) {
			result;
		} else {
			result =  factorial(n);
		};
	} else {
		return alert('Enter at numerical values!');
	};

	alert(n + '! =' + result);
};

var showHideButton = function(x) {
	var arg = x;
	var showBut = document.getElementById('calculatorBlock');
	if (arg) {
		showBut.classList.remove('display-none');
	} else {
		showBut.classList.add('display-none');
	};
};

var enter = function() {
	var name;
	var lastname;

	(function enterName() {
		name = prompt('Please enter your name:', '');

		if (name == '') { //  If no value is entered, the function calls itself again
			enterName();
		};
	}());

	if (name == null) { // If it was pressed "Cancel" stop function
		return false;
	} else {
		(function enterLastname() {
			lastname = prompt('Please enter your lastname:', '');

			if (lastname == '') { //  If no value is entered, the function calls itself again
				enterLastname();
			};
		}());
	};

	if (lastname == null) { // If it was pressed "Cancel" stop function
		return false;
	} else {
		var fullName = name + ' ' + lastname;
		return fullName;
	};
};

var setGender = function() {
	var gender = confirm("Click \'Ok\' if you are a mister or \'Cancel\' if you are a miss");

	return gender;
};

var hideMainTitle = function() {
	var mainTitle = document.getElementById('selectJob');
	mainTitle.classList.add('display-none');
};