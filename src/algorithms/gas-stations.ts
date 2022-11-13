/*
Given two integer arrays A and B of size N. There are N gas stations along a circular route, where the amount of 
gas at station i is A[i].

You have a car with an unlimited gas tank and it costs B[i] of gas to travel from station i to its next station (i+1). 
You begin the journey with an empty tank at one of the gas stations.

Return the minimum starting gas station's index if you can travel around the circuit once, otherwise return -1.
*/

let stations = [1, 2];
let ranges = [2, 1];

function calculateMinGasStation(stations: number[], ranges: number[]) {

    for (let beginIndex = 0; beginIndex < stations.length; beginIndex++) {
        let i = beginIndex;
        let tankVolume = stations[beginIndex];
        let hasFullRound = false;
        do {

            if (tankVolume < ranges[i]) {
                console.log('low level for index' + beginIndex);
                break;
            }
            else {
                tankVolume -= ranges[i];
            }

            if (i === stations.length - 1) {
                i = 0;
            }
            else {
                i++;
            }
            if (i === beginIndex) hasFullRound = true;
            tankVolume += stations[i];
        }
        while (i != beginIndex);

        if (i === beginIndex && hasFullRound) return beginIndex;
    }

    return -1;
}

console.log(calculateMinGasStation(stations, ranges));