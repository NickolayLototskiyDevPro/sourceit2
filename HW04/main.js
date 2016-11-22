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

function objectToString(obj, indent){
    var result = '';
    var indentStr = '|';
    for (var i = 0; i < indent * 6; i++){
        indentStr += '&nbsp';
    }
    indentStr += '|-> ';
    for (key in obj){
        if (typeof(obj[key]) == 'object'){
            result += indentStr + '+ ' + key + '<br/>';
            result += objectToString(obj[key], indent + 1)
        } else {
            result += indentStr + key + ':&nbsp' + obj[key] + '<br/>';
        }
    }
    return result;
}

function panzer(){
    var resultString;
    
    var cannon = {
        name: 'king size',
        trunks_quantity: 1,
        caliber: 105.0,
        ammunition: 50,
        auto_loading: true
    };
    var engine = {
        name: 'internal combustion engine',
        cylinder_quantity: 16,
        cylinder_value: 10.5,
        fuel: 'all'
    };
    var track = {
        roller_diametr: 600.0
    };
    var tracks = [track, track, track, track, track, track];
    var panzer = {
        name: 'panther',
        tower_quantity: 1,
        cannon: cannon,
        traks: tracks,
        engine: engine,
        crew: 4
    };

    resultString = objectToString (panzer, 0);
    
    document.getElementById('a-result-view').innerHTML = resultString;
}

function reverseArray() {
    var text = document.getElementById('string-arr-result').innerHTML;
    var lineArray = text.split('<br>');
    text = '';
    for (line in lineArray){
        text = lineArray[line] + ((text.length == 0)?(text):('<br>' + text));
    }
    document.getElementById('string-arr-result').innerHTML = text;
}

function evenArray() {
    var text = document.getElementById('even-arr-result').innerHTML;
    var lineArray = text.split('<br>');
    text = '';
    var i = 1;
    for (line in lineArray){
        text += (i++%2)?(''):(lineArray[line] + '<br>');
    }
    document.getElementById('even-arr-result').innerHTML = text;
}

function matrixDiagonal() {
    var text = document.getElementById('matrix-diagonal-result').innerHTML;
    var lineArray = text.split('<br>');
    var matrix = [];
    var sum = 0;
    for (var i = 0; i < lineArray.length; i++){
        matrix[i] = lineArray[i].match(/(?:\-)?(?:\d+(?:\.\d*)?|\.\d+)/g);
        sum += parseFloat(matrix[i][i]);
    }
    alert ('Sum = ' + sum);
}

function arrEvenSum() {
    var text = document.getElementById('arr-even-sum-result').innerHTML;
    var array = text.match(/(?:\-)?(?:\d+(?:\.\d*)?|\.\d+)/g);
    var sum = 0;
    for (var i = 0; i < array.length; i++){
        sum += ((parseFloat(array[i]) % 2)?(0):(parseFloat(array[i])));
    }
    alert('Sum = ' + sum);
}

function arrMaximum() {
    var text = document.getElementById('arr-max-result').innerHTML;
    var array = text.match(/(?:\-)?(?:\d+(?:\.\d*)?|\.\d+)/g);
    var maximum = array[0];
    for (var i = 0; i < array.length; i++){
        if(parseFloat(array[i]) > maximum){
            maximum = parseFloat(array[i]);
        }
    }
    alert('Maximum = ' + maximum);
}

function arrReverse() {
    var text = document.getElementById('arr-reverse-result').innerHTML;
    var array = text.match(/(?:\-)?(?:\d+(?:\.\d*)?|\.\d+)/g);
    var tmp;
    for (var i = 0; i < array.length / 2; i++){
        tmp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = tmp;
    }
    alert(array);
}

function palindrome() {
    var text = document.getElementById('palindrome-value').value;
    text = text.replace(/\s/g, '');
    var array = text.split('');
    var palindrome = true;
    var resultString = 'String is not palindrome';

    for (var i = 0; i < array.length / 2; i++){
        if (array[i].toUpperCase() != array[array.length - 1 - i].toUpperCase()){
            palindrome = false;
            break;
        }
    }
    if (palindrome) {
        resultString = 'String is palindrome!';
    }
    document.getElementById('palindrome-result').innerHTML = resultString;
}

function stringCut() {
    var text = document.getElementById('string-cut-value').innerHTML;
    var array = text.split(' ');
    document.getElementById('string-cut-result').innerHTML = array[0] + ' ... ' + array[array.length - 1];
}