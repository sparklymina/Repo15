// Only change code below this line
const product = (...args) => {
    return args.reduce((a, b) => a * b, 1);
}

console.log(product()); // Change this line
module.exports = product;