n,m,a=[int(x) for x in input().split()]
if n>a and m>a:
    if n%a!=0:
        b=n//a+1
    else:
        b=n//a
    if m%a!=0:
        c=m//a+1
    else:
        c=m//a
    d=b*c
elif n>a and m<a:
    if n%a!=0:
        b=n//a+1
    else:
        b=n//a
    d=b
elif n<a and m>a:
    if m%a!=0:
        c=m//a+1
    else:
        c=m//a
    d=c
elif m<a and n<a:
    d=1
elif m==a and n==a:
    d=1
elif n>a and m==a:
     if n%a!=0:
        b=n//a+1
     else:
         b=n//a
     d=b
elif m>a and n==a:
    if m%a!=0:
        c=m//a+1
    else:
        c=m//a
    d=c
else:
    d=1
print(d)
