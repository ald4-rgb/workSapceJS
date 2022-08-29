const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtracBtn = document.getElementById('btn-substrac');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('input-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutpu = document.getElementById('current-calculation');

function outPutResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutpu.textContent = text;
}




