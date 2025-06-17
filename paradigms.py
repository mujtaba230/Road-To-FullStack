
# Imperative

numbers = [1, 2, 3, 4, 5, 6]
result = []

for num in numbers:
    if num % 2 == 0:
        square = num * num
        result.append(square)

print("Imperative:", result)  


# Declarative approach 

numbers = [1, 2, 3, 4, 5, 6]
result = list(map(lambda x: x * x, filter(lambda x: x % 2 == 0, numbers)))

print("Declarative:", result)  




# Functional approach 

from typing import List

def is_even(n: int) -> bool:
    return n % 2 == 0

def square(n: int) -> int:
    return n * n

def process(numbers: List[int]) -> List[int]:
    return list(map(square, filter(is_even, numbers)))



numbers = [1, 2, 3, 4, 5, 6]
result = process(numbers)

print("Functional:", result) 
