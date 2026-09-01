#
# @lc app=leetcode id=49 lang=python3
#
# [49] Group Anagrams
#

# @lc code=start
class Solution:
    # a = ascii 97
    # z = ascii 122
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        asciiStart = 97

        groups = {}
        for idx, s in enumerate(strs):
            repr = [0] * 26
            for ch in s:
                repr[ord(ch)-asciiStart] += 1

            k = tuple(repr)
            if k not in groups:
                groups[k] = []
            groups[k].append(strs[idx])

        return list(groups.values())

# @lc code=end

soln = Solution()
soln.groupAnagrams(["eat","tea","tan","ate","nat","bat"])