function calculate() {
    
    const amount = document.getElementById("amount");
    const rate = document.getElementById("rate");
    const years = document.getElementById("years");
    const total = document.getElementById("total");
    
    let am = Number(amount.value);
    let ra = Number(rate.value)/100;
    let ye = Number(years.value);

    if(isNaN(am) || am<0) {
        alert(`Enter valid amount.`);
        am = 0;
        amount.value = 0;
    }

    else if (isNaN(ra) || ra<0 || ra>100) {
        alert(`Enter valid rate.`);
        ra = 0;
        rate.value = 0;
    }

    else if (isNaN(ye) || ye<0) {
        alert(`Enter valid years.`);
        ye = 0;
        years.rate = 0;
    }

    let finalAmount = am * Math.pow((1 + ra/1), 1 * ye);
    finalAmount = finalAmount.toFixed(2);
    total.innerHTML = `Total: <span id=price>${finalAmount}</span>`;

}