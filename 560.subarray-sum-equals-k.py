#
# @lc app=leetcode id=560 lang=python3
#
# [560] Subarray Sum Equals K
#

# @lc code=start
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        equalsK = 0
        known = {}
        current = 0
        for n in nums:
            current += n
            complement = current - k
            equalsK += known[complement] if complement in known else 0
            if complement == 0:
                equalsK += 1
            
            known[current] = known.setdefault(current, 0) + 1

        # print(equalsK, known)
        return equalsK
            

# @lc code=end

soln = Solution()
soln.subarraySum([100, 1, 2, 3, 4], 3)
