#
# @lc app=leetcode id=543 lang=python3
#
# [543] Diameter of Binary Tree
#

# @lc code=start
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    pathLength = -1

    def traverseTree(self, node: TreeNode) -> List[int]:        
        if node is None:
            return 0

        left = self.traverseTree(node.left)
        right = self.traverseTree(node.right)

        self.pathLength = max(left+right, self.pathLength)

        return max(left, right) + 1

    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.traverseTree(root)
        return self.pathLength
        
# @lc code=end

n5 = TreeNode(5)
n4 = TreeNode(4)
n3 = TreeNode(3)
n2 = TreeNode(2, n4, n5)
root = TreeNode(1, n2, n3)

soln = Solution()
rez = soln.diameterOfBinaryTree(root)
print(rez)