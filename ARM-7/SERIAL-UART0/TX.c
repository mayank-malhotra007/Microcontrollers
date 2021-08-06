#include<LPC21xx.h>
int main()
{
PINSEL0=0X05;
VPBDIV=0X01;
	
U0FCR=0x07;
	
U0LCR=0X83; /*DLAB enable*/
	
U0DLL=0X41;
U0DLM=0X00;
	
U0LCR=0X03;  /*word length select*/
while(1)	
{
U0THR='A';
while((U0LSR&(0X20))==0);
	
	U0THR='B';
while((U0LSR&(0X20))==0);

	U0THR='C';
while((U0LSR&(0X20))==0);

		while(1);
}
}
