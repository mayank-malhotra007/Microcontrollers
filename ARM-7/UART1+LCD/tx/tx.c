#include<lpc21xx.h>

void delay(unsigned int i)
{
	while(i--);
}

void string(unsigned char *p)
{
	while(*p!='\0')
	{
		U1FCR|=0X02;
		
	//	U1FCR|=0X06;  it can be placed here but ORing must
		U1THR=*p;
		p++;
		delay(50000);
		while((U1LSR&0X40)==0);
	}
}
		

int main()                      
{
 unsigned int i,j;
PINSEL0=0X00010000;
   /*  U1FCR=0X07;  it is optional here.. but in string fxn must be there */
U1LCR=0X80;
U1DLL=97;
U1LCR=0X03;
while(1)			  
{
string("HCL DELHI");
	while(1);

}
}
