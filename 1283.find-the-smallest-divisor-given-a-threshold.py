#
# @lc app=leetcode id=1283 lang=python3
#
# [1283] Find the Smallest Divisor Given a Threshold
#

# @lc code=start
import math

class Solution:
    def smallestDivisor(self, nums: List[int], threshold: int) -> int:
        low = 1
        high = max(nums)
        
        while low < high:
            divisor = (high-low)//2 + low
            thisSum = sum(math.ceil(n/divisor) for n in nums)

            if thisSum <= threshold:
                high = divisor
            else:
                low = divisor + 1

        return low

# @lc code=end

nums = [44,22,33,11,1]
threshold = 5

soln = Solution()
rez = soln.smallestDivisor(nums, threshold)
print(rez)
