function processInput(){
    var inputBox = document.getElementById("input-text");
    var outputBox = document.getElementById("output-text");

    switch(this.id){
        case "one":
            inputArray.push("1");
            break;
        case "two":
            inputArray.push("2");
            break;    
        case "three":
            inputArray.push("3");
            break;    

        case "four":
            inputArray.push("4");
            break;    
        case "five":
            inputArray.push("5");
            break;    
        case "six":
            inputArray.push("6");
            break;    
        case "seven":
            inputArray.push("7");
            break;    
        case "eight":
            inputArray.push("8");
            break;    
        case "nine":
            inputArray.push("9");
            break;    
        case "zero":
            inputArray.push("0");
            break;    
        case "decimal":
            inputArray.push(".");
            // disable button so only one decimal point is allowed
            //this.disabled = true;
            break;    
        case "add":
            inputArray.push("+");
            break;    
        case "minus":
            inputArray.push("-");
            break;    
        case "divide":
            inputArray.push("/");
            break;    
        case "multiply":
            inputArray.push("*");
            break;    
        case "clear":
            inputArray = [];
            outputBox.value = "";
            break;    
        case "percent":

            break;    
        case "root":
            inputArray.push("√");
            break;    
        case "backspace":
            inputArray.pop();
            break;    
        case "equals":
            outputBox.value=equals(inputArray);

        }

    inputBox.value = inputArray.join("");
}

function add(x, y){
    return Number(x) + Number(y);
}

function subtract(x, y){
    return Number(x) - Number(y);
}

function multiply(x, y){
    return Number(x) * Number(y);
}

function divide(x, y){
    if (Number(y)=== 0){
        return "CANNOT DIVIDE BY 0"
    } else {
        return Number(x) / Number(y);
    }
}

function root(x, y){
    return Math.sqrt(Number(x));
}



function operate(sign, x, y){

    switch(sign) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
        case '%':
            return percent(x, y);
        case '√':
            return root(x, y);
    }
}

function equals(array){

    // joins the array into a string then splits the array based on operator and removes any undefined elements
    var input = array.join("").split(/(\-)|(\/)|(\+)|(\*)|(\√)|(\%)/)
                                .filter(function(element){
                                    if ((element != undefined) | (element != "")){
                                        return element;
                                    }
                                });

    //var tempNum = null;
    var tempOper = null;
    var total = null;

    for (var i = 0; i < input.length; i++){
        if (!isNaN(input[i])){
            if (total === null && tempOper === null){
                total = input[i];
            } else {
                total = operate(tempOper, total, input[i]);

                // reset holders after an operation
                tempOper = null;
            }
        
        } else {
            if (tempOper === null){
                tempOper = input[i];
            } else {
                return 'ERROR';
            }
            if (tempOper === '√'){
                total = operate(tempOper, total, 0);
            
            }

        }

    }

    return total;
}

// global variable to log inputs
var inputArray = [];



// set event listeners for all buttons

var allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
    button.addEventListener("click", processInput);

});
