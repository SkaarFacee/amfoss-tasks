#include <stdio.h>
#include <string.h>
#include <ctype.h>
int main(){
    int n,tn;
    char text[100],temp[100];
    printf("Enter a number ");
    scanf("%d",&n);
    printf("Plaintext: \033[4m");
    scanf("%s\033[4m",text);
    strcpy(temp,text);
    for (int i=0;i!=strlen(text);i++){
        if(isalpha(text[i])!=0){
        
        
        
        if(isalpha(temp[i]+n)!=0){
            text[i]=text[i]+n;
        }
        else{
            
            tn = n-26;
            text[i]=text[i]+tn;
        }        
        }


    }
    printf("Ciphertext : %s",text);    

}
    
