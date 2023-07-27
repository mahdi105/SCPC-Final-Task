//Task - 2.2

// Calculate the positive numbered elements of an array

const calculatePositiveNumbers = (arry) => {
    if(Array.isArray(arry) === true){
        let total = 0;
        for(let i of arry){
            if(i >= 0 && typeof(i) === 'number'){
                total += i;
            }
        }
        return total;
    }
    else{
        console.log("Please provide a valid array of numbers");
        return;
    }
}

const sum = calculatePositiveNumbers([2,-5,10,-3,7,'a']);
console.log(sum);