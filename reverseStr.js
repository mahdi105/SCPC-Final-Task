// Task - 1.1

//Reverse a string without using Array.prototype.reverse() method

const reverseStr = (str) => {
   if(typeof(str) === 'string'){
    if(str === '' || str === ' '){
        console.log('Please Provide a valid string');
        return;
    }else{
        const strArry = str.split('');
        const reverseStrArry = [];
        for(let i of strArry){
            reverseStrArry.unshift(i);
        }
        const reverseStr = reverseStrArry.join('');
        return reverseStr;

    }
   }else{
        console.log('Please provide a valid string');
        return;
   }
}

const reverseString = reverseStr('Hello javascript');
console.log(reverseString);