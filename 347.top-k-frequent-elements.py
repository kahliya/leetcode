#
# @lc app=leetcode id=347 lang=python3
#
# [347] Top K Frequent Elements
#

# @lc code=start
import heapq

class Solution:
    def soln_minHeap(self, nums: List[int], k: int) -> List[int]:
        # n = counting the frequencies
        # O(n log k) - add all into size-k heap

        counts = {}
        heap = []

        # count the frequencies - O(n)
        for n in nums:
            counts[n] = counts.get(n, 0) + 1


        # cannot sort, that is O(n log n)        
        # add all counts into a heap O(n log n)
        # retain size-k max-heap - O(n log k)
        for n, freq in counts.items():
            heapq.heappush(heap, (freq, n))

            if len(heap) > k:
                heapq.heappop(heap)

        return list(map(lambda x: x[1], heap))     

    def soln_bucketSort(self, nums: List[int], k: int) -> List[int]:
        counts = {}
        freq_buckets = [[] for _ in nums]

        # count the frequencies - O(n)
        for n in nums:
            counts[n] = counts.get(n, 0) + 1

        # sort each n into the index matching it's frequency - O(n)
        for n, freq in counts.items():
            freq_buckets[freq].append(n)

        # append all buckets into one list - O(n)
        rez = []
        for bucket in freq_buckets:
            rez.append(*bucket)

        return rez[:k]

    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        return self.soln_minHeap(nums, k)
        
        
# @lc code=end

soln = Solution()
rez = soln.topKFrequent([4,1,-1,2,-1,2,3], 2)
print(rez)