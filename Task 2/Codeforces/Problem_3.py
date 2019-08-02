n = input()
k = input()
flag = 0
table = []
for i in range (int(n)):
    table.insert(i, input())
for i in range (int(n)):
    if(int(table[i])>int(k)):
        flag+=1
print(flag)
