//handle deposit button event
document.getElementById('deposit-submit').addEventListener("click", function() {
    //deposited amount
    const depositAmount = document.getElementById('deposit-amount');
    const depositText = depositAmount.value;
    const deposit = parseFloat(depositText);
    console.log(deposit);
    //clear the deposit input field
    depositAmount.value = "";
    //deposit show in deposit
    const depositTotalAmount = document.getElementById('total-deposit-amount');
    const previousDepositTotalAmountText = depositTotalAmount.innerText;
    //
    const previousDepositTotalAmount = parseFloat(previousDepositTotalAmountText);
    const newDepositTotalAmount = previousDepositTotalAmount + deposit;
    depositTotalAmount.innerText = newDepositTotalAmount;
    //Balance
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    let previousBalanceTotal = parseFloat(balanceText);
    console.log(previousBalanceTotal);
    // if (!previousBalanceTotal) {
    //     previousBalanceTotal = 0;
    // }
    const newBalanceTotal = previousBalanceTotal + deposit;
    balance.innerText = newBalanceTotal;
    console.log(newBalanceTotal);
    deposit.value = "";
});

//Withdraw event handler
document.getElementById('withdraw-submit').addEventListener("click", function() {
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawText = withdrawAmount.value;
    const withdraw = parseFloat(withdrawText);
    console.log(withdraw);
    const totalWithdrawAmount = document.getElementById('total-withdraw-amount');
    //
    const previousTotalWithdrawText = totalWithdrawAmount.innerText;
    const previousTotalWithdraw = parseFloat(previousTotalWithdrawText);
    const newTotalWithdraw = previousTotalWithdraw + withdraw;
    // show withdraw amount in withdraw
    totalWithdrawAmount.innerText = newTotalWithdraw;
    withdrawAmount.value = "";

    //Update Balance
    const balanceTotal = document.getElementById('balance');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotal - withdraw;
    balanceTotal.innerText = newBalanceTotal;
});