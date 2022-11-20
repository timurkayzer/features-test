const fibMap = new Map();

let timer = 0;

export function fibonacci(n: number): number {
    if (fibMap.get(n)) return fibMap.get(n);
    else {
        let res: number;
        if (n === 1 || n === 2) {
            res = 1;
        }
        else {
            timer++;
            res = fibonacci(n - 1) + fibonacci(n - 2);
            fibMap.set(n, res);
        }
        return res;
    }

};

console.log(fibonacci(100));
console.log(timer);