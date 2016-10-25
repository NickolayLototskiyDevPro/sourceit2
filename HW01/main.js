function pageSelect(selectedPageId) {
    var blocks = document.getElementsByClassName('main-block');
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].style.display = 'none';
    }
    document.getElementById(selectedPageId).style.display = 'block';
}

function showGreetings() {
    var name = document.getElementById("name").value;
    var sName = document.getElementById("s-name").value;
    var gender = document.querySelector('.genderCheckbox:checked').value;
    if (name != '' && sName != '') {
        switch (gender) {
            case 'Male':
            {
                genger = 'Mr.';
                break;
            }
            case 'Female':
            {
                genger = 'Mrs.';
                break;
            }
            default :
            {
                genger = '';
            }
        }
        alert('Hello ' + genger + ' ' + name + ' ' + sName);
    } else {
        alert('Enter credentials data!');
    }
}

function calculate(operation) {

    var result = null;
    var operand1 = prompt('Enter first operand', 0);
    var operand2 = prompt('Enter second operand', 0);

    if (!isNaN(operand1) && !isNaN(operand2)) {
        switch (operation) {
            case '+':
            {
                result = parseFloat(operand1) + parseFloat(operand2);
                break;
            }
            case '-':
            {
                result = parseFloat(operand1) - parseFloat(operand2);
                break;
            }
            case '*':
            {
                result = parseFloat(operand1) * parseFloat(operand2);
                break;
            }
            case '/':
            {
                if (operand2 != 0) {
                    result = parseFloat(operand1) / parseFloat(operand2);
                }
                break;
            }
            default :
            {
                result = '';
            }
        }
        if (result != null) {
            alert('Result is: ' + result);
        } else {
            alert('Don`t do this!');
        }
    } else {
        alert('Enter valid data!');
    }
}

function factorial() {

    var MAX_VALUE = 170;
    var MIN_VALUE = 0;
    var result = null;
    var operand = document.getElementById("factorial-value").value;

    if (!isNaN(operand)) {
        if (parseInt(operand) == parseFloat(operand)) {
            operand = parseInt(operand);
            if (operand >= MIN_VALUE && operand <= MAX_VALUE) {
                result = calcFactorial(operand);
                alert('Result is: ' + result);
            } else {
                alert('Take number between ' + MIN_VALUE + ' and ' + MAX_VALUE + '!');
            }
        } else {
            alert('Enter integer number!');
        }
    } else {
        alert('Enter valid data!');
    }
}

function calcFactorial(value) {
    return value ? value * calcFactorial(value - 1) : 1;
}