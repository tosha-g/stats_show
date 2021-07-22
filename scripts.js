
/*For USD number formatting*/
let formatter = new Intl.NumberFormat('en-US',{
    style: "currency",
    currency: 'USD'
});

let borrowfill = document.getElementById('needToBorrow');
let homeCostInput = document.getElementById('home');
let downPaymentInput = document.getElementById('down');
function getborrowAmount(type = 0){
    let borrowAmount = (homeCostInput.value - downPaymentInput.value);
if(type === 0){
borrowfill.innerHTML = '$' + borrowAmount.toLocaleString();
} else {
    return borrowAmount;
}
}

let borrowpercentfill = document.getElementById('needToBorrowPercent');
function getborrowPercent(){
    let borrowPercent = (getborrowAmount(1) / homeCostInput.value * 100);
    borrowpercentfill.textContent = borrowPercent.toPrecision(3)+ '%';
}

function allTopFunctions(){
    getborrowAmount();
    getborrowPercent();
}

document.getElementById('calcButton').addEventListener('click', allTopFunctions)

let years_of_payments = document.getElementById('period');
let number_of_payments;

let monthlyFill = document.getElementById('monthlyPayment');
function pmt(/*rate_per_period, number_of_payments,present_value, future_value, type*/){
    let rate_per_period = ((document.getElementById('rate').value)/100/12);
    number_of_payments = years_of_payments.value * 12;
    let present_value = getborrowAmount(1); 
    let future_value = 0;
    let type = 1;
    let monthlyAmount;
    if (rate_per_period != 0.0){
            /* Interest rate exists*/
            let q = Math.pow(1 + rate_per_period, number_of_payments);
            /*monthlyFill.innerHTML = '$' + ((rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)))).toPrecision();
    */
   monthlyAmount = ((rate_per_period * (future_value + (q * present_value))) / ((-1+q) * (1 + rate_per_period * (type))));

        } else if(number_of_payments != 0.0){
            /*No interest rate, but number of payments exists*/
            /*monthlyFill.innerHTML = '$' + ((future_value + present_value) / number_of_payments).toPrecision();
        }*/
        monthlyAmount = ((future_value + present_value) / number_of_payments);
        monthlyFill.textContent = formatter.format(monthlyAmount);
        return monthlyAmount;
    }
}

let totalFill = document.getElementById('totalPayment');
function getTotalPayment(monthlyAmount){
    let totalOfPayments = monthlyAmount * number_of_payments;
    totalFill.textContent = formatter.format(totalOfPayments);
    return totalOfPayments;
}

let intFill = document.getElementById('totalIntPayment');

function getIntPayment(totalOfPayments){
let amountBorrowed = getborrowAmount(1);
let totalInterest = totalOfPayments - amountBorrowed;
    intFill.textContent = formatter.format(totalInterest); 
}

function allBottomFunctions(){
    let monthlyAmount = pmt();
    let totalOfPayments = getTotalPayment(monthlyAmount);
    getIntPayment(totalOfPayments);
}

document.getElementById('calcButtonTwo').addEventListener('click', allBottomFunctions);