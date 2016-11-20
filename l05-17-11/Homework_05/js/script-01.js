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
	var com2 = document.getElementById('com2');
	var com3 = document.getElementById('com3');
	var com4 = document.getElementById('com4');
	var com5 = document.getElementById('com5');
	var com6 = document.getElementById('com6');


	com2.onclick = getRev;
	com3.onclick = getEven;
	com4.onclick = getMatrix;
	com5.onclick = getSumOdd;
	com6.onclick = getMaxNum;
}

//*******************************start task1******************************






//*******************************start task2***************************

function getRev() {
	var res = document.getElementById('resultTaskTwo');
	var elements = document.forms.form2.elements;
	var arr = [];
	var newArr = [];

	for (var i = 0; i < elements.length; i++) {
		var n = elements[i].value;
		arr.push(n);
	}

	var z = arr.length - 1;
	
	for ( z; z >= 0; z--) {
	    if (z in arr) newArr.push(arr[z]);                                                                     
	}
	console.log(newArr);

	return res.innerHTML = '[' + newArr + ']';
};

//*******************************start task3***************************

function getEven() {
	var res = document.getElementById('resultTaskThree');
	var elements = document.forms.form3.elements;
	var arr = [];
	var newArr = [];

	for (var i = 0; i < elements.length; i++) {
		var n = elements[i].value;
		arr.push(n);
	}

	for ( var z = 0; z < arr.length; z += 2) {
	    if (z in arr) newArr.push(arr[z]);                                                                     
	}
	console.log(newArr);

	return res.innerHTML = '[' + newArr + ']';
};

//*******************************start task4***************************

function getMatrix() {
	var res = document.getElementById('resultTaskFour');
	var elements0 = document.forms.form4_0.elements;
	var elements1 = document.forms.form4_1.elements;
	var elements2 = document.forms.form4_2.elements;
	var arr0 = [];
	var arr1 = [];
	var arr2 = [];
	var arr = [];
	var newArr = [];

	for (var i = 0; i < elements0.length; i++) {
		var n = elements0[i].value.replace(',', '.');
		if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
			arr0.push(+n);
		} else {
			elements0[i].value = '';
			return res.innerHTML = 'Элементами матрицы должны быть только числа';
		}
	}
	arr.push(arr0);

	for (var i = 0; i < elements1.length; i++) {
		var n = elements1[i].value.replace(',', '.');
		if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
			arr1.push(+n);
		} else {
			elements1[i].value = '';
			return res.innerHTML = 'Элементами матрицы должны быть только числа';
		}
	}
	arr.push(arr1);

	for (var i = 0; i < elements2.length; i++) {
		var n = elements2[i].value.replace(',', '.');
		if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
			arr2.push(+n);
		} else {
			elements2[i].value = '';
			return res.innerHTML = 'Элементами матрицы должны быть только числа';
		}
	}
	arr.push(arr2);

	var sum = 0;
	var sumSrting ='';

	for (var i = 0; i < arr.length; i++) {
	    	for (var j = 0; j < arr.length; j++) {
			if(i == j){
				sum += arr[i][j];
				newArr.push(arr[i][j]);
			}
		}
	}
	var text = newArr.join(' + ');

	return res.innerHTML = text + ' = ' +sum;
};


//*******************************start task5******************************

function getSumOdd() {
	var res = document.getElementById('resultTaskFive');
	var elements = document.forms.form5.elements;
	var arr = [];
	var newArr = [];
	var sum = 0;

	for (var i = 0; i < elements.length; i++) {
		var n = elements[i].value.replace(',', '.');
		if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
			arr.push(+n);
		} else {
			elements[i].value = '';
			return res.innerHTML = 'Элементами массива должны быть только числа';
		}
	}

	for ( var i = 0; i < arr.length; i++) {
		if (arr[i] & 1) {
			newArr.push(arr[i]);
		}
	}

	for ( var i = 0; i < newArr.length; i++) {
		if (i in newArr) sum += newArr[i];
	}

	var text = newArr.join(' + ');

	return res.innerHTML = text + ' = ' +sum;
};

//*******************************start task6***************************

function getMaxNum() {
	var res = document.getElementById('resultTaskSix');
	var elements = document.forms.form6.elements;
	var arr = [];
	var maxEl;

	for (var i = 0; i < elements.length; i++) {
		var n = elements[i].value.replace(',', '.');
		if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
			arr.push(+n);
		} else {
			elements[i].value = '';
			return res.innerHTML = 'Элементами массива должны быть только числа';
		}
	}

	console.log(arr);

	/*for ( var i = 0; i < arr.length; i++) {
		if (arr[i] & 1) {
			newArr.push(arr[i]);
		}
	}

	for ( var i = 0; i < newArr.length; i++) {
		if (i in newArr) sum += newArr[i];
	}

	var text = newArr.join(' + ');

	return res.innerHTML = text + ' = ' +sum;*/
};

//*******************************start task7***************************



//*******************************start task8***************************



//*******************************start task9***************************
