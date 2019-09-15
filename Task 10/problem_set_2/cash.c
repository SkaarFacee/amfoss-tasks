//Assume that the only coins available are quarters (25¢), dimes (10¢), nickels (5¢), and pennies (1¢).z
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
int main(){
    float cash;
    char trash[1024];
    while (1) 
    {
        printf("Please enter a number: ");
        fflush(stdout);

        if (1 == scanf("%f", &cash)){
          if (cash>0)
          break;
        }
        if (NULL == fgets(trash, sizeof(trash), stdin))
          exit((fprintf(stderr, "Unexpected EOF or error!\n"), 1));
    }
    cash = floor(cash * 100) / 100;
    cash = cash * 100;
    int q = cash / 25;
    int d = fmod(cash,25.0) / 10;
    int n = fmod(fmod(cash,25.0),10.0) / 5;
    int p = fmod(fmod(fmod(cash,25-0),10.0),5.0);
    printf("%d\n", q + d + n + p);
}


