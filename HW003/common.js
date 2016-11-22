

// geo rpogression 
function geoPro() {
	
	var a1 = parseInt(prompt('Write first increment:', 1));
	var d = parseInt(prompt('write step of progression:', 2));
	var n = parseInt(prompt('Write limit of number:', 5));

	function getAr(a1,d,n){
		var arif = a1+d*(n-1);
		var arifS = n*(a1 + arif)/2;	
		return arifS;	
	}
	alert("arif progression of you numbers = " + getAr(a1,d,n));
	
}

// add symbol to string

function pluToString() {
	var str = prompt('write some string','string');
	var symbol = '!';
	if (str.length > 1) {
		result = symbol + '' + str + '' + symbol;
		alert(result);
	} else {
		alert('not not');
	}
}
// calculator 

function getCalkulat() {
	var firsNum = prompt('write first number', 2);
	var	secondNum = prompt ('write second number',5);

	var n1=document.getElementById('num1').value
	var n2=document.getElementById('num2').value
	n1=parseFloat(n1)
	n2=parseFloat(n2)
	var a=document.getElementById('act').value
	var r=0
	if(a==1) r=n1+n2
		if(a==2) r=n1-n2
			if(a==3) r=n1*n2
				if(a==4){
					if(n2==0){
						alert("на 0 делить нельзя")
						document.getElementById("num2").value=""
						document.getElementById("num2").focus()
					}
					else r=n1/n2
				}
			if(a==5) r=n1/100*n2
				if(a==6) r=Math.pow(n1,n2)
					if(a==7) r=Math.pow(n1,0.5)

						document.getElementById("result").value=r
				}

				// not finel - this is test