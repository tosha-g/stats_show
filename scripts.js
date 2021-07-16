
const borrowfill = document.getElementById('needToBorrow');
function getborrowAmount(){
let homeCost = document.getElementById('home').value;
let downPayment = document.getElementById('down').value;
let borrowAmount = (homeCost - downPayment).toLocaleString(undefined);
borrowfill.innerHTML = '$' + borrowAmount;
}

const borrowpercentfill = document.getElementById('needToBorrowPercent');
function getborrowPercent(){
    let homeCost = document.getElementById('home').value;
    let downPayment = document.getElementById('down').value;
    let borrowAmount = (parseInt(homeCost) - parseInt(downPayment)).toLocaleString(undefined);
    let borrowPercent = (borrowAmount / homeCost).toLocaleString(undefined)
    borrowpercentfill.innerHTML = parseInt(borrowPercent) + '%';
}

function allTopFunctions(){
    getborrowAmount();
    getborrowPercent();
}

document.getElementById('calcButton').addEventListener('click', allTopFunctions)
/*
const monthlyFill = document.getElementById('monthlyPayment');
function pmt(rate_per_period, number_of_payments,present_value, future_value, type){
    let rate_per_period = (document.getElementById('rate').value)/100;
    let number_of_payments = document.getElementById('period').value;
    let present_value = document.getElementById('needToBorrow').value;
    let future_value = 0;
    let type = 1;
    let monthlyAmount = 
    if (rate_per_period != 0.0){
            /* Interest rate exists
            let q = Math.pow(1 + rate_per_period, number_of_payments);
            return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));
    
        } else if(number_of_payments != 0.0){
            /*No interest rate, but number of payments exists
            return -(future_value + present_value) / number_of_payments;
        }
    
        return 0;
         monthlyFill.innerHTML = '$' + monthlyAmount;
}

const totalFill = document.getElementById('totalPayment');
function getTotalPayment(){

}

const intFill = document.getElementById('totalIntPayment');
function getIntPayment(){

}

function allBottomFunctions(){
    pmt();
    getTotalPayment();
    getIntPayment();
}

document.getElementById('calcButtonTwo').addEventListener('click', allBottomFunctions)
*/
