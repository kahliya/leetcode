/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
    let rez: string = "";
    let head: number = 0;
    let tail: number = 0;

    const iterAroundPivot = () => {
        while (true) {
            if (head < 0 || tail >= s.length) break;
            if (s[head] === s[tail]) {
                if (tail-head+1 > rez.length) {
                    rez = s.substring(head, tail+1);
                }
                head--;
                tail++;
                continue;
            }
            break;
        }
    }
    
    // Iterate each char as pivot
    for (let idx = 0; idx < s.length; idx++) {
        // Odd case
        head = idx-1;
        tail = idx+1;
        iterAroundPivot();
        
        // Even case (behind)
        head = idx-1;
        tail = idx;
        iterAroundPivot();

        // Even case (in front)
        head = idx;
        tail = idx+1;
        iterAroundPivot();
    }

    // Single char case
    if (s.length === 1) return s;

    // No match case
    if (rez.length === 0) return s[0];

    return rez;
};

// @lc code=end
const rez = longestPalindrome("babad");
console.log(rez);
