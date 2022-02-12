
function phoneIncreaseDecrease(plusMinus, categoryQuantity, category) {
    const productQuantityInput = document.getElementById(categoryQuantity + '__input');
    const productQuantityValue = parseInt(productQuantityInput.value);
    const productPrice = document.getElementById(category + '__price');
    if (plusMinus === 'increase') {
        const productQuantity = productQuantityValue + 1;
        productQuantityInput.value = productQuantity;
        if (category === 'phone') {
            const productTotalPrice = productQuantity * 1219;
            productPrice.innerText = productTotalPrice;
        } else if (category === 'case') {
            const productTotalPrice = productQuantity * 59;
            productPrice.innerText = productTotalPrice;
        }
    } else if (plusMinus === 'decrease') {
        if (productQuantityValue > 0) {
            const productQuantity = productQuantityValue - 1;
            productQuantityInput.value = productQuantity;
            if (category === 'phone') {
                const productTotalPrice = productQuantity * 1219;
                productPrice.innerText = productTotalPrice;
            } else if (category === 'case') {
                const productTotalPrice = productQuantity * 59;
                productPrice.innerText = productTotalPrice;
            }
        }
    }
}
