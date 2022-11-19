function nextBigger(n) {
    const digits = n.toString().split('');
    const variants = [];
    digits.forEach(digit => variants.push(digits));
    let combinations = Array.from(new Set(cartesianProduct(...variants)
        .map(combination => +combination.join(''))
        .sort((a, b) => a > b ? 1 : -1)));

    let elemIndex = combinations.indexOf(n) + 1;
    while (elemIndex < combinations.length) {
        if (combinations[elemIndex] > n) {
            if (containsSameDigits(digits, combinations[elemIndex].toString().split(''))) {
                return combinations[elemIndex];
            }
        }
        elemIndex++;
    }
    return null;
}

function containsSameDigits(digits1, digits2) {
    digits1 = digits1.slice();
    let i2 = digits2.indexOf(digits1[0]);
    if (i2 !== -1) {
        digits1.splice(0, 1);
        digits2.splice(i2, 1);
        if (digits1.length === 0 && digits2.length === 0) return true;
        console.log(digits1, digits2);
        return containsSameDigits(digits1, digits2);
    }

    return false;

}

function cartesianProduct(arr1, arr2, ...arr3) {
    const result = [];

    if (!arr2) {
        return arr1;
    }

    arr1.forEach(elem1 => {
        arr2.forEach(elem2 => {
            result.push([
                ...(Array.isArray(elem1) ? elem1 : [elem1]),
                elem2
            ]);
        });
    });

    return arr3?.length > 0 ? cartesianProduct(result, ...arr3) : result;
}