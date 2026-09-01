#
# @lc app=leetcode id=3121 lang=python3
#
# [3121] Count the Number of Special Characters II
#

# @lc code=start
# Basic
class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        INVALID = -float('inf')
        ascii = [0] * 123
        for c in word:
            a = ord(c)
            
            if c.isupper():
                other = ord(c.lower())
                if ascii[other] == 0:
                    ascii[other] = INVALID
                elif ascii[other] < 0 and ascii[other] != INVALID:
                    ascii[other] *= -1

            elif c.islower():
                other = ord(c.upper())
                if ascii[other] < 0:
                    ascii[a] = INVALID

            ascii[a] -= 1

        return len([x for x in ascii[97:] if x > 0])

# @lc code=end

soln = Solution()
rez = soln.numberOfSpecialChars("EE")
print("Out:", rez)
