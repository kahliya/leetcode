/*
 * @lc app=leetcode id=2161 lang=typescript
 *
 * [2161] Partition Array According to Given Pivot
 */

// @lc code=start
function pivotArrayV1(nums: number[], pivot: number): number[] {
    const bef: number[] = [];
    const aft: number[] = [];
    const btw: number[] = [];

    for (const num of nums) {
        if (num === pivot) {
            btw.push(num)
        } else if (num < pivot) {
            bef.push(num)
        } else {
            aft.push(num)
        }
    }

    return bef.concat(btw, aft);
};

function pivotArray(nums: number[], pivot: number): number[] {
    let left: number = 0;
    let mid: number = 0;
    let right: number = 0;

    for (const num of nums) {
        if (num === pivot) {
            right++;
        } else if (num < pivot) {
            mid++;
        }
    }

    right += mid;
    const rez: number[] = new Array(nums.length);    

    for (const num of nums) {
        if (num === pivot) {
            rez[mid++] = num
        } else if (num < pivot) {
            rez[left++] = num
        } else {
            rez[right++] = num
        }
    }

    return rez;
};
// @lc code=end

const rez = pivotArray([9,12,5,10,14,3,10], 10);
console.log(rez);
