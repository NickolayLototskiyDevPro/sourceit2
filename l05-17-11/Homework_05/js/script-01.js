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
	var messageString = document.getElementById("countAmmo");
	messageString.innerHTML = Leopard_2А7.ammunition;
	var messageString = document.getElementById("countResW");
	// messageString.innerHTML = Leopard_2А7.reservoir/10;
	var styleWidth = Leopard_2А7.reservoir/10 + '%';
	messageString.style.width = styleWidth;

	var com1 = document.getElementById('com1');
	var com2 = document.getElementById('com2');
	var com3 = document.getElementById('com3');
	var com4 = document.getElementById('com4');
	var com5 = document.getElementById('com5');
	var com6 = document.getElementById('com6');
	var com7 = document.getElementById('com7');
	var com8 = document.getElementById('com8');
	var com9 = document.getElementById('com9');

	com1.onclick = getObjectTank;
	com2.onclick = getRev;
	com3.onclick = getEven;
	com4.onclick = getMatrix;
	com5.onclick = getSumOdd;
	com6.onclick = getMaxNum;
	com7.onclick = getSortNum;
	com8.onclick = isPalindrome;
	com9.onclick = getCropStr;
}

//*******************************start task1(Leopard_2А7)******************************

var Leopard_2А7 = {
	name: 'Leopard_2А7',
	country: 'Germany',
	crew: ['driver mechanic', 'commander', 'aimer', 'charger'],
	'dimensions weight': {
		weight: '67.5 t',
		'length gun forward': '10.97 m',
		'hull length': '7.7 m',
		width: '4 m',
		height:	'~ 3 m'
	},
	armament: {
		'main gun': '120-mm smoothbore',
		'machine guns': '1 x 12.7-mm, 1 x 7.62-mm',
		'elevation range': '- 9 to + 20 degrees',
		'traverse range': '360 degrees',
	},
	reservoir: 1000,
	ammunition: 3,
	mobility: {
		engine:	'MTU MB-837 Ka501 diesel',
		'engine power':	'1 500 hp',
		'maximum road speed':	'72 km/h',
		range:	'450 km'
	},
	started: false,
	riding: false,
	charged: false,
	charge: function() {
		if (this.ammunition) {
			if (!this.charged) {
				this.charged = true;
				view.displayFire('<span class="blue">The gun charged!</span>');
			} else {
				view.displayFire('<span class="yellow">The gun already charged!</span>');
			}
		} else {
			view.displayFire('<span class="red">Ammunition ended!</span>');
		}
	},

	fire: function() {
		if (this.ammunition) {
			if (this.charged) {
				this.charged = false;
				this.ammunition--;
				view.displayAmmunition(this.ammunition);
				view.displayFire('<span class="green">Bang!</span>');
			} else {
				view.displayFire('<span class="yellow">First you charge the gun!</span>');
			}
		} else {
			view.displayFire('<span class="red">Ammunition ended!</span>');
		}
	},

	start: function() {
		if (!this.started) {
			this.started = true;
			view.displayDrive('<span class="blue">Started the engine of Leopard_2А7!</span>');
		} else {
			view.displayDrive('<span class="yellow">The engine already started!</span>');	
		}
	},

	stop: function() {
		if (this.started) {
			this.started = false;
			this.riding = false;
			view.displayDrive('<span class="red">The Leopard_2А7 stopped</span>');
		} else {
			view.displayDrive('<span class="yellow">The Leopard_2А7 and so stopped</span>');
		}
	},

	drive: function() {
		if (this.reservoir) {
			if (this.started && !this.riding) { 
				this.riding = true;
				this.reservoir -= 100;
				view.displayDrive('<span class="green">Leopard_2А7 rides!</span>');
				view.displayReservoir(this.reservoir);
			} else if (this.started && this.riding) {
				this.reservoir -= 100;
				view.displayReservoir(this.reservoir);
				view.displayDrive('<span class="yellow">Leopard_2А7 and so rides!</span>');
			} else {
				view.displayDrive('<span class="red">First you start the Leopard_2А7!</span>');
			}
		} else {
			view.displayDrive('<span class="red">Reservoir empty</span>');
		}
		
	}
};

function tankAction(target) {
	var act = target.id;
	if (act == 'start') {
		Leopard_2А7.start();
	} else if (act == 'stop') {
		Leopard_2А7.stop();
	} else {
		Leopard_2А7.drive();
	}	
};

