export function convertCurrencies(amount, rate) {
    return (parseFloat(amount) * rate).toFixed(2)
}