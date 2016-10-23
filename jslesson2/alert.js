//Task 2 "Year"
function year(){
	var y = +prompt('Year?',0);
	if(y === 0){
    } else if(y === 2016){
		alert('Right!');
	} else if (y > 2016){
		alert('Wrong!  Too late.');
	} else if (y < 2016){
		alert('Wrong!  Too early.');
	} else {
		alert('Enter the numbers');
	}
	
};


