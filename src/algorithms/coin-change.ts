/* Function must calculate change in coins if it's possible to give, if not return -1 */

const inputAmount = 10;
const inputCoins = [5, 3, 2];

export function calculateCoins(amount: number, coins: number[]) {
    const combinations = [];


    // if not possible
    if (amount === 0) return true;

    // if possible
    coins.forEach(coin => {
        if (amount > coin) {
            combinations.push(calculateCoins(amount - coin, coins));
        }
        else if (amount === coin) {
            combinations.push(true);
        }
        else {
            combinations.push(false);
        }

    });

    return combinations.filter(combination => combination).length;

}