function tankFire(target) {
	var act = target.id;
	if (act == 'charge') {
		Leopard_2А7.charge();
	} else {
		Leopard_2А7.fire();
	}
};

var view = {
	displayDrive: function(msg) {
		var messageString = document.getElementById("tankAction");
		messageString.innerHTML = msg;
	},
	displayFire: function(msg) {
		var messageString = document.getElementById("tankFire");
		messageString.innerHTML = msg;
	},
	displayAmmunition: function(msg) {
		var messageString = document.getElementById("countAmmo");
		messageString.innerHTML = msg;
	},
	displayReservoir: function(msg) {
		var messageString = document.getElementById("countResW");
		var styleWidth = msg/10;
		if (styleWidth <= 33) {
			messageString.style.cssText='background-color: #ed3f10; width: ' + styleWidth + '%';
		} else if (styleWidth <= 66) {
			messageString.style.cssText='background-color: #f0f010; width: ' + styleWidth + '%';
		} else {
			messageString.style.width = styleWidth + '%';
		}
	}
};

var depth = 0;
var delta = '';
var deltastep = '             '; // indented to show the nesting
var showobj_p='';

function showObj(obj,oname){
	if(typeof(obj) == 'object'){
		showobj_p += '\n' + delta + oname + ' {';
		depth++;
		delta = '';
		for(var g = 0; g < depth; g++){
			delta += deltastep;
		}
		for(var i in obj){
			if( obj[i] == '[object Object]' ){
				showObj(obj[i], oname + '.' + i);   // the call itself, if the embedded object
			}
			showobj_p += '\n' + delta + oname + '.' +i;
			showobj_p += ' = ' + obj[i];
		}
		depth--;
		delta= '';
		for(var g = 0; g < depth; g++){
			delta += deltastep;
		}
		showobj_p += '\n' + delta + '}';
	}else{
		console.log('It is not an object!');
	}
};

function getObjectTank() {
	var res = document.getElementById('resultTaskOne');
	showObj(Leopard_2А7, 'Leopard_2А7');

	return res.innerHTML = '<pre> ' + showobj_p + '</pre>';
};


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
		var n = elements0[i].value.replace(',', '.');  // replace the commas on the point
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
		if (arr[i] & 1) {       		// Odd check
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

	for (var i = 0; i < elements.length; i++) {
		var n = elements[i].value.replace(',', '.');
		if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
			arr.push(+n);
		} else {
			elements[i].value = '';
			return res.innerHTML = 'Элементами массива должны быть только числа';
		}
	}

	var maxEl = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (maxEl < arr[i]) {
			maxEl = arr[i];
		}
	}

	return res.innerHTML = maxEl;
};

//*******************************start task7***************************

function getSortNum() {
	var res = document.getElementById('resultTaskSeven');
	var elements = document.forms.form7.elements;
	var arr = [];

	for (var i = 0; i < elements.length; i++) {
		var n = elements[i].value.replace(',', '.');
		if ( !isNaN(parseFloat(n)) && isFinite(n) ) {
			arr.push(+n);
		} else {
			elements[i].value = '';
			return res.innerHTML = 'Элементами массива должны быть только числа';
		}
	}

	for (var j = 0, len = arr.length - 1; j < len; j++) {
		var swapped = false;
		var i = 0;

		while (i < len - j) {
			if (arr[i] < arr[i + 1]) {  // used Bubble Sort
				var c = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = c;
				swapped = true;
			}
			i++;
		}
		if (!swapped) break;
	}

	return res.innerHTML = arr.join(', ');
};

//*******************************start task8***************************

function isPalindrome() {
	var res = document.getElementById('resultTaskEight');
	var string = document.forms.form8.elements.palindrome.value;
	string = string.trim();
	var strLen = string.length;

	for (var i = 0; i < strLen; i++) {
		if (string[i] === string[strLen - 1 - i]) {          //  Compare all the elements from the beginning of the line with all the elements from the end of the line
			continue;
		} else {
			return res.innerHTML = 'Слово <i>"' + string + '"</i> не является палиндромом.';
		}
	}

	return res.innerHTML = 'Слово <i>"' + string + '"</i> является палиндромом.';
};

//*******************************start task9***************************

function getCropStr() {
	var res = document.getElementById('resultTaskNine');
	var string = document.forms.form9.elements.cropString.value;

	string = string.trim();
	var arr = string.split(' ');    // Get an array of elements from a string
	var newString = new Array( arr[0], arr[arr.length-1] );   // create a new array of the first and last element of the array 'arr'

	return res.innerHTML = newString.join(' ');
};