#
# @lc app=leetcode id=98 lang=python3
#
# [98] Validate Binary Search Tree
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def checkBranchValidity(self, node: TreeNode, low, high) -> bool:
        thisValid = True if node.val > low and node.val < high else False
        leftValid = self.checkBranchValidity(node.left, low, node.val) if node.left is not None else True
        rightValid = self.checkBranchValidity(node.right, node.val, high) if node.right is not None else True
       
        # print(f"@{node.val} {low} - {high}:", thisValid, leftValid, rightValid)
        return thisValid and leftValid and rightValid

    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        left = self.checkBranchValidity(root.left, float('-inf'), root.val) if root.left is not None else True
        right = self.checkBranchValidity(root.right, root.val, float('inf')) if root.right is not None else True
        return left and right
    
# @lc code=end

b = TreeNode(2147483647)
root = TreeNode(-2147483648, None, b)

soln = Solution()
rez = soln.isValidBST(root)
print(rez)
