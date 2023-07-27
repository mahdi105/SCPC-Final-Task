// Task - 4.4
//Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.


const findArrayElements = (arry, targetValue)=>{
    if(!Array.isArray(arry) && typeof(targetValue) !== 'number'){
        console.log("Please Provide a valid array and Target value");
        return;
    }
    const indices = [];
    for(let item of arry){
        let index;
        for(let i of arry){
            const sum = item + i;
            if(sum === targetValue){
                index = arry.indexOf(item);
            }
        }
        if(index >= 0){
            indices.push(index);
        }
    }
    return indices;
}

const elementsIndices = findArrayElements([1, 6, 9,3,8, 11, 15], 9);
