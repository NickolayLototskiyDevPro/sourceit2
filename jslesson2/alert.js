function year(){
	var i = +prompt('Year?',0);
	console.log(i);
    if(i === 0){
    console.log('null ',i);
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


//Task 2 -calculator
function addition (key){
	
	alert(key);
}