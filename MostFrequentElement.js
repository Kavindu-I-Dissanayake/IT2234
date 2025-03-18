let arr = [4, 8, 3, 4, 3, 2, 1, 8, 4];

let count = {};
let maxFreq = 0;
let mostFreq;

arr.forEach(num => {
    count[num] = (count[num] || 0) + 1; // Increment count

    if (count[num] > maxFreq) {
        maxFreq = count[num]; // Update max
        mostFreq = num; // Update most frequent element
    }
});

console.log(arr+"\n")
console.log("Most frequent element:", mostFreq); // Most frequent element