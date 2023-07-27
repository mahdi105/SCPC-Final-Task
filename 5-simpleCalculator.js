// Task - 5.5
// Simple Javascript Calculator Function

const calculator = (first, second, operatorStr) => {
    let result;
    if (typeof (first) === 'number' && typeof (second) === 'number' && /[+\-*\/%]/.test(operatorStr)) {

        switch (operatorStr) {
            case '+':
                result = first + second;
                break;
            case '-':
                result = first - second;
                break;
            case '*':
                result = first * second;
                break;
            case '/':
                result = first / second;
                break;
            case '%':
                result = first % second;
                break;
            default:
                console.log("There are no more operations available in this calculator, try again!");
        }
    }
    return result;
}

console.log(calculator(3, 3, '+'));