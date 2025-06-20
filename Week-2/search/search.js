const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}

function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1; 
}

readline.question('Enter numbers (space separated): ', (numbers) => {
    let arr = numbers.trim().split(/\s+/).map(Number);
    readline.question('Enter the number to search: ', (num) => {
        let target = Number(num);
        let arrSorted = [...arr].sort((a, b) => a - b);
        console.log("Linear Search Result (index):", linearSearch(arr, target));
        console.log("Binary Search Result (index):", binarySearch(arrSorted, target));
        readline.close();
    });
});