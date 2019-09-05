'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let runnerOne = linkedlist.head
    let runnerTwo = linkedlist.head.next
    return loopRecursion(runnerOne, runnerTwo);
}

const loopRecursion = (runnerOne, runnerTwo) => {
    if(runnerOne.value === runnerTwo.value){
        return true
    } else if(!runnerTwo.next.next){
        return false
    } else {
        return loopRecursion(runnerOne.next, runnerTwo.next.next)
    }
}


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop