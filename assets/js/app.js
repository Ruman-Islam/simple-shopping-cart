
function phoneIncreaseDecrease(plusMinus, categoryQuantity, category) {
    const productQuantityInput = document.getElementById(categoryQuantity + '__input');
    const productQuantityValue = parseInt(phoneQuantityInput.value);
    const productPrice = document.getElementById(category + '__price');
    if (plusMinus === 'increase') {
        const productQuantity = productQuantityValue + 1;
        productQuantityInput.value = productQuantity;
        const productTotalPrice = productQuantity * 1219;
        productPrice.innerText = productTotalPrice;
    } else if (plusMinus === 'decrease') {
        if (productQuantityValue > 0) {
            const phoneQuantity = productQuantityValue - 1;
            productQuantityInput.value = phoneQuantity;
            const phoneTotalPrice = phoneQuantity * 1219;
            productPrice.innerText = phoneTotalPrice;
        }
    }
}
