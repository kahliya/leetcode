/*
 * @lc app=leetcode id=3739 lang=typescript
 *
 * [3739] Count Subarrays With Majority Element II
 */

// @lc code=start
function countMajoritySubarrays(nums: number[], target: number): number {
  // Same algorithm as LC 3737

  // Idea:
  //    > Count the number of arrays with a given score.
  //    > Along w/ some math simplifications!
  // Source:
  //    > Not me
  //    > https://leetcode.com/problems/count-subarrays-with-majority-element-i/solutions/8356776/3-approaches-explained-brute-force-prefi-g8st/?envType=daily-question&envId=2026-06-25

  // The idea is to encode the values such that:
  //    > If == target, +1. Else, -1.
  //    > This give us the score of a given array.
  //    > If the score is positive, target is a majority!

  // Using that, we can imagine using the prefix sum method to sum up the scores
  // e.g. for target=2
  // with the input:      1  1  2  1  2
  // we get scores of:   -1 -1  1 -1  1
  // to prefix sums of : -1 -2 -1 -2 -1

  // The score of a subarray would be pf[r] - pf[l].
  // We want those with positive scores, so pf[r] - pf[l] > 0.

  // The naive approach here is
  //     > complete the prefix sum calculations normally
  //     > then iterate, finding the scores using pf[r] - pf[l] > 0.
  // But, this is O(n^2) as we have to iterate every l & r.

  // To convert it to O(n), there are 2 key understandings.

  // #1. Simplify the pf[r] - pf[l] > 0 formula
  // We can rewrite it as pf[r] > pf[l]
  // So we count arrays as long as the previous sum < current sum

  // #2. Due to (1), we don't need the individual prefix sums!
  // What we want is the # of previous sums LESS than the current score.
  // Using the above input,
  // @ idx=1, sum=-1, 0 smaller
  // @ idx=2, sum=-2, 0 smaller
  // @ idx=3, sum=-1, 1 smaller (idx 2)
  // @ idx=4, sum=-2, 0 smaller
  // @ idx=5, sum=-1, 2 smaller (idx 2 & 4)

  // Sum that up & we get the answer of 3.
  // > [3..3] -> [2]
  // > [3..5] -> [2, 1, 2]
  // > [5..5] -> [2]

  // === ACTUAL CODE STARTS HERE ===
  // Possible scores range from -n to n.
  // To represent this in an array, offset by +n to get [0, 2n]
  // The value at pf[score] represents the number of arrays with that score so far.
  const n: number = nums.length;
  const subarraysWithScore: number[] = new Array(2 * n + 1).fill(0);

  // Initialize pf[n] = 1 (this is score = 0, rmb the offset +n)
  // Tbh, I still don't get the reason for this step.
  // But I think it's because the score of an empty array is 0?
  subarraysWithScore[n] = 1;

  // Keep track of the following:
  //    > Current running score
  //    > # of arrays w/ lower score (so you don't have to sum @ every step)
  //    > Running total so far (the answer)
  let score = n;
  let lowerScoreArrays = 0;
  let rez = 0;

  for (const x of nums) {
    if (x === target) {
      // Before we increase score,
      // Add count @ the previous score to the running total
      lowerScoreArrays += subarraysWithScore[score];

      // Increase score & counter after
      score++;
      subarraysWithScore[score]++;
    } else {
      // Decrease score first
      score--;

      // Remove previous count from the running total
      lowerScoreArrays -= subarraysWithScore[score];

      // Finally, update the count.
      subarraysWithScore[score]++;
    }

    rez += lowerScoreArrays;
  }

  return rez;
}

// @lc code=end

