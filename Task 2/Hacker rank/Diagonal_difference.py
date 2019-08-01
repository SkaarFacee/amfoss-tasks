
import math
import os
import random
import re
import sys

#
# Complete the 'diagonalDifference' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
#

def diagonalDifference(arr):
    flag1 = 0
    flag2 = 0
    for a in range(len(arr)):
        for b in range(len(arr[a])):
            if(a == b):
                flag1 += arr[a][b]
            if(a + b == len(arr[a])-1):
                flag2 += arr[a][b]
    return abs(flag1 - flag2)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    arr = []

    for _ in range(n):
        arr.append(list(map(int, input().rstrip().split())))

    result = diagonalDifference(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
