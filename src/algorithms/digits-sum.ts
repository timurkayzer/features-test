export function countDigits(num) {
    if (num < 10) return num;
    return num % 10 + countDigits((num - num % 10) / 10);
}

console.log(countDigits(123));
console.log(countDigits(12356));
