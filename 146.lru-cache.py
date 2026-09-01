#
# @lc app=leetcode id=146 lang=python3
#
# [146] LRU Cache
#

# @lc code=start
class Node:
    def __init__(self, key=None, val=None):
        self.key = key
        self.val = val
        self.next = None
        self.prev = None

class LRUCache:
    def __init__(self, capacity: int):
        self.cache = {} # Dictionary of nodes (doubly linked-list)
        self.capacity = capacity
        
        self.head = Node()
        self.tail = Node()
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

    def _insert(self, node):
        # Insert at the head
        node.prev = self.head
        node.next = self.head.next

        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        # Update the LRU history
        if key not in self.cache:
            return -1
        
        n = self.cache[key]
        self._remove(n)
        self._insert(n)
        return n.val

    def put(self, key: int, value: int) -> None:
        # Update key if key exists. Else add key to cache.
        n = self.cache[key] if key in self.cache else Node(key, value)
        n.val = value

        if key in self.cache:
            self._remove(n)

        self._insert(n)
        self.cache[key] = n

        # If len(keys) > capacity, remove from tail
        if len(self.cache.keys()) > self.capacity:
            del self.cache[self.tail.prev.key]
            self._remove(self.tail.prev)


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
# @lc code=end

# c = LRUCache(2)
# c.put(1, 1); # cache is {1=1}
# c.put(2, 2); # cache is {1=1, 2=2}
# rez1 = c.get(1);    # return 1
# c.put(3, 3); # LRU key was 2, evicts key 2, cache is {1=1, 3=3}
# rez2 = c.get(2);    # returns -1 (not found)
# c.put(4, 4); # LRU key was 1, evicts key 1, cache is {4=4, 3=3}
# rez3 = c.get(1);    # return -1 (not found)
# rez4 = c.get(3);    # return 3
# rez5 = c.get(4);    # return 4

c = LRUCache(2)
c.put(2, 1) # {2 = 1}
c.put(2, 2) # {2 = 2}
print(c.get(2))
c.put(1, 1)
c.put(4, 1)
print(c.get(2))

print(list(map(lambda item: (item[0], item[1].val), c.cache.items())))

