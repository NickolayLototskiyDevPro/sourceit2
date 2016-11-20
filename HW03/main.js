function pageSelect(selectedPageId) {
    var i;
    var blocks = document.getElementsByClassName('main-block');
    for (i = 0; i < blocks.length; i++) {
        blocks[i].style.display = 'none';
    }
    document.getElementById(selectedPageId).style.display = 'block';
}

function isValidInteger(tagId){
    var checkingValue = document.getElementById(tagId).value;
    if (!isNaN(checkingValue)) {
        if (parseInt(checkingValue) == parseFloat(checkingValue)) {
            document.getElementById(tagId).style.backgroundColor = 'white';
            return parseInt(checkingValue);
        }
    }
    document.getElementById(tagId).style.backgroundColor = 'red';
    return false;
}

function progression(){
    var start = isValidInteger('progression-start');
    var step = isValidInteger('progression-step');
    var maximum = isValidInteger('progression-end-value');
    var resultString = '';
    
    if (start && step && maximum && 
        Math.abs (start) > 0 && Math.abs (step) > 0 && Math.abs (maximum) > 0){
            if (Math.sign(start) == Math.sign(maximum) ||  Math.sign(step) == -1){
                resultString = start;
                var n = start;
                while (Math.abs (n * step) <= Math.abs (maximum)){
                    n *= step;
                    resultString += ', ' + n;
                }
            } else {
                alert ('No result!');
            }
    } else {
        alert ('Input values seems wrong!');
    }
    document.getElementById('a-result-view').innerHTML = resultString;
}

function appendExclamation(text) {
    return '!' + text + '!';
}

function exclamation() {
    var text = document.getElementById('exclamation-value').value;
    document.getElementById('exclamation-result-view').innerHTML = appendExclamation(text);
}

function calculate(value1, value2, method){
    var resultString = '';

    if (!isNaN(value1) && !isNaN(value2)){
		switch (method){
			case '+':{
				resultString = value1 + value2;
				break;
			}
			case '-':{
				resultString = value1 - value2;
				break;
			}
			case '*':{
				resultString = value1 * value2;
				break;
			}
			case '/':{
				resultString = value1 / value2;
				break;
			}
			default:{
				resultString = 'Enter one of the following operators: +, -, *, /';
			}
		}
	} else {
		resultString = 'Enter valid integer data!';
	}
	return resultString;
}

function computation() {
    var value1 = isValidInteger('computation-value1');
    var value2 = isValidInteger('computation-value2');
    var method = document.getElementById('computation-method').value;
    
    document.getElementById('computation-result-view').innerHTML = calculate(value1, value2, method);
}

function increment(){
    var value = isValidInteger('increment-value');

    if (!isNaN(value) && value !== false){
        alert(++value);
    }
}