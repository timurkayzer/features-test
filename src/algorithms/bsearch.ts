const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 432, 1993];

function bsearch(arr: number[], value: number, startIndex = 0, endIndex?: number): number {
    endIndex = endIndex || arr.length - 1;

    let middleElemIndex = startIndex + Math.round((endIndex - startIndex) / 2);

    if (endIndex < 0) return null;

    if ((endIndex - startIndex) === 1 && arr[middleElemIndex] !== value) {
        return null;
    }

    if (arr[middleElemIndex] === value) {
        return middleElemIndex;
    }
    else {
        if (arr[middleElemIndex] > value) {
            return bsearch(arr, value, startIndex, middleElemIndex - 1);
        }
        else {
            return bsearch(arr, value, middleElemIndex, endIndex);
        }
    }
}

console.log(bsearch(numArray, 432));