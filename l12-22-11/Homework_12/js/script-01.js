'use strict'

var vowels = [65, 69, 73, 79, 85, 89, 97, 101, 105, 111, 117, 121];

document.getElementsByTagName('input')[0].onkeypress = function(e) {

	var chr = getChar(e);

	if (chr == null) return;

	for (var i = 0; i < vowels.length; i++) {
		if (vowels[i] == chr) return false;
	}
}

function getChar(event) {
	if (event.which == null) {
		if (event.keyCode < 32) return null; // special key
		return event.keyCode // IE
	}

	if (event.which != 0 && event.charCode != 0) {
		if (event.which < 32) return null; // special key
		return event.which // other
	}

	return null; // special key
}