#
# @lc app=leetcode id=3 lang=python3
# 
# [3] Longest Substring Without Repeating Characters
#


# @lc code=start
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
      window = []
      
      longest = 0
      for ch in s:
        if (ch in window):
          longest = max(longest, len(window))
          window = window[window.index(ch)+1:]
        window.append(ch)

      longest = max(longest, len(window))
      return longest
    
# @lc code=end

soln = Solution()
soln.lengthOfLongestSubstring(" ")