/* Given an array of size n, find the majority element. The majority element is the element that appears more than floor(n/2) times.
You may assume that the array is non-empty and the majority element always exist in the array. */

function majorityElement(A) {
    if (A.length === 1) return A[0];
    const elementsCount = new Map();
    const minIndex = Math.floor(A.length / 2);
    for (let i in A) {
        let count = elementsCount.get(A[i]) ? elementsCount.get(A[i]) : 0;
        count++;
        if (count === minIndex) return A[i];
        elementsCount.set(A[i], count);
    }
}

console.log(majorityElement([100]));