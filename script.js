//randomCodeGeneration


document.getElementById('pinGenerateBtn').addEventListener('click', function () {
    let randomCode = Math.floor(Math.random() * 9000 + 1000);
    var generatedCode = randomCode;
    let generatedCodeDisplay = document.getElementById('codeDisplay').value = generatedCode;
})


// Submission


var codeDisplay = document.getElementById('codeDisplay').value;
var codeDisplayValue = parseInt(codeDisplay);
var keyPadDisplay = document.getElementById('keyPadDisplay').value;
var keyPadDisplayValue = parseInt(keyPadDisplay);

document.getElementById('submit').addEventListener('click', function () {
    if (codeDisplayValue == keyPadDisplayValue) {
        document.getElementById('matched').style.display = 'block';
    }
    if (codeDisplayValue !== keyPadDisplayValue) {
        document.getElementById('notMatched').style.display = 'block';
    }
})