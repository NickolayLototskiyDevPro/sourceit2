'use strict'
function taskOne() {
	var p = document.getElementById('stringTaskOne');
	var lem = 'lorem ipsum';
	var s = '++--//**'
	var i = 0;

	do {
		if ( i & 1) {
				lem = s.charAt(i) + lem;
				p.innerHTML = lem;
				alert(lem);
		} else {
				lem = lem + s.charAt(i);
				p.innerHTML = lem;
				alert(lem);
		}
		i++;
	} while ( i < s.length );

};

function solveFactorialWhile() {
	var p = document.getElementById('stringTaskTwoWhile');
	var n = prompt('Specify the number of factorial.', '');

	function f(n) {
		var result = 1;
    
	    while (n--) result *= n + 1;
	    
	    return p.innerHTML = result;
	};

	if (n === null || n == '' ) { // If it was pressed "Cancel" or sent an empty string
		return alert('You clicked cancel or forgot to enter a numeric value. Try again!');
	} else if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
		n = +n;
		if (  ((1+n)+"").indexOf(".") > 0 ) { // check that the number is an integer
			return alert('Enter an integer!' );
		} else if ( n < 0 ) {
			return alert('Value must be greater than 0!' );
		} else {
			f(n);
		};

	} else {
		return alert('Enter a positive integer!');
	}

};

function solveFactorialFor() {
	var p = document.getElementById('stringTaskTwoFor');
	var n = prompt('Specify the number of factorial.', '');

	function f(n) {
		var result = 1;
    
    	for (var i = 2; i <= n; i++) {
        	result = result * i;
    	}
	    
	    return p.innerHTML = result;
	};

	if (n === null || n == '' ) { // If it was pressed "Cancel" or sent an empty string
		return alert('You clicked cancel or forgot to enter a numeric value. Try again!');
	} else if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
		n = +n;
		if (  ((1+n)+"").indexOf(".") > 0 ) { // check that the number is an integer
			return alert('Enter an integer!' );
		} else if ( n < 0 ) {
			return alert('Value must be greater than 0!' );
		} else {
			f(n);
		};

	} else {
		return alert('Enter a positive integer!');
	}

};

function arithmProgrFor() {
	var p = document.getElementById('stringTaskThreeFor');
	var n = prompt('Specify the number arithmetic progression.', '');

	function f(n) {
		var s = 0;
		for (var i = 1; i <= n; i++){
			s += i;
		}

		return p.innerHTML = s;
	};

	if (n === null || n == '' ) { // If it was pressed "Cancel" or sent an empty string
		return alert('You clicked cancel or forgot to enter a numeric value. Try again!');
	} else if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
		n = +n;
		if (  ((1+n)+"").indexOf(".") > 0 ) { // check that the number is an integer
			return alert('Enter an integer!' );
		} else if ( n < 0 ) {
			return alert('Value must be greater than 0!' );
		} else {
			f(n);
		};

	} else {
		return alert('Enter a positive integer!');
	}

};

function arithmProgrFormula() {
	var p = document.getElementById('stringTaskThreeFormula');
	var n = prompt('Specify the number arithmetic progression.', '');

	function f(n) {
		var result;

		result = n*(n+1) / 2;

		return p.innerHTML = result;

	};

	if (n === null || n == '' ) { // If it was pressed "Cancel" or sent an empty string
		return alert('You clicked cancel or forgot to enter a numeric value. Try again!');
	} else if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
		n = +n;
		if (  ((1+n)+"").indexOf(".") > 0 ) { // check that the number is an integer
			return alert('Enter an integer!' );
		} else if ( n < 0 ) {
			return alert('Value must be greater than 0!' );
		} else {
			f(n);
		};

	} else {
		return alert('Enter a positive integer!');
	}

};

function gitLiter() {
	var p = document.getElementById('stringFour');
	var n = prompt('Enter the number of literatsy.', '');
	var s = 0;
	var t = 3;
	var a = 'a';
	var b = 'b';
	var c = 'c';
	var str = '';

	function f(n) {
		if (n) {
			do {
				s++;
				if (s%t == 1) {
					str = str + a;
				} else if (s%t == 2) {
					str = str + b;
				} else {
					str = str + c;
				}
			} while ( str.length < n );

			return p.innerHTML = str;
		}

		return p.innerHTML = str;
	};

	if (n === null || n == '' ) { // If it was pressed "Cancel" or sent an empty string
		return alert('You clicked cancel or forgot to enter a numeric value. Try again!');
	} else if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
		n = +n;
		if (  ((1+n)+"").indexOf(".") > 0 ) { // check that the number is an integer
			return alert('Enter an integer!' );
		} else if ( n < 0 ) {
			return alert('Value must be greater than 0!' );
		} else {
			f(n);
		};

	} else {
		return alert('Enter a positive integer!');
	}

};
