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

	function f(callback) {
		var t = callback(n);
		if (t != undefined) {
			var strres = t;
			var result = 1;

			while (t--) result *= t + 1;

			return p.innerHTML = strres + '! = ' + result;
		}

		return;
	};

	f(checkNumber);
};


function solveFactorialFor() {
	var p = document.getElementById('stringTaskTwoFor');
	var n = prompt('Specify the number of factorial.', '');

	function f(callback) {
		var t = callback(n);
		if (t != undefined) {
			var strres = t;
			var result = 1;
	    
		    	for (var i = 2; i <= t; i++) {
		        		result = result * i;
		    	}
		    
		    	return p.innerHTML = strres + '! = ' + result;

		}

		return;
	};

	f(checkNumber);
};

function arithmProgrFor() {
	var p = document.getElementById('stringTaskThreeFor');
	var n = prompt('Specify the number arithmetic progression.', '');

	function f(callback) {
		var t = callback(n);
		if (t != undefined) {
			var s = 0;

			for (var i = 1; i <= t; i++){
				s += i;
			}

			return p.innerHTML = s;
		}

		return;
	};

	f(checkNumber);
};

function arithmProgrFormula() {
	var p = document.getElementById('stringTaskThreeFormula');
	var n = prompt('Specify the number arithmetic progression.', '');

	function f(callback) {
		var t = callback(n);
		if (t != undefined) {
			var result;

			result = t*(t+1) / 2;

			return p.innerHTML = result;
		}

		return;
	};

	f(checkNumber);
};

function getLiter() {
	var p = document.getElementById('stringFour');
	var n = prompt('Enter the number of literatsy.', '');
	var s = 0;
	var q = 3;
	var a = 'a';
	var b = 'b';
	var c = 'c';
	var str = '';

	function f(callback) {
		var t = callback(n);
		if (t != undefined) {
			if (t) {
				do {
					s++;
					if (s%q == 1) {
						str = str + a;
					} else if (s%q == 2) {
						str = str + b;
					} else {
						str = str + c;
					}
				} while ( str.length < t );

				return p.innerHTML = str;
			}

			return p.innerHTML = str;
		}

		return;
	};

	f(checkNumber);
};

function getBinary() {
	var p = document.getElementById('stringFive');
	var n = prompt('Specify the number arithmetic progression.', '');

	function f(callback) {
		var t = callback(n);
		if (t != undefined) {
			var strres = t;
			var t = t;
			var str = '';

			if (!t) {
				return p.innerHTML = strres + '<sub>10</sub>' + ' = ' + strres + '<sub>2</sub>';	
			} else if (t == 1) {
				return p.innerHTML = strres + '<sub>10</sub>' + ' = ' + strres + '<sub>2</sub>';
			} else  {
				var b = t; 
				var r;
				do {
					r = b; 
					b = b / 2; 
					if ( r%2 ) {
						str = '1' + str;
						b = ( r - 1) / 2;
					} else {
						str = '0' + str;
					}
				} while ( b > 1 );

				str = '1' + str;
				var l = 32 - str.length;
				for (var i = 0; i < l; i++) {
					str = '0' + str;
				}

				return p.innerHTML = strres + '<sub>10</sub>' + ' = ' + str + '<sub>2</sub>';
			}
		}

		return;
	};

	f(checkNumber);
};

var checkNumber = function(n) {
	if (n === null || n == '' ) { // If it was pressed "Cancel" or sent an empty string
		return alert('You clicked cancel or forgot to enter a numeric value. Try again!');
	} else if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
		n = +n;
		if (  ((1+n)+"").indexOf(".") > 0 ) { // check that the number is an integer
			return alert('Enter an integer!' );
		} else if ( n < 0 ) {
			return alert('Value must be greater than 0!' );
		} else {
			return n;
		};

	} else {
		return alert('Enter a positive integer!');
	}
};

$(document).ready(function($) {
	$('.tabs_menu a').click(function(e) {
		e.stopPropagation();
		e.preventDefault();
		$('.tabs_menu .active').removeClass('active');
		$(this).addClass('active');
		$('.task').hide();
		$('#'+$(this).attr('href')).fadeIn(400);
	});
});