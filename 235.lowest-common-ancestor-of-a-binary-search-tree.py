#
# @lc app=leetcode id=235 lang=python3
#
# [235] Lowest Common Ancestor of a Binary Search Tree
#

# @lc code=start
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x, left=None, right=None):
        self.val = x
        self.left = left
        self.right = right

class Solution:
    def getPathToNode(self, node: TreeNode, target: int, path: List[TreeNode]):
        if node == None:
            return
        
        thisPath = path + [node]

        if node.val == target:
            return thisPath
        
        p1 = self.getPathToNode(node.left, target, thisPath)
        p2 = self.getPathToNode(node.right, target, thisPath)
        return p1 if p1 is not None else p2
    
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        path1 = self.getPathToNode(root, p.val, [])
        path2 = self.getPathToNode(root, q.val, [])

        for n in reversed(path1):
            if n in path2:
                return n
        
# @lc code=end

n5 = TreeNode(5)
n3 = TreeNode(3)
n9 = TreeNode(9)
n7 = TreeNode(7)
n4 = TreeNode(4, n3, n5)
n0 = TreeNode(0)
n8 = TreeNode(8, n7, n9)
n2 = TreeNode(2, n0, n4)
root = TreeNode(6, n2, n8)

soln = Solution()
rez = soln.lowestCommonAncestor(root, n2, n4)
print(rez.val)
