function pageSelect(selectedPageId) {
    var i;
    var blocks = document.getElementsByClassName('main-block');
    for (i = 0; i < blocks.length; i++) {
        blocks[i].style.display = 'none';
    }
    document.getElementById(selectedPageId).style.display = 'block';
}

function classwork(){
    var rowCount = document.getElementById("row-count").value;
    var i = 0;
    var str = 'lorem ipsulum';
    var resultString = '';
    if (isNaN(rowCount)){
        resultString = 'Enter the number!';
    } else {
        do{
            str = (i % 2 ? '' : '+') + str + (i % 2 ? '+' : '');
            resultString += str + '<br>';
        } while (i++ < rowCount)

        if (i % 2){     // add another one if even
            str = (i % 2 ? '' : '+') + str + (i % 2 ? '+' : '');
            resultString += str + '<br>';
            console.log(str);
        }
    }
    document.getElementById('result-view').innerHTML = resultString;
}

function progression(){
    var d = document.getElementById("a-progression").value;
    var MAX = 16; // number of result digits
    var resultString = '';
    if (isNaN(d)){
        resultString = 'Enter the number!';
    } else {
        var a = 1;  // first element of progression
        resultString = a;   // no need calculate first element
        for(n = 2; n <= MAX; n++){
            resultString += ', ' + (a + (n - 1) * d);
        }
    }
    document.getElementById('a-result-view').innerHTML = resultString;
}

function factorial() {

    var MAX_VALUE = 170;
    var MIN_VALUE = 0;
    var resultString = '';
    var operand = document.getElementById("factorial-value").value;

    if (!isNaN(operand)) {
        if (parseInt(operand) == parseFloat(operand)) {
            operand = parseInt(operand);
            if (operand >= MIN_VALUE && operand <= MAX_VALUE) {
                var result = 1;
                for (var i = 2; i <= operand; i++){
                    result *= i;
                }
                resultString = 'Result is: ' + result;
            } else {
                resultString = 'Take number between ' + MIN_VALUE + ' and ' + MAX_VALUE + '!';
            }
        } else {
            resultString = 'Enter integer number!';
        }
    } else {
        resultString = 'Enter valid data!';
    }
    document.getElementById('f-result-view').innerHTML = resultString;
}

function symbols() {

    var resultString = '';
    var count = document.getElementById("abc-value").value;

    if (!isNaN(count)) {
        if (parseInt(count) == parseFloat(count)) {
            count = parseInt(count);
            var i = 0;
            while(count-- > 0){
                resultString += String.fromCharCode('a'.charCodeAt(0) + i);
                if(++i == 3) {
                    i = 0;
                }
            }
        } else {
            resultString = 'Enter integer number!';
        }
    } else {
        resultString = 'Enter valid data!';
    }
    document.getElementById('abc-result-view').innerHTML = resultString;
}

function decToBin() {

    var resultString = '';
    var decimal = document.getElementById("decimal-value").value;

    if (!isNaN(decimal)) {
        if (parseInt(decimal) == parseFloat(decimal)) {
            decimal = parseInt(decimal);
            while(decimal > 0){
                resultString = ((decimal % 2)?('1'):('0')).concat(resultString);
                decimal = parseInt(decimal / 2);
            }
            resultString = 'b'.concat(resultString);
        } else {
            resultString = 'Enter integer number!';
        }
    } else {
        resultString = 'Enter valid data!';
    }
    document.getElementById('bin-result-view').innerHTML = resultString;
}
