'use strict'

function createTable () {
	var res = document.getElementById('resultTaskOne');
	var row = document.forms.table.elements.row.value;
	var col = document.forms.table.elements.col.value;

	var table = document.createElement('table');
	var str = '';

	for (var i = 0; i < row; i++) {
		if (i & 1) {
			str+="<tr class='even'>";
		} else {
			str+="<tr class='odd'>";
		}
			for (var j = 0; j < col; j++) {
				if (j & 1) {
					str+="<td class='even'></td>";
				} else {
					str+="<td class='odd'></td>";
				}
			}
		str+="</tr>"
	}

	table.innerHTML = str;
	res.innerHTML = '';
	res.appendChild(table);
}