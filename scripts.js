
let borrowfill = document.getElementById('needToBorrow');
let homeCost = document.getElementById('home').value;
let downPayment = document.getElementById('down').value;
function getborrowAmount(type = 0){
    let borrowAmount = (homeCost - downPayment).toPrecision();
if(type === 0){
borrowfill.innerHTML = '$' + borrowAmount.toLocaleString();
} else {
    return borrowAmount;
}
}

let borrowpercentfill = document.getElementById('needToBorrowPercent');
function getborrowPercent(){
    getborrowAmount();
    let borrowPercent = (getborrowAmount(1) / homeCost * 100).toPrecision();
    borrowpercentfill.innerHTML = borrowPercent + '%';
}

function allTopFunctions(){
    getborrowAmount();
    getborrowPercent();
}

document.getElementById('calcButton').addEventListener('click', allTopFunctions)

let number_of_payments = document.getElementById('period').value * 12;

let monthlyFill = document.getElementById('monthlyPayment');
function pmt(/*rate_per_period, number_of_payments,present_value, future_value, type*/){
    let rate_per_period = ((document.getElementById('rate').value)/100/12).toPrecision(2);
    let number_of_payments = (document.getElementById('period').value * 12).toPrecision(2);
    let present_value = getborrowAmount(1); 
    let future_value = 0;
    let type = 1;
    let monthlyAmount;
    if (rate_per_period != 0.0){
            /* Interest rate exists*/
            let q = Math.pow(1 + rate_per_period, number_of_payments);
            monthlyFill.innerHTML = '$' + ((rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)))).toPrecision();
    
        } else if(number_of_payments != 0.0){
            /*No interest rate, but number of payments exists*/
            monthlyFill.innerHTML = '$' + ((future_value + present_value) / number_of_payments).toPrecision();
        }
}

let totalFill = document.getElementById('totalPayment');
let total = monthlyAmount * number_of_payments;
function getTotalPayment(){
    pmt();
    totalFill.innerHTML = '$' +  total.toLocaleString();
}

let intFill = document.getElementById('totalIntPayment');
let int = total - borrowAmount;
function getIntPayment(){
    getTotalPayment;
    getborrowAmount();
    intFill.innerHTML = '$' + int.toLocaleString(); 
}

function allBottomFunctions(){
    pmt();
    getTotalPayment();
    getIntPayment();
}

document.getElementById('calcButtonTwo').addEventListener('click', allBottomFunctions)

