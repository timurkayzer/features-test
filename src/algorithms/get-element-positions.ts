// Return last and first position of element in a sorted array
// Input: [1,2,3,4,4,5,6] , 4
// Output: [3,4]

let inputArray1 = [1, 2, 3, 4, 4, 5, 6];
let inputNumber1 = 4;

console.log(getElementPositions(inputArray1, inputNumber1));

export function getElementPositions(arr: number[], elem: number): number[] {
    let defaultData = [-1, -1];

    let foundIndex = binarySearch(arr, elem);

    if (foundIndex !== null) {
        defaultData = [foundIndex, foundIndex];
        for (let i = 1; (foundIndex + 1) < arr.length && (foundIndex - 1) >= 0; i++) {
            if (arr[foundIndex + i] === elem || arr[foundIndex - i] === elem) {
                if (arr[foundIndex + i] === elem) {
                    defaultData[1] = foundIndex + i;
                }
                if (arr[foundIndex - i] === elem) {
                    defaultData[0] = foundIndex - i;
                }
            }
            else {
                break;
            }
        }
    }

    return defaultData;
}

function binarySearch(arr: number[], elem: number, startIndex = 0, endIndex = 0): number | null {
    endIndex ||= arr.length;
    const middleIndex = Math.round((startIndex + endIndex) / 2);

    if (arr[middleIndex] === elem) return middleIndex;
    else {
        if (endIndex - startIndex <= 1 && arr[middleIndex] !== elem) {
            return null;
        }
        if (arr[middleIndex] > elem) {
            return binarySearch(arr, elem, startIndex, middleIndex - 1);
        }
        else {
            return binarySearch(arr, elem, middleIndex + 1, endIndex);
        }
    }

}