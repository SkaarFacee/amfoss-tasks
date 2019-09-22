#include <stdio.h>
#include <string.h>
#include <ctype.h>
int main(){
    int n,tn;
    char key[30],text[30],temp[100];;
    scanf("%s",key);
    printf("Plaintext:  ");
    scanf("%s\033[4m",text);
    strcpy(temp,text);
    for(int i=0;i!=strlen(text);i++){
        if(isalpha(text[i]!=0)){
            int asc = key[i];
        if(asc>=65 && asc<=90){
            n=n-65;
            temp[i]=temp[i]+n;
        }//asc if
        else if (asc>=97 && asc<=122){
            n=n-97;
            temp[i]=temp[i]+n;
        }//else
        }// if for passing letters
        printf("Ciphertext: %s",temp);
    }//loop i
}//main