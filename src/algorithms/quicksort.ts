export function quickSort(arr: number[]): number[] {

    // console.log(arr);

    if (arr.length === 1) return arr;
    else if (arr.length === 0) return [];

    const hookElement = arr[(Math.round(Math.random() * 100)) % arr.length];

    const smallerElems: number[] = [];
    const biggerElems: number[] = [];

    arr.forEach(elem => elem > hookElement ? biggerElems.push(elem) : smallerElems.push(elem));

    return quickSort(smallerElems).concat(quickSort(biggerElems));
}

console.log(quickSort([1, 3, 7, 22, 17, 0]));