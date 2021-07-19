
let borrowfill = document.getElementById('needToBorrow');
function getborrowAmount(type = 0){
let homeCost = document.getElementById('home').value;
let downPayment = document.getElementById('down').value;
let borrowAmount = (homeCost - downPayment);
if(type === 0){
borrowfill.innerHTML = '$' + borrowAmount.toLocaleString();
} else {
    return borrowAmount;
}
}

let borrowpercentfill = document.getElementById('needToBorrowPercent');
function getborrowPercent(){
    let homeCost = document.getElementById('home').value;
    let downPayment = document.getElementById('down').value;
    let borrowAmount = (parseInt(homeCost) - parseInt(downPayment));
    let borrowPercent = (borrowAmount / homeCost) * 100
    borrowpercentfill.innerHTML = parseInt(borrowPercent) + '%';
}

function allTopFunctions(){
    getborrowAmount();
    getborrowPercent();
}

document.getElementById('calcButton').addEventListener('click', allTopFunctions)

let monthlyFill = document.getElementById('monthlyPayment');
function pmt(/*rate_per_period, number_of_payments,present_value, future_value, type*/){
    let rate_per_period = (document.getElementById('rate').value)/100/12;
    let number_of_payments = document.getElementById('period').value * 12;
    let present_value = document.getElementById('needToBorrow').value;
    let future_value = 0;
    let type = 1;
    let monthlyAmount;
    if (rate_per_period != 0.0){
            /* Interest rate exists*/
            let q = Math.pow(1 + rate_per_period, number_of_payments);
            monthlyFill.innerHTML = '$' + parseInt((rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type))));
    
        } else if(number_of_payments != 0.0){
            /*No interest rate, but number of payments exists*/
            monthlyFill.innerHTML = '$' + parseInt((future_value + present_value) / number_of_payments);
        }
    
        /*return 0;
         monthlyFill.innerHTML = '$' + monthlyAmount;*/
}

let totalFill = document.getElementById('totalPayment');
function getTotalPayment(){
    let rate_per_period = (document.getElementById('rate').value)/100/12;
    let number_of_payments = document.getElementById('period').value * 12;
    let present_value = document.getElementById('needToBorrow').value;
    let future_value = 0;
    let type = 1;
    let monthlyAmount;
    if (rate_per_period != 0.0){
            /* Interest rate exists*/
            let q = Math.pow(1 + rate_per_period, number_of_payments);
            monthlyFill.innerHTML = '$' + parseInt((rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type))));
    
        } else if(number_of_payments != 0.0){
            /*No interest rate, but number of payments exists*/
            monthlyFill.innerHTML = '$' + parseInt((future_value + present_value) / number_of_payments);
        }
    let total = monthlyAmount * number_of_payments 
totalFill.innerHTML = '$' +  total.toLocaleString();
}

let intFill = document.getElementById('totalIntPayment');
function getIntPayment(){
    let rate_per_period = (document.getElementById('rate').value)/100/12;
    let number_of_payments = document.getElementById('period').value * 12;
    let present_value = document.getElementById('needToBorrow').value;
    let future_value = 0;
    let type = 1;
    let monthlyAmount;
    if (rate_per_period != 0.0){
            /* Interest rate exists*/
            let q = Math.pow(1 + rate_per_period, number_of_payments);
            monthlyFill.innerHTML = '$' + parseInt((rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type))));
    
        } else if(number_of_payments != 0.0){
            /*No interest rate, but number of payments exists*/
            monthlyFill.innerHTML = '$' + parseInt((future_value + present_value) / number_of_payments);
        }
    let total = monthlyAmount * number_of_payments 
    let homeCost = document.getElementById('home').value;
let downPayment = document.getElementById('down').value;
let borrowAmount = (homeCost - downPayment);
    let int = total - borrowAmount
    intFill.innerHTML = '$' + int.toLocaleString(); 
}

function allBottomFunctions(){
    pmt();
    getTotalPayment();
    getIntPayment();
}

document.getElementById('calcButtonTwo').addEventListener('click', allBottomFunctions)

