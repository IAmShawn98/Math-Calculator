// Written by Shawn | JSLint Validated Code | 7/13/18 | Feel free to steal this for personal use!

// Listen to the answer box so we can get values from it.
function li(val) {
    "use strict";
    document.getElementById("answerBox").value = val;
}

// When a button is clicked, grab those values and populate the answer box.
function v(val) {
    "use strict";
    document.getElementById("answerBox").value += val;
}

// Process and display each math problem as entered into the answer box.
function doLogic() {
    "use strict";
    // Here we snatch values from the answer box....
    var Formula = document.getElementById("answerBox").value;
    // Evaluate the formula....
    var Result = eval("(" + Formula + ")");
    // Display results!
    li(Result);

    // Check and handle any errors that occur during formula evaluation.
    if (answerBox.value === "undefined") {
        document.getElementById("answerBox").value = "Syntax Error";
    }
    if (answerBox.value === "NaN") {
        document.getElementById("answerBox").value = "Not Possible!";
    }
}

// This allows the user to delete characters one by one rather then all at once.
function del() {
    "use strict";
    // Listen to the answer box....
    var value = document.getElementById("answerBox").value;
    // Subtract the typo from the answer box!
    document.getElementById("answerBox").value = value.substr(0, value.length - 1);
}
