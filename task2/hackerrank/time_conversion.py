
import os
import sys

#
# Complete the timeConversion function below.
#
def timeConversion(s):
    flag = s.split(':')
    smallsplit=list(flag[2])
    if('12' in flag and 'A'in list(flag[2]) ):
        flag[0]='00'
        del smallsplit[3]
        del smallsplit[2]
        new= ""
        for x in smallsplit:
            new+=x
        return(str(flag[0]) + ":" + str(flag[1]) + ":" + new)# for 12 AM
    elif('A'in list(flag[2]) ):
        del smallsplit[3]
        del smallsplit[2]
        new= ""
        for x in smallsplit:
            new+=x
        return(str(flag[0]) + ":" + str(flag[1]) + ":" + new)# for normal AM
    elif('12' in flag and 'P'in list(flag[2]) ):
        del smallsplit[3]
        del smallsplit[2]
        new=""
        for x in smallsplit:
            new+=x
        return(str(flag[0]) + ":" + str(flag[1]) + ":" + new)      
    elif('P'in list(flag[2])): 
        flag[0]=str(int(flag[0])+ 12)
        del smallsplit[3]
        del smallsplit[2]
        new= ""
        for x in smallsplit:
            new+=x
        return(str(flag[0]) + ":" + str(flag[1]) + ":" + new)



   

if __name__ == '__main__':
    f = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    f.write(result + '\n')

    f.close()
