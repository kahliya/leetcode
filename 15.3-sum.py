#
# @lc app=leetcode id=15 lang=python3
#
# [15] 3Sum
#

# @lc code=start
class Solution:
    def twoSum(self, nums: list[int], startIdx: int, target) -> list[list[int]]:
        left = startIdx
        right = len(nums)-1

        pairs = []
        while left < right:
            thisLeft = nums[left]
            thisRight = nums[right]
            curr = thisLeft + thisRight

            if curr < target:
                while nums[left] == thisLeft and left < right:
                    left += 1
            elif curr > target: 
                while nums[right] == thisRight and left < right:
                    right -= 1
            elif curr == target:
                pairs.append([thisLeft, thisRight])
                while nums[left] == thisLeft and left < right:
                    left += 1
                while nums[right] == thisRight and left < right:
                    right -= 1
        
        return pairs

    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums = sorted(nums)

        prevN = None
        triplets = []
        for idx, n in enumerate(nums):
            if (n == prevN):
                continue
            prevN = n
            complement = -n
            for x in self.twoSum(nums, idx+1, complement):
                triplets.append(x+[n])

        return triplets
        
# @lc code=end

soln = Solution()
soln.threeSum([0,1,1])