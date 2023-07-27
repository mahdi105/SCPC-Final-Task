// Task - 6.6
// Generate Random Password with specified length which will include uppercase letter, lowercase letter, special characters and number

const genPassword = (length) => {
    const characters = '0!aA1@bB2#cC3$dD4$eE5%fF6^gG7&hH8*iI9!jJ0@kK1#lL2$mM3%nN4^oO5&pP6*qQ7!rR8@sS9#tT0$uU1%vV2^wW3&xX4*yY5!zZ';
    const charsLength = characters.length;
    let password = '';
    for(let i = 0; i <= length; i++){
        const randomNumber = Math.floor(Math.random() * charsLength);
        const randomChar = characters.substring(randomNumber, randomNumber + 1);
        password += randomChar;

    }
    return password;
}

const newPassword = genPassword(16);
console.log(newPassword);




