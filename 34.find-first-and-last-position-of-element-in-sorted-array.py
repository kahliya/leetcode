#
# @lc app=leetcode id=34 lang=python3
#
# [34] Find First and Last Position of Element in Sorted Array
#

# @lc code=start
class Solution:
    def binarySearchHead(self, nums: List[int], target: int, low: int, high: int) -> List[int]:
        center = (high-low)//2 + low
        thisCenter = nums[center]

        if low == high or low == high-1:
            return low if nums[low] == target else high if nums[high] == target else -1
        elif thisCenter >= target:
            return self.binarySearchHead(nums, target, low, center)
        elif thisCenter < target:
            return self.binarySearchHead(nums, target, center, high)

    def binarySearchTail(self, nums: List[int], target: int, low: int, high: int) -> List[int]:
        center = (high-low)//2 + low
        thisCenter = nums[center]
        
        if (low == high or low == high-1):
            return high if nums[high] == target else low if nums[low] == target else -1
        elif thisCenter <= target:
            return self.binarySearchTail(nums, target, center, high)
        elif thisCenter > target:
            return self.binarySearchTail(nums, target, low, center)

    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if len(nums) == 0:
            return [-1, -1]
        
        head = self.binarySearchHead(nums, target, 0, len(nums)-1)
        if head == -1:
            return [-1, -1]
        
        tail = self.binarySearchTail(nums, target, head, len(nums)-1)
        return [head, tail]
        
# @lc code=end

soln = Solution()
rez = soln.searchRange([2, 2], 2)
print("rez:", rez)