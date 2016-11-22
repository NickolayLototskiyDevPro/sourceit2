

// geo rpogression 
function geoPro() {
	
	var a1 = parseInt(prompt('Write first increment:', 1));
	var d = parseInt(prompt('write step of progression:', 2));
	var n = parseInt(prompt('Write limit of number:', 5));
	function getGeo() {
		if (isNaN(a1) && isNan(d) && isNaN(n)) {
			alert('write a number!'); 								// check for true number
		} else	{
			for (var g = 1; g < n; g++) {
				a1*= d;
			}
			return a1;
		}
	}
	alert("geo progression of you numbers = " + getGeo());
	
}

// add symbol to string

function pluToString() {
	var str = prompt('write some string','string');
	var symbol = '!';
	if (str.length > 1) {
		result = symbol + '' + str + '' + symbol;
		alert(result);
	} else {
		alert('You have one chance to write right');
	}
}
// calculator 

function calkulator() {	
	var firstNum = document.getElementById('num1').value;
	var secondNum = document.getElementById('num2').value;
	firstNum = parseFloat(firstNum);
	secondNum = parseFloat(secondNum);
	var option=document.getElementById('select').value;
	var result=0;
	if(option==1) {
		result=firstNum+secondNum; // plus operation
	} else	if(option==2) {
		result=firstNum-secondNum; // minus operation
	}	else if(option==3) {
		result=firstNum*secondNum; // multiple operation
	} else if(option==4){
		if(secondNum==0){
			alert("null is not a true number");
			document.getElementById("num2").value = "";
			document.getElementById("num2").focus();
		}
		else result=firstNum/secondNum;
	}
	document.getElementById("result").value=result
}
