// Task - 3.3
// Find the most frequent element in an array

const findFrequentEle = (arry) => {
    let max_item_count = 0;
    let theItem;
    for (let item of arry) {
        let itemCount = 0;
        for (let i of arry) {
            if (i === item) {
                itemCount += 1;
            }
        }
        if (itemCount > max_item_count) {
            max_item_count = itemCount;
            if (max_item_count >= itemCount) {
                theItem = item;
            }
        }
    }
    return theItem;
}

const result = findFrequentEle([3, 5, 2, 5, 3, 3, 1, 4, 5]);

console.log(result);

