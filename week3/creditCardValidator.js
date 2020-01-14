let code = prompt(`Please give your credit card number`);

var numbers = /^[0-9]+$/;
let codeArray = code.split('');
let char1 = codeArray[0];

let card = codeArray.every(item => {
    return item === char1;
}
)

let codeInteger = codeArray.map(item => parseInt(item));
let sum = 0;
for (let i in codeInteger) {
    sum = sum + codeInteger[i];
}



if (codeArray.length>16) {
    alert(`You have inserted too many digits`)
}
else if (codeArray.length<16) {
    alert(`You have inserted too few digits`)
}
else if (!code.match(numbers)) {
    alert(`Please insert only numerical characters`);
}
else if (card) {
    alert(`Your credit card number should have at least two different characters`);
}
else if (code[code.length - 1] % 2 !== 0) {
    alert(`The last digit must be even`)
}
else if (sum < 16) {
    alert(`The sum of all digits must be greater than 16`)
}
else {
    alert(`Your credit card number is valid`)
}



