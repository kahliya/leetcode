#
# @lc app=leetcode id=1 lang=python3
#
# [1] Two Sum
#

# @lc code=start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for idx, n in enumerate(nums):
            complement = target - n
            matches = [i for i, val in enumerate(nums) if val == complement and i != idx]
            if len(matches) == 0: 
                continue
            return [idx, matches[0]]
        
# @lc code=end

