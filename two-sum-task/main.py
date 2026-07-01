def two_sum(nums, target):
    num_map = {}

    for i, num in enumerate(nums):
        complement = target - num

        if complement in num_map:
            return sorted([i, num_map[complement]])

        num_map[num] = i

    return None


print(two_sum([2, 7, 11, 15], 9))