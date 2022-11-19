/* 
Given A, B, C, find whether C is formed by the interleaving of A and B.

Input Format:*

The first argument of input contains a string, A.
The second argument of input contains a string, B.
The third argument of input contains a string, C.
Output Format:

Return an integer, 0 or 1:
    => 0 : False
    => 1 : True
Constraints:

1 <= length(A), length(B), length(C) <= 150
Examples:

Input 1:
    A = "aabcc"
    B = "dbbca"
    C = "aadbbcbcac"

Output 1:
    1
    
Explanation 1:
    "aa" (from A) + "dbbc" (from B) + "bc" (from A) + "a" (from B) + "c" (from A)

Input 2:
    A = "aabcc"
    B = "dbbca"
    C = "aadbbbaccc"

Output 2:
    0

Explanation 2:
    It is not possible to get C by interleaving A and B.
*/

export function interleavingStrings(a: string, b: string, c: string): boolean {
    let aArr = a.split('');
    let bArr = b.split('');
    let cArr = c.split('');

    let indexA = 0;
    let indexB = 0;
    let i = 0;
    while (i < cArr.length) {
        console.log('---');
        console.log(i);
        console.log(cArr[i]);
        console.log(indexA);
        console.log(aArr[indexA]);
        console.log(indexB);
        console.log(bArr[indexB]);

        switch (cArr[i]) {
            case aArr[indexA]:
                indexA++;
                break;
            case bArr[indexB]:
                indexB++;
                break;
            default:
                return false;
        }
        i++;
    }
    return true;
}

console.log(interleavingStrings("aabcc", "dbbca", "aadbbcbcac"));

console.log(interleavingStrings("aabcc", "dbbca", "aadbbbaccc"));