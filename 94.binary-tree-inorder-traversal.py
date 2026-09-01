#
# @lc app=leetcode id=94 lang=python3
#
# [94] Binary Tree Inorder Traversal
#

# @lc code=start

from collections import deque

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    # Not needed in the end, but hey good exploration
    # def buildTree(self, repr) -> List[TreeNode]:
    #     print(repr)
    #     root = TreeNode(repr[0])
    #     parents = deque([root])
    #     repr = deque(repr[1:])

    #     while len(repr) > 0:
    #         thisParent = parents.popleft()

    #         try:
    #             left = repr.popleft()
    #             if left is not None:
    #                 leftNode = TreeNode(left)
    #                 thisParent.left = leftNode
    #                 parents.append(leftNode)

    #             right = repr.popleft()
    #             if right is not None:
    #                 rightNode = TreeNode(right)
    #                 thisParent.right = rightNode
    #                 parents.append(rightNode)
    #         except IndexError:
    #             break

    #     return root            

    def traverseInorderRecursive(self, root: Optional[TreeNode]) -> List[int]:
        leftPath = self.traverseInorder(root.left) if root.left is not None else []
        rightPath = self.traverseInorder(root.right) if root.right is not None else []
        return leftPath + [root.val] + rightPath
                
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        return self.traverseInorderIterative(root) if root is not None else []

# @lc code=end
