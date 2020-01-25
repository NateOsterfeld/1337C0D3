# Problem: Are the two sorted lists rotations of eachother? If they are, then this means they contain the same numbers in order, though starting at different spots

def is_rotation(list1, list2):


list1 = [1, 2, 3, 4, 5, 6, 7]

list2a = [4, 5, 6, 7, 8, 1, 2, 3]
print(is_rotation(list1, list2a)) # False.

list2b = [4, 5, 6, 7, 1, 2, 3]
print(is_rotation(list1, list2b)) # True.

list2c = [4, 5, 6, 9, 1, 2, 3]
print(is_rotation(list1, list2c)) # False.

list2d = [4, 6, 5, 7, 1, 2, 3]
print(is_rotation(list1, list2d)) # False.

list2e = [4, 5, 6, 7, 0, 2, 3]
print(is_rotation(list1, list2e)) # False.

list2f = [1, 2, 3, 4, 5, 6, 7]
print(is_rotation(list1, list2f)) # True.
