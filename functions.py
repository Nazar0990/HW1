def product_in_range(start, end):
    if start > end:
        start, end = end, start
    result = 1
    for number in range(start, end + 1):
        result *= number
    return result

print("___________________________________________________")

def find_max(numbers):
    if not numbers:
        return None
    max_val = numbers[0]
    for num in numbers:
        if num > max_val:
            max_val = num
    return max_val


print("___________________________________________________")

def find_sum(numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print("___________________________________________________")

def count_types(numbers):
    a = 0
    b = 0
    positive = 0
    negative = 0
    for num in numbers:
        if num % 2 == 0:
            even += 1
        else:
            odd += 1
        if num > 0:
            positive += 1
        elif num < 0:
            negative += 1
    return a, b, positive, 

print("___________________________________________________")

def all_int(numbers):
    for item in numbers:
        if type(item) != int:
            return False
    return True

print("___________________________________________________")

def is_integers(lst):
    for item in lst:
        if type(item) != int:
            return False
    return True


print("___________________________________________________")

def is_fibo(n):
    def a(x):
        return int(x  0.5)  2 == x
    return a(5*n*n + 4) or a(5*n*n - 4)

def find_fibo(num):
    result = []
    for num in lst:
        if is_fibo(num):
            result.append(num)
    return result

