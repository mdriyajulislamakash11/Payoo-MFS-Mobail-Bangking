document.getElementById('add-money-btn')
    .addEventListener("click", function (event) {
        event.preventDefault()

        const addMoney = addMoneyInputField('add-money-input');
        const pinNumber = addMoneyInputField('input-pin-number');
        const balance = addMoneyInnerTextField('account-balance');
        
// number hote hobe onno kichu hole code colbe na eita diye check korte hoy\\
        if(isNaN(addMoney)){
            alert('please inpute ta number');
            return
        }

        if (pinNumber === 1111) {
            console.log('add money sucsessfully done');

            const newMoney = balance + addMoney;
            // console.log(newMoney)

            document.getElementById('account-balance').innerText = newMoney;

            // transaction history 
            const p = document.createElement('p');
            p.innerText = `Added: ${addMoney} Tk. new Balance: ${newMoney}`;

            document.getElementById('transaction-container').appendChild(p)

        } else {
            alert('you are wrong input....DGM.!')
        }
    });

// ======================= Cash out =========================//

document





