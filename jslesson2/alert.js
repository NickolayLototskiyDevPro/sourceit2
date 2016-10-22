//Task 2 "Year"
function year(){
	var i = +prompt('Year?',0);
	if(i === 0){
    } else if(i === 2016){
		alert('Right!');
	} else if (i > 2016){
		alert('Wrong!  Too late.');
	} else if (i < 2016){
		alert('Wrong!  Too early.');
	} else {
		alert('Enter this year');
	}
	
};


//Task 2 "calculator"
function addition(){
	var i = +prompt('Enter first number',0);
    if(i===0){
	} else if(isNaN(i)){
		alert('Enter the number');
	}
    var y = +prompt('Enter second number',0);
	if(i===0){
	} else if(isNaN(y)){
		alert('Enter the number');
	}
	else if (i + y){
		alert('Answer ' + (y + i));
	} 
}
function subtraction(){
	var i = +prompt('Enter first number',0);
    if(i===0){
	} else if(isNaN(i)){
		alert('Enter the number');
	}
    var y = +prompt('Enter second number',0);
	if(i===0){
	} else if(isNaN(y)){
		alert('Enter the number');
	}
	else if (i + y){
		alert('Answer ' + (i - y));
	} 
}
function division(){
	var i = +prompt('Enter first number',0);
    if(i===0){
	} else if(isNaN(i)){
		alert('Enter the number');
	}
    var y = +prompt('Enter second number',0);
	if(i===0){
	} else if(isNaN(y)){
		alert('Enter the number');
	}
	else if (y / i){
		alert('Answer ' + (i / y));
	} 
}
function multiplication(){
	var i = +prompt('Enter first number',0);
    if(i===0){
	} else if(isNaN(i)){
		alert('Enter the number');
	}
    var y = +prompt('Enter second number',0);
	if(i===0){
	} else if(isNaN(y)){
		alert('Enter the number');
	}
	else if (i * y){
		alert('Answer ' + (i * y));
	} 
}