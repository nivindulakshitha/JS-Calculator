var doneCalculation = false;

const handleButtonClick = (event) => {
    const value = event.getAttribute("value");
    const functions = ["clear", "delete", "division", "multiply", "subtraction", "addioiton", "equal"];
    const textArea = document.getElementById("text-area");

    if (doneCalculation) {
        doneCalculation = false;
        textArea.value = "";
    }

    if (functions.includes(value)) {

        switch (value) {
            case "clear": {
                clearTextAra();
                break;
            }

            case "delete": {
                textArea.value = textArea.value.substring(0, textArea.value.length - 1);
                break;
            }

            case "division": {
                textArea.value += "÷"
                break;
            }

            case "multiply": {
                textArea.value += "x"
                break;
            }

            case "addioiton": {
                textArea.value += "+"
                break;
            }

            case "subtraction": {
                textArea.value += "-"
                break;
            }

            case "equal": {
                calculateMath();
                break;
            }
        }

    } else {
        textArea.value += event.innerText;
    }
    
    textArea.scrollLeft = textArea.scrollWidth;
}

document.addEventListener("DOMContentLoaded", () => {
    clearTextAra();
})

function clearTextAra() {
    document.getElementById("text-area").value = "";
}

function calculateMath() {
    const textArea = document.getElementById("text-area");

    try {
        let value = eval(textArea.value.replaceAll("x", "*").replaceAll("÷", "/"))
        textArea.value = value;
    } catch {
        textArea.value = "Error";
        doneCalculation = true;
    }
}