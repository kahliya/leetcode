#
# @lc app=leetcode id=34 lang=python3
#
# [34] Find First and Last Position of Element in Sorted Array
#

# @lc code=start
class Solution:
    def locateElementRange(self, nums, elem):
        low = elem-1 
        high = elem-1
        thisLow = nums[low]
        thisHigh = nums[high]
        thisElement = nums[elem]
        
        # while thisLow == thisElement:
        #     low -= 1
        #     thisLow = nums[low]
        #     if low < 0:
        #         low = 0
        #         break

        # while thisHigh == thisElement:
        #     high += 1
        #     if high == len(nums):
        #         high = len(nums)-1
        #         break

        return [low, high]
        

    def binarySearch(self, nums: List[int], target: int, low: int, high: int) -> List[int]:
        center = (high-low)//2 + low
        thisCenter = nums[center]

        if thisCenter == target:
            return center
        
        elif thisCenter != target and (low == high or low == high-1):
            return -1
        
        elif thisCenter > target:
            return self.binarySearch(nums, target, low, center)

        elif thisCenter < target:
            return self.binarySearch(nums, target, center, high)

    def searchRange(self, nums: List[int], target: int) -> List[int]:
        targetIdx = self.binarySearch(nums, target, 0, len(nums)-1)
        return self.locateElementRange(nums, targetIdx) if targetIdx > 0 else [-1, -1]
        
# @lc code=end

soln = Solution()
rez = soln.searchRange([5,7,8,8,8,9,10], 8)
print("rez:", rez)