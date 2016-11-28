// task first TANK
function getTank() {
	var tank = {
		tankN:{
			name:'T-34',
			lenght:5920,
			width:3000
		},
		trunk: {
			diametr:76,
			mark: 'Л-11',
			type: 'threaded'
		},
		tracks:['Tracks left','Tracks right'],
		tower:1,
		engine: {
			type:'В-2-34',
			power:500,
			maxSpeed:54
		}

	}

	var keys = Object.keys(tank);

	alert( keys ); 


}
// obratka true
function getReverse() {

	function strReverse(){
		var stringR = ['one','two','three','four','five','six','seven','eight','nine','ten'];
		var stringResult = [];
		for( var i = stringR.length - 1; i >= 0; --i){
			stringResult.push(stringR[i]);
		}
		return stringResult;
	}
	console.log(strReverse());
}
// taks 2 obratka 
function getRev() {
	var string = ['one','two','three','four','five','six','seven','eight','nine','ten'];
	var lineString = string.reverse();
	alert(lineString);
}
//n - massiv выдать каждый четный елемент начало с 0

function getEl() {

	var someStr = ['one','two','three','four','five','six','seven','eight','nine','ten']; // 0 
	var res = "";
	for (var i = 0; i < someStr.length; i=i+2) {
		res = res +' '+ someStr[i];
		
	}
	alert('even elements of the array:' + res);

}
//Matrix sum diagonal

function getMatrix() {
	var matrixArray = [[1,2,3],[4,5,6],[7,8,9]];
	var matRes = 0;
	var matresP = 0;
	for (var i = 0; i < matrixArray.length;i++) 
		for (var j=0; j < matrixArray.length;j++){
			if(i == j) {
				var matRes = matRes + matrixArray[i][j];
			}  if ((i+j) ==(matrixArray.length-1)) {
				var matresP = matresP + matrixArray[i][j];
			}
		}

		console.log('count main diagonal = '+ matRes);
		console.log('count side diagonal = '+ matresP);

	}
// count numbers

function countNum() {
	var numArray = [1,2,3,4,5];
	var	counArray =0;
	if (numArray.length > 0) {
		for (var i = 0; i  < numArray.length;i++ ) {
			if (numArray[i] % 2 != 0) {
				counArray = counArray + numArray[i]; 
			}
		}
	} else {
		console.log('error');
	}
	console.log(counArray);

}
// proverka

function proverMax() {
	var proverNum = [1,2,3,4,5,6];
	var proverka = proverNum[0];
	for (var i = 0; i  < proverNum.length; i++) {
		if (proverka < proverNum[i+1]) {
			proverka = proverNum[i+1];
		}
	} 
	console.log(proverka);
}
// polindrom 
function getPolindrom() {
	var	word = 'mama';
	var wordPollen = word.length;
	var wordReverse = word.split('').reverse().join('');
	if (wordReverse == word) {
		console.log('this is polindrom');
	}else {
		console.log('no this not polindrom');
	}
}
// stroka delete

function deleteWord() {
	var str = ['one','two','three','four'];

	var strF = str.slice(0,1);
	var strS = str.slice(str.length -1);
	var	result = strF + ' ' + strS;
	console.log(result);

}