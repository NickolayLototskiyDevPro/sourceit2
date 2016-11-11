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
		} else {
				lem = lem + s.charAt(i);
				p.innerHTML = lem;
		}
		i++;
	} while ( i < s.length );

};



