function cartesianProduct1(arr1: any[], arr2: any[], ...arr3: any[][] | undefined) {
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

    return arr3 ? cartesianProduct1(result, arr3) : result;
}