let inputValue = document.querySelector('.input-box');

function append(value) {
    inputValue.value += value
}

function calculate() {
    inputValue.value = eval(inputValue.value);
}

function clearInput() {
    inputValue.value = '';
}

function deleteNumber() {
    inputValue.value = inputValue.value.slice(0, -1);
}

function signChange() {
    if (inputValue.value != '') {
        inputValue.value = ((inputValue.value) * -1);
    }
}