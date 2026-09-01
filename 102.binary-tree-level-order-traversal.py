#
# @lc app=leetcode id=102 lang=python3
#
# [102] Binary Tree Level Order Traversal
#

# @lc code=start
# Definition for a binary tree node.

# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    path = {}

    def traverseLevels(self, node: Optional[TreeNode], level: int) -> List[List[int]]:
        self.path.setdefault(level, []).append(node.val)
        
        if node.left is not None:
            self.traverseLevels(node.left, level+1)

        if node.right is not None:
            self.traverseLevels(node.right, level+1)


    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        self.path = {}
        self.traverseLevels(root, 0) if root is not None else []
        return list(self.path.values())

# @lc code=end
# a = TreeNode(15)
# b = TreeNode(7)
# c = TreeNode(20, a, b)
# d = TreeNode(9)
# root = TreeNode(3, d, c)


# soln = Solution()
# rez = soln.levelOrder(root)
# print(rez)

