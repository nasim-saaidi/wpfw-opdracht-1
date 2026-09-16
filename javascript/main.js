console.log("js connected")



class calculator {
    add(a, b) {
        return a + b;
    }
}

const minus = (a, b) => a - b


function divide(a, b) {
    return a / b;
}


const calc = new calculator();
console.log(calc.add(1, 2))
console.log(minus(4, 2))
console.log(divide(10, 2))