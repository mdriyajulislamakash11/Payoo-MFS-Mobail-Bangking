document.getElementById('cash-out-btn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        
        const cashOut = addMoneyInputField('cash-out-input');
        const cashOutPin = addMoneyInputField('cash-out-pin');
        const balance = addMoneyInnerTextField('account-balance');

        if(isNaN(cashOut)){
            alert('Faild to cash out..');
            return
        }
        
        if(cashOutPin === 1111){

            if(cashOut > balance){
                alert('you do not have enough money to cash out');
                return;
            }

            const newCashOut = balance - cashOut;
            
            document.getElementById('account-balance').innerText = newCashOut;

            // add to transaction history
            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.innerHTML = `
            <h4 class="text-2xl font-bold">Cash Out</h4>
            <p>${cashOut} Withdrow. New Balance ${newCashOut}</p>
            `

            document.getElementById('transaction-container').appendChild(div)
        }else{
            alert('you are wrong input')
        }

    })