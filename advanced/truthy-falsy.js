const products = []
const product = products[0]

// Truthy - values that resolve to true in a boolean context
// Falsy - values that resolve to false in a boolean context
// falsy values - false, 0, '', null, undefined, NaN
if (product !== undefined) {
    console.log('Product found!')
} else {
    console.log('Product not found!')
}