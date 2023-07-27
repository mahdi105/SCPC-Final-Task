// Task - 8.8
// Find the Second smallest number from an array

const findSmallestNumber = (arry) => {
    if(!Array.isArray(arry)){
        console.log("Please provide a valid array of numbers");
        return;
    }

    const sortedArry = arry.sort((a,b) => b-a);
    const biggestNumber = sortedArry[0];
    const newArry = [];
    for(let item of sortedArry){
        if(item !== biggestNumber){
           newArry.push(item);
        }
    }
    const secondSmallestNumber = newArry[0];
    return secondSmallestNumber;
}
console.log(findSmallestNumber([1,22,2,100,17,33,33,100,100,100,99,99]));

