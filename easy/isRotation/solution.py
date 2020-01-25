# Problem: Are the two sorted lists rotations of eachother? If they are, then this means they contain the same numbers in order, though starting at different spots
# Approach: Find the starting number of the first array in the second array by finding the index of the second array that is equal to the index of the first in arr1
#           Begin looping, checking that each next numbers are equal. Once the second array reaches its end, start the pointer back to 0.
#           Continue this until the first array reaches its end


def is_rotation(list1, list2):
    if (len(list1) != len(list2)):
        return False

    p1 = 0
    p2 = -1

    for i in range(len(list2)):
        if (list2[i] == list1[p1]):
            p2 = i

    if (p2 == -1):
        return False

    while (p1 < len(list1)):
        el1 = list1[p1]
        el2 = list2[p2 % len(list2)]
        if (el1 != el2):
            return False

        p1 += 1
        p2 += 1

    return True


list1 = [1, 2, 3, 4, 5, 6, 7]

list2a = [4, 5, 6, 7, 8, 1, 2, 3]
print(is_rotation(list1, list2a))  # False.

list2b = [4, 5, 6, 7, 1, 2, 3]
print(is_rotation(list1, list2b))  # True.

list2c = [4, 5, 6, 9, 1, 2, 3]
print(is_rotation(list1, list2c))  # False.

list2d = [4, 6, 5, 7, 1, 2, 3]
print(is_rotation(list1, list2d))  # False.

list2e = [4, 5, 6, 7, 0, 2, 3]
print(is_rotation(list1, list2e))  # False.

list2f = [1, 2, 3, 4, 5, 6, 7]
print(is_rotation(list1, list2f))  # True.


# Alt Solution
# def is_rotation(list1, list2):
#     if (len(list1) != len(list2)):
#         return False
#     if (list1[0] not in list2):
#         return False

#     p1 = 0
#     p2 = list2.index(list1[0])

#     while p1 < len(list1):
#         if (p2 == len(list2)):
#             p2 = 0

#         if (list1[p1] != list2[p2]):
#             return False

#         p1 += 1
#         p2 += 1

#     return True


# Alt Solution
# def is_rotation(list1, list2):
#     if len(list1) != len(list2):
#         return False
#     key = list1[0]
#     key_loc = -1
#     for i in range(len(list2)):
#         if list2[i] == key:
#             key_loc = i
#             break
#     if key_loc == -1:
#         return False
#     for i in range(len(list1)):
#         j = (key_loc + i) % len(list1)
#         if list1[i] != list2[j]:
#             return False
#     return True
