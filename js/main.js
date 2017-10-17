//import {calculateAmortization} from './mortgage'
import Mortgage from './mortgage'

document.getElementById('calcBtn').addEventListener('click', function () {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    let mortgage = new Mortgage(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = mortgage.monthlyPayment.toFixed(2);
    document.getElementById('monthlyRate').innerHTML = (rate * 100).toFixed(2);

    mortgage.amortization.forEach(month => console.log(month));
});
