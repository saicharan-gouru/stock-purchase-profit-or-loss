var initialPrice = document.querySelector("#initial-price");
var quantityOfStocks = document.querySelector("#quantity-of-stocks");
var currentPrice = document.querySelector("#current-price");
var btnCheck = document.querySelector("#btn-check");
var output = document.querySelector("#output");



function profitOrLoss(initial, quantity, current) {
    output.style.color = "black";
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        output.style.color = "red";
        output.innerText = `Loss = ${loss} \n Loss Percentage = ${lossPercentage}%`;

    } else if (initial < current) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        output.style.color = "green";
        output.innerText = `Profit = ${profit} \n Profit Percentage = ${profitPercentage}%`;

    } else {
        output.innerText = "NO PAIN NO GAIN, NO GAIN NO PAIN";

    }
}

function clickHandler() {
    var initial = Number(initialPrice.value);
    var quantity = Number(quantityOfStocks.value);
    var current = Number(currentPrice.value);
    profitOrLoss(initial, quantity, current);
}
btnCheck.addEventListener("click", clickHandler);