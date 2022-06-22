

function calcularPrecioConDescuento(precio,descuento){
    const valorDescuento = precio * (descuento/100);
    const precioConDescuento = precio - valorDescuento;
    return precioConDescuento;
};

function priceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;

    const precioDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resultPrice = document.getElementById("ResultPrice")
    resultPrice.innerText = "El precio con descuento es de: $" + precioDescuento;
}