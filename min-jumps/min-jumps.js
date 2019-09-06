'use strict';

// Complete this algo
const minJumps = arr => {
    let numJumps = 1
    while(true){
    let start = arr[0]
    let maxSum = 0;
    let currentSum = 0;
    let correctIdx = 0;
        if (start >= arr.length-1){ //if we get to the end from the start value
            return numJumps
        }
        for(let i = 0; i <= start; i++){ // if we get to the end based off jumping to the next number after start
            if(i+arr[i] >= arr.length-1){ 
                numJumps++
                return numJumps
            } else {
                currentSum = i+arr[i]
                if (maxSum < currentSum){
                    maxSum = currentSum
                    correctIdx = i //if maxSum < currentSum, idx = the "i" where this max sum happened
                }
            }
        }
        arr = arr.slice(correctIdx) //we didn't reach the end yet, but we have to "jump" to next point, then delete the rest of the array behind us
        numJumps++
    }
};

module.exports = minJumps