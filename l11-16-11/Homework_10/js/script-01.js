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

//*******************************start task1***************************//

function isPalindrome() {
	var res = document.getElementById('resultTaskOne');
	var string = document.forms.form1.elements.palindrome.value;
	var str = string.replace(/\s/g, "");
	var strLen = str.length;

	for (var i = 0; i < strLen; i++) {
		if (str[i] === str[strLen - 1 - i]) {          //  Compare all the elements from the beginning of the line with all the elements from the end of the line
			continue;
		} else {
			return res.innerHTML = 'Фраза <i>"' + string + '"</i> не является палиндромом.';
		}
	}

	return res.innerHTML = 'Фраза <i>"' + string + '"</i> является палиндромом.';
};

//*******************************start task2***************************//

function isScrambler() {
	var res = document.getElementById('resultTaskTwo');
	var key = document.getElementById('key').innerHTML.toLowerCase();
	var string = document.forms.form2.elements.scrambler.value.toLowerCase();
	var result = '';
	var i = 0;
	var j = 0;
	
	for (i; i < string.length; i++) {
		other: for (j; j < key.length; j++) {

			if (string[i] == key[j]) {
				result += j + ' ';
				break other;
			}
		}
	}

	return res.innerHTML = result;
};

function isPalindrome() {
	var res = document.getElementById('resultTaskTwo');
	var key = document.getElementById('key').innerHTML.toLowerCase();
	var string = document.forms.form2.elements.scrambler.value.trim();
	string = string.split(" ");
	var result = '';
	
	for (var i = 0; i < string.length; i++) {
		result += key.charAt(string[i]);

	}

	return res.innerHTML = result;
};

//*******************************start task3***************************//

function isBissextile() {
	var res = document.getElementById('resultTaskThree');
	var year = document.forms.form3.elements.year.value;
	year = +year;
	if (IsLeapYear(year)) {
		return res.innerHTML = year + ' год - високосный';
	} else {
		return res.innerHTML = year + ' год - не високосный';
	}
};

function IsLeapYear(year) { 
	if(year%4 == 0) { 
		if(year%100 == 0) { 
			if (year%400 == 0) { 
				return true; 
			} else {
				return false; 
			}
		} else {
			return true; 
		}
	}
	return false; 
}


function isDays() {
	var res = document.getElementById('resultTaskFour');
	var day = document.forms.form4.elements.day.value;
	var month = document.forms.form4.elements.month.value;
	var year = document.forms.form4.elements.year.value;
	month = month - 1;

	var now = new Date();
	var today = now.getTime();
	var d = Date.parse(year, month, day);
	var difference = d;/*Math.floor((today - d) / 60 / 60 / 24);*/

	return res.innerHTML = 'С даты рождения прошло ' + difference + ' дней';
}
 // 13506626