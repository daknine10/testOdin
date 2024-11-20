function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function reverseString(string) {
    return string.split("").reverse().join("")
}

const calculator = {
    add(a, b) {
        return a + b
    },
    subtract(a, b) {
        return a - b
    },
    divide(a, b) {
        return a / b
    },
    multiply(a, b) {
        return a * b
    },
}

function ceasarCipher(string, number) {
    const abc = 'abcdefghijklmnopqrstuvwxyz'
    const toCheckLower = abc.split("")
    const toCheckUpper = abc.toUpperCase().split("")
    const splitString = string.split("")
    let output = "";

    for (let letter of splitString) {
        if (toCheckLower.includes(letter)) {
            index = (toCheckLower.indexOf(letter) + number) % 26
            output += toCheckLower[index]
        }
        else if (toCheckUpper.includes(letter)) {
            index = (toCheckUpper.indexOf(letter) + number) % 26
            output += toCheckUpper[index]
        }
        else {
            output += letter
        }
    }
    return output
}

function analyzeArray(array) {
    const avg = array.reduce((accumulator, currentValue) => accumulator + currentValue) / array.length
    const min = Math.min(...array)
    const max = Math.max(...array)
    const length = array.length
    return {average: avg, min: min, max: max, length: length}
}

module.exports = {};
module.exports.capitalize = capitalize
module.exports.reverseString = reverseString
module.exports.calculator = calculator
module.exports.ceasarCipher = ceasarCipher
module.exports.analyzeArray = analyzeArray