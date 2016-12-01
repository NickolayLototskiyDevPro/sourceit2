'use strict'
var rescount = document.getElementById('resultCounter');

function makeCounterString() {
	var str = '';
	function counter() {
		var string = document.forms.form1.elements.string.value.trim();
		str = str + string+', ';
		return rescount.innerHTML = counter.currentCount++ +' '+ str ;
	}
	counter.currentCount = 1;


	return counter;
}

var counterString = makeCounterString();