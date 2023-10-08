export function sum(n) {
    var v = x => sum(n + x);
    v.valueOf = () => n;
    return v;
}

console.log((sum(1)(3)(5)).valueOf());