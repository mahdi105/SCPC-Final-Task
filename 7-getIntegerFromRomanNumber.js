// Task - 7.7
// Convert Roman Numeral to Integer number

const getInteger = (roman) => {
    if (typeof (roman) !== 'string' && /^[IVXLCDM]+$/i.test(roman) !== true) {
        console.log("Not a valid roman numerals");
        return;
    }
    
    const romanNumerals = {
        'I': 1,
        'i': 1,
        'V': 5,
        'v': 5,
        'X': 10,
        'x': 10,
        'L': 50,
        'l': 50,
        'C': 100,
        'c': 100,
        'D': 500,
        'd': 500,
        'M': 1000,
        'm': 1000
    }

    let sum = 0;

    for(let i = 0; i < roman.length; i++){
        const currentRomanItem = roman[i];
        const nextRomanItem = roman[i + 1];
        const currentValue =  romanNumerals[currentRomanItem];
        const nextValue = romanNumerals[nextRomanItem];
        if(nextValue > currentValue){
            sum -= currentValue;
        }
        else if(currentValue >= nextValue || currentValue && !nextValue){
            sum += currentValue;
        }
    }

    return sum;

}

console.log(getInteger('iiiv'));

