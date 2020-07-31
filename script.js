//randomCodeGeneration


document.getElementById('pinGenerateBtn').addEventListener('click', function () {
    let randomCode = Math.floor(Math.random() * 9000 + 1000);
    var generatedCode = randomCode;
    let generatedCodeDisplay = document.getElementById('codeDisplay').value = generatedCode;
})


// Submission


document.getElementById('submit').addEventListener('click', function () {
    var codeDisplay = document.getElementById('codeDisplay').value;
    var codeDisplayValue = parseInt(codeDisplay);
    var keyPadDisplay = document.getElementById('keyPadDisplay').value;
    var keyPadDisplayValue = parseInt(keyPadDisplay);

    if (codeDisplay == '') {
        alert('hey Mr.....! first generate a code')
    }

    if (codeDisplayValue == keyPadDisplayValue) {
        document.getElementById('matched').style.display = 'block';
        document.getElementById('notMatched').style.display = 'none';
    }

    if (codeDisplayValue !== keyPadDisplayValue) {
        document.getElementById('notMatched').style.display = 'block';
        document.getElementById('matched').style.display = 'none';
    }

    document.getElementById('actionLeft').innerText = document.getElementById('actionLeft').innerText - 1;

    if (document.getElementById('actionLeft').innerText == 1) {
        alert('Think twice before submit... Only 1 try left');
    }

    if (document.getElementById('actionLeft').innerText == 0) {
        document.getElementById('submit').style.display = 'none';
        document.getElementById('actionLeftArea').style.display = 'none';
        document.getElementById('loserArea').style.display = 'block';
    }
})