#
# @lc app=leetcode id=704 lang=python3
#
# [704] Binary Search
#

# @lc code=start
class Solution:
    def binarySearch(self, nums: List[int], target: int, low: int, high: int) -> int:       
        middle = (high-low)//2+low
        thisNum = nums[middle]

        if thisNum == target:
            # print(f"found {thisNum} @ ({low}, {high})")
            return middle
        
        elif thisNum != target and (low == high or low == high-1):
            return -1
        
        elif thisNum < target:
            return self.binarySearch(nums, target, middle, high)

        elif thisNum > target:
            return self.binarySearch(nums, target, low, middle)

    def search(self, nums: List[int], target: int) -> int:
        return self.binarySearch(nums, target, 0, len(nums))
        

# @lc code=end

soln = Solution()
print(soln.search([5], 5))
