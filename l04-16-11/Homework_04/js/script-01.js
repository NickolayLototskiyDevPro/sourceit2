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
	var com1 = document.getElementById('com1');
	var com2 = document.getElementById('com2');
	var com3 = document.getElementById('com3');
	var com4 = document.getElementById('com4');

	com1.onclick = calcExp;
	com2.onclick = glueStr;
	com3.onclick = calculator;
	com4.onclick = counter;
}

//*********************************start task1******************************

function calcExp() {
	var numbers = document.forms[0].elements;
	var errors = document.getElementsByClassName('errorForm1');
	var res = document.getElementById('resultTaskOne');
	var arr = [];

	for (var i = 0; i < numbers.length-1; i++) {
		var n = numbers[i].value;
		var n = n.replace(',', '.');
		var parse = parseValue(n);

		if (!parse) {
			numbers[i].value = '';
			errors[i].innerHTML = 'Введите число!';
		} else if (parse == 10) {
			numbers[i].value = '';
			errors[i].innerHTML = 'Число должно быть не дробным!';
		} else if (parse == 11) {
			numbers[i].value = '';
			errors[i].innerHTML = 'Число должно быть больше нуля!';
		} else {
			arr.push(+n);
			errors[i].innerHTML = 'Число принято';
		}
	}
	(arr.length == 3) ? comGeom(arr) : res.innerHTML = 'empty';
}

function parseValue(n) {
	if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
		n = +n;
		if (  ((1+n)+'').indexOf('.') > 0 ) { // check that the number is an integer
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
	var errors = document.getElementsByClassName('error');
	var res = document.getElementById('resultTaskOne');
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

//*******************************start task2***************************

function glueStr() {
	var string = document.forms[1].elements[0];
	var errors = document.querySelector('span.errorForm2');
	var res = document.getElementById('resultTaskTwo');
	var str = string.value;

	res.innerHTML = 'empty';

	if (str.length) {
		errors.innerHTML = 'Строка принята';
		return res.innerHTML = '!' + str + '!';
	} else {
		errors.innerHTML = 'Введите строку';
	}
}

//*******************************start task3***************************

function calculator() {
	var numbers = document.forms[2].elements.number;
	var select = document.getElementById('sign').value; 
	var errors = document.getElementsByClassName('errorForm3');
	var res = document.getElementById('resultTaskThree');
	var arr = [];

	for (var i = 0; i < numbers.length; i++) {
		var n = numbers[i].value.replace(',', '.');
		if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
			arr.push(+n);
			errors[i].innerHTML = 'Число принято';
		} else {
			numbers[i].value = '';
			errors[i].innerHTML = 'Введите число!';
		}
	}
	arr.push(select);
	(arr.length == 3) ? setCalc(arr) : res.innerHTML = 'empty';
}

function setCalc(arg) {
	var errors = document.getElementsByClassName('error');
	var res = document.getElementById('resultTaskThree');
	var arrNum = arg;
	var a = arrNum[0];
	var b = arrNum[1];
	var sign = arrNum[2];
	var result = 0;

	if (sign == 'plus') {
		result = a + b;
	} else if (sign == 'min') {
		result = a - b;
	} else if (sign == 'mul') {
		result = a * b;
	} else{
		result = a / b;
	}

	return res.innerHTML = result;
};

//*******************************start task4***************************
var counterResult = 0;

function counter() {
	var number = document.forms[3].elements[0];
	var errors = document.querySelector('span.errorForm4');
	var res = document.getElementById('resultTaskFour');
	var num = number.value.replace(',', '.');

	if ( !isNaN(parseFloat(num)) && isFinite(num) ) {
		num = +num;
		if (num <= 0) {
			number.value = '';
			res.innerHTML = 'empty';
			return	errors.innerHTML = 'Число должно быть больше нуля!';
		} else {
			errors.innerHTML = 'Число принято';
			counterResult += num;
			return res.innerHTML =  counterResult;
		}
	} else {
		number.value = '';
		res.innerHTML = 'empty';
		return	errors.innerHTML = 'Введите число!';
	}

};