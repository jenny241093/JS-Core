function acceptance() {
    // TODO...
    let company = $('input[name="shippingCompany"');
    let product = $('input[name="productName"');
    let quantity = $('input[name="productQuantity"');
    let srape = $('input[name="productScrape"');

    if (company.val() && product.val() && !isNaN(quantity.val()) && quantity.val() && !isNaN(srape.val()) && srape.val()) {
        console.log('validfields');

    }

}