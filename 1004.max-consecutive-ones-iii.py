#
# @lc app=leetcode id=1004 lang=python3
#
# [1004] Max Consecutive Ones III
#

# @lc code=start
from collections import deque

class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        head = 0
        tail = 0

        maxLength = -1
        zeroIndexes = deque([])

        while tail < len(nums):
            if nums[tail] == 0:
                if len(zeroIndexes) == k:
                    maxLength = max(maxLength, tail-head)
                    head = (zeroIndexes.popleft() if k > 0 else tail) + 1

                if k != 0:
                    zeroIndexes.append(tail)

            tail += 1

        return max(maxLength, tail-head)
        
# @lc code=end

nums = [0,0,1,1,1,0,0]
k = 0

soln = Solution()
rez = soln.longestOnes(nums, k)
print(rez)
