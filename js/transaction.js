// Transaction page

// Get input value using function
function getInput(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    input.value = '';
    return inputValue;
};

// Get inner text using function
function transaction(transactionId, amount) {
    const  transactionBalanceText = document.getElementById(transactionId);
    const transactionBalance = parseFloat(transactionBalanceText.innerText);
    transactionBalanceText.innerText = transactionBalance + amount;
}

// Get existing total balance text using function
function currentTotal() {
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const currentBalance = parseFloat(balanceTotalText);
    return currentBalance;
};

function newTotal(amount, isAdd) {
    const totalBalance = document.getElementById('total-balance');
    const currentBalance = currentTotal();
    if (isAdd == true) {
        totalBalance.innerText = currentBalance + amount;
    } else {
        totalBalance.innerText = currentBalance - amount;
    }
}

// Deposit button handler
document.getElementById('deposit-btn').addEventListener('click', function () {
    const deposit = getInput('deposit-input');
    if (deposit > 0) {
        transaction('deposit-balance', deposit);
        newTotal(deposit, true);
    } else {
        alert('Please input a valid amount');
    }
});

// Withdraw button handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdraw = getInput('withdraw-input');
    const currentBalance = currentTotal();
    if (withdraw > 0 && withdraw < currentBalance) {
        transaction('withdraw-balance', withdraw);
        newTotal(withdraw, false);
    } else {
        alert('Please input a valid amount');
    }  
});