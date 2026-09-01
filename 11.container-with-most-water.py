#
# @lc app=leetcode id=11 lang=python3
#
# [11] Container With Most Water
#

# @lc code=start
class Solution:
    def maxArea(self, heights: List[int]) -> int:
        head = 0
        tail = len(heights)-1

        largest = -1
        while head != tail:
            headHeight = heights[head]
            tailHeight = heights[tail]
            area = min(headHeight, tailHeight) * (tail - head)
            largest = max(largest, area)
            if headHeight < tailHeight:
                head += 1
            else:
                tail -= 1
        
        return largest

# @lc code=end
soln = Solution()
rez = soln.maxArea([8,7,2,1])
print(rez)
