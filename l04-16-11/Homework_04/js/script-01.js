'use strict'



function getInput(v) {
	var a = document.forms[0].elements[0].value;
	var b = document.forms[0].elements[1].value;
	var c = document.forms[0].elements[2].value;

	(v) ? comGeom1(a,b,c) : comGeom2(a,b,c);
}

function comGeom1(a,b,c) {
	var p = document.getElementById('stringTaskOne');
	var d = a;
	var e = b;
	var g = c;

	function f(callback) {
		var a = callback(d);
		var b = callback(e);
		var c = callback(g);
		var result = 0;
		if (a != undefined && b != undefined && c != undefined) {
			if (b >= 2) {
				do {
					result = a;
					a = a * b;
				} while (a <= c);

				return p.innerHTML = result;
			}

			return alert("Step should be higher than 1");
		}

		return;
	};

	f(checkNumber);
};

function comGeom2(a,b,c) {
	var p = document.getElementById('stringTaskOne');
	var d = a;
	var e = b;
	var g = c;

	function f(callback) {
		var a = callback(d);
		var b = callback(e);
		var c = callback(g);
		var result = 0;
		if (a != undefined && b != undefined && c != undefined) {
			if (b >= 2) {
				for (var i = 0; i < c; i++) {
					a *= b;
				}

				return p.innerHTML = a;
			}

			return alert("Step should be higher than 1");
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
		} else if ( n <= 0 ) {
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