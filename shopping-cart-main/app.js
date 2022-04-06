function updateProductNumber (product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1; 
    }
    else if (productNumber>0){
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;

    // updateTotal
    const productTotal =document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal ();
};

function getInputValue(product) {
    const productNumber = document.getElementById(product + '-number').value;
    parseInt(productNumber);
    return productNumber;
}

function calculateTotal () {
    phoneTotal = getInputValue('phone') * 1219;
    caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// handle phone increase decrease
document.getElementById('phone-plus').addEventListener('click', function () {
updateProductNumber ('phone',1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
updateProductNumber ('phone',1219, false);
});

// handle case increase decrease
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber ('case',59, true);
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1;
    console.log(caseNumber); */
    
});
document.getElementById('case-minus').addEventListener('click', function () {
updateProductNumber ('case',59, false);
});