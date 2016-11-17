'use strict'

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

window.onload = init;

function init() {
	var com1 = document.getElementById("com1");
	var com2 = document.getElementById("com2");
	com1.onclick = calcExp;
	com2.onclick = glueStr;
}

//*********************************start task1******************************

function calcExp() {
	var numbers = document.forms[0].elements;
	var errors = document.getElementsByClassName("errorForm1");
	var res = document.getElementById('stringTaskOne');
	var arr = [];

	for (var i = 0; i < numbers.length-1; i++) {
		var n = numbers[i].value;
		var n = n.replace(',', '.');
		var parse = parseValue(n);

		if (!parse) {
			numbers[i].value = "";
			errors[i].innerHTML = 'Введите число!';
		} else if (parse == 10) {
			numbers[i].value = "";
			errors[i].innerHTML = 'Число должно быть не дробным!';
		} else if (parse == 11) {
			numbers[i].value = "";
			errors[i].innerHTML = 'Число должно быть больше нуля!';
		} else {
			errors[i].innerHTML = 'Число принято';
			arr.push(n);
		}
	}

	(arr.length == 3) ? comGeom(arr) : res.innerHTML = 'empty';
}

	function parseValue(n) {
		if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
			n = +n;
			if (  ((1+n)+"").indexOf(".") > 0 ) { // check that the number is an integer
				return 10;
			} else if ( n <= 0 ) {
				return 11;
			} else {
				return true;
			};
		} else {
			return false;
		}
	};

function comGeom(arg) {
	var errors = document.getElementsByClassName("error");
	var res = document.getElementById('stringTaskOne');
	var arrNum = arg;
	var a = arrNum[0];
	var b = arrNum[1];
	var c = arrNum[2];

	res.innerHTML = 'empty';

	for (var i = 0; i < c; i++) {
		a *= b;
	}

	return res.innerHTML = a;
};

//*******************************end task1***************************

function glueStr() {
	var string = document.forms[1].elements[0];
	var errors = document.querySelector("span.errorForm2");
	var res = document.getElementById('stringTaskTwo');
	var str = string.value;

	console.log(errors);

	res.innerHTML = 'empty';

	if (str.length) {
		errors.innerHTML = 'Строка принята';
		return res.innerHTML = '!' + str + '!';
	} else {
		errors.innerHTML = 'Введите строку';
	}
}