function processInput(){
    var inputBox = document.getElementById("input-text");

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
            break;    
        case "percent":
            inputArray.push("%");
            break;    
        case "root":
            inputArray.push("√");
            break;    
        case "backspace":
            inputArray.pop();
            break;    
    
        }

    inputBox.value = inputArray.join("");
}

// global variable to log inputs
var inputArray = [];



// set event listeners for all buttons

var allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
    button.addEventListener("click", processInput);

});
