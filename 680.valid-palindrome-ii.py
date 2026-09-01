#
# @lc app=leetcode id=680 lang=python3
#
# [680] Valid Palindrome II
#

# @lc code=start
class Solution:
    def validate(self, s: str, head: int, tail: int, branchable: bool) -> bool:
        while head <= tail:
            headStr = s[head]
            tailStr = s[tail]

            if headStr == tailStr:
                head += 1
                tail -= 1
            else:
                if branchable:
                    return self.validate(s, head+1, tail, False) or self.validate(s, head, tail-1, False)
                else:
                    return False

        return True

    def validPalindrome(self, s: str) -> bool:
        return self.validate(s, 0, len(s)-1, True)

# @lc code=end

soln = Solution()
rez = soln.validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga")
print(rez)
