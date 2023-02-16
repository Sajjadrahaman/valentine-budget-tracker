document.getElementById('kitkat-buy-btn').addEventListener('click', function () {
    const kitKatCost = multiplePriceWithQuantity('kitkat-quantity', 200);
    // document.getElementById("kitkat-quantity").value = "";
    setInnerText('chocolate', kitKatCost);
    total();

});

document.getElementById('rose-buy-btn').addEventListener('click', function () {
    const roseCost = multiplePriceWithQuantity('rose-quantity', 100);
    setInnerText('rose', roseCost);
    total();
});

document.getElementById('teddy-buy-btn').addEventListener('click', function () {
    const teddyCost = multiplePriceWithQuantity('teddy-quantity', 700);
    setInnerText('teddy', teddyCost);
    total();
});

document.getElementById('diary-buy-btn').addEventListener('click', function () {
    const diaryCost = multiplePriceWithQuantity('diary-quantity', 200);
    setInnerText('diary', diaryCost);
    total();
});

document.getElementById('dress-buy-btn').addEventListener('click', function () {
    const dressCost = multiplePriceWithQuantity('dress-quantity', 1300);
    setInnerText('dress', dressCost);
    total();
});
document.getElementById('ring-buy-btn').addEventListener('click', function () {
    const ringCost = multiplePriceWithQuantity('ring-quantity', 450);
    setInnerText('ring', ringCost);
    total();
});


// promo-code.
document.getElementById('promo-btn').addEventListener('click', function () {
    handlePromoCode();
})
/* --------------------------Common-Function-Area------------------------- */


/* 
Step-1:: This function will calculate the quantity and price of gift && this function will take two parameter these are inputField id & price of gift 
*/
function multiplePriceWithQuantity(id, price) {
    const quantity = document.getElementById(id).value;
    document.getElementById(id).value = '';
    const totalPrice = parseInt(quantity) * parseInt(price);
    return totalPrice; //return bcz this value use in document
}

/*
Step-2:: This function will take id & value of tag and set innerText of the total-cost items field 
*/
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

/* 
Step-3:: pass the id of the tag of total-cost items && this function will convert just innerText to number 
*/
function stringToNumberConverter(id) {
    const element = document.getElementById(id).innerText;
    return parseFloat(element); //return will use in total function
}

/* 
Step-4: This function Count-total Sum of item 
*/
function total() {
    const chocolate = stringToNumberConverter("chocolate");
    const rose = stringToNumberConverter("rose");
    const teddy = stringToNumberConverter("teddy");
    const diary = stringToNumberConverter("diary");
    const dress = stringToNumberConverter("dress");
    const ring = stringToNumberConverter("ring");
    const totalSum = (chocolate + rose + teddy + diary + dress + ring);
    setInnerText("total", totalSum);
}

function handlePromoCode() {
    const promoCode = document.getElementById("promo-code").value;
    if (promoCode == "DISC30") {
        const total = stringToNumberConverter("total");
        const finalSum = total - total * 0.3;
        setInnerText("final-total", finalSum);
    } else {
        alert("promo code is not correct");
    }
}
