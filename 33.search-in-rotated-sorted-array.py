#
# @lc app=leetcode id=33 lang=python3
#
# [33] Search in Rotated Sorted Array
#

# @lc code=start
class Solution:    
    def binarySearchForBase(self, nums: List[int], prev: int, low: int, high: int) -> int:
        center = (high-low)//2 + low
        curr = nums[center]
        
        if low == high or low == high-1:
            if nums[low] <= nums[high]:
                # array was not rotated
                return 0
            if nums[low] > nums[high]:
                # high is the base index
                return high

        if curr > prev:
            # still ascending, continue searching ->>, rebase on curr
            return self.binarySearchForBase(nums, curr, center, high)
        elif curr < prev:
            # found a reversal, search <<-, continue using prev
            return self.binarySearchForBase(nums, prev, low, center)

    def binarySearchForTargetRotated(self, rotate: int, nums: List[int], target: int, low: int, high: int) -> int:
        center = (high-low)//2 + low
        rCenter = (center + rotate) % len(nums)

        curr = nums[rCenter]
        if curr == target:
            return rCenter
        elif curr != target and (low == high or low == high-1):
            rLow = (low + rotate) % len(nums)
            rHigh = (high + rotate) % len(nums)
            currLow = nums[rLow]
            currHigh = nums[rHigh]
            return rLow if currLow == target else rHigh if currHigh == target else -1
        elif curr > target:
            return self.binarySearchForTargetRotated(rotate, nums, target, low, center)
        elif curr < target:
            return self.binarySearchForTargetRotated(rotate, nums, target, center, high)
            

    def search(self, nums: List[int], target: int) -> int:
        baseIdx = self.binarySearchForBase(nums, nums[0], 0, len(nums)-1)
        print("found base @", baseIdx)
        return self.binarySearchForTargetRotated(baseIdx, nums, target, 0, len(nums)-1)
        
        
        
# @lc code=end

soln = Solution()
rez = soln.search([3, 1], 3)
print(rez)
