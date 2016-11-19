
// lorem progression
function lorem() {
	var	string = 'lorem';
	var pre = '!!##$$%%**++';
	var i = prompt('write number iteration what you need',0);//what the start of the period
	num = 0;

	do {
		if ( i%2===0) {
			string = pre.charAt(num) + string;//adding to a string of characters
		} else {
			string = string + pre.charAt(num);//adding to a string of characters
		}

		num++;
		i++;
		if(num>=pre.length) {
			pre+=pre;
		}
		alert(string);
	} while ( i < 20 ); // without the risk of including more of the string

};


//factorial while
function factorialWhile(){
	var num = prompt('Write you number',5);// Chiles obtaining for the construction in the factoria
	var res = 1;
	while(num) res *= num--; //conditions for the implementation of the formula
	alert( res );
}
// factorial for
function factorialFor() {
	var p = 1;
	var n = prompt('write you number',0);// Chiles obtaining for the construction in the factoria
	for ( i = 1; i<=n ; i++) //conditions for the implementation of the formula
		p *=i;
	var	result = p;
	alert(result);
}


// arifm rpogression 
function arifmPro() {
	
	var a1 = parseInt(prompt('Write first incremen:', 1));
	var d = parseInt(prompt('write difference of progression:', 2));
	var n = parseInt(prompt('Write last number:', 5));
//not complete 
var arif = a1+d*(n-1);
var arifS = n*(a1 + arifs)/2;
var result = arif;
alert(result);

}
// abc abc 
function abc() {
	var i;
	var n = prompt('Write number iteration what you need',1); //introduction of the number of iterations for
	var result='';
	for (i=0; i<=2; i++) {  //tsykl start the iteration with a limit of up to 2
		for (n=0; n<=2; n++){
			if (n==0) {
				result+='a';// first letter of string
			}else if(n==1){
				result+='b';// second letter of string
			}else if(n==2){
				result+='c';//third letter of string
			}
			alert(result);
		}
	}
};

