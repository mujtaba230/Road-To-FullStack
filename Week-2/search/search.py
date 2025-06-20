def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  
    return -1  

def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid 
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1  


arr = list(map(int, input("Enter numbers (space separated): ").split()))
target = int(input("Enter the number to search: "))


arr_sorted = sorted(arr)

print("Linear Search Result (index):", linear_search(arr, target))
print("Binary Search Result (index):", binary_search(arr_sorted, target))