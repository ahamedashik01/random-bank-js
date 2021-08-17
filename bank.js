
function getInputValue(inputId) {
    const depositOrWithdraw = document.getElementById(inputId);
    const depositOrWithdrawText = depositOrWithdraw.value;
    const depositOrWithdrawAmount = parseFloat(depositOrWithdrawText);
    // clear input value 
    depositOrWithdraw.value = '';
    return depositOrWithdrawAmount;
}

function updatetotalField(inputId, depositOrWithdrawAmount) {
    const depositOrWithdrawTotal = document.getElementById(inputId);
    const depositOrWithdrawText = depositOrWithdrawTotal.innerText;
    const previousDepositOrWithdrawAmount = parseFloat(depositOrWithdrawText);
    depositOrWithdrawTotal.innerText = previousDepositOrWithdrawAmount + depositOrWithdrawAmount;

}
function currentBalance() {
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
function updateBalance(depositOrWithdrawAmount, isAdd) {
    const balanceTotal = document.getElementById('total-balance');
    previousBalanceTotal = currentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositOrWithdrawAmount;
    } else {
        balanceTotal.innerText = previousBalanceTotal - depositOrWithdrawAmount;
    }

}

// deposit event handler
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposite-input');
    if (depositAmount > 0) {
        updatetotalField('total-deposit', depositAmount);
        updateBalance(depositAmount, true);
    }
});
// withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const totalBalance = currentBalance();
    if (withdrawAmount > 0 && totalBalance >= withdrawAmount) {
        updatetotalField('total-withdraw', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
});