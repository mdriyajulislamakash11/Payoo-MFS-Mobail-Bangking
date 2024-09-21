function addMoneyInputField (id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


function addMoneyInnerTextField (id){
    const inputinnerTaxt = document.getElementById(id).innerText;
    const inputNumber = parseFloat(inputinnerTaxt);
    return inputNumber;
}


function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transition-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}