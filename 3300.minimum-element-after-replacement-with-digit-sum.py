#
# @lc app=leetcode id=3300 lang=python3
#
# [3300] Minimum Element After Replacement With Digit Sum
#

# @lc code=start
# Basic
# class Solution:
#     def minElement(self, nums: List[int]) -> int:
#         rez = float('inf')

#         for n in nums:
#             curr = 0    
#             digits = list(str(n))
#             for d in digits:
#                 curr += int(d)

#             if rez > curr:
#                 rez = curr

#         return rez
    
# Better
class Solution:
    def minElement(self, nums: List[int]) -> int:
        rez = float('inf')

        for n in nums:
            curr = 0
            while n > 0:
                digit = n % 10
                curr += digit
                n //= 10

            if rez > curr:
                rez = curr               

        return rez
        
# @lc code=end

soln = Solution()
rez = soln.minElement([14, 2, 3])

print(rez)
