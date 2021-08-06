#include<LPC213x.h>
void delay(unsigned int i)
{
	while(i--);
}

void cmd(unsigned char c)
{
  IOSET1=c<<16;
	IOCLR1=1<<24;
	IOCLR1=1<<25;
	IOSET1=1<<26;
	delay(20000);
	IOCLR1=1<<26;
	
	IOCLR1=0xffffffff;
}

void dat(unsigned char c)
{
  
  IOSET1=c<<16;
	IOSET1=1<<24;
	IOCLR1=1<<25;
	IOSET1=1<<26;
	delay(20000);
	IOCLR1=1<<26;
	IOCLR1=0xffffffff;
}


void lcd()
{
	cmd(0x38);
	delay(50000);
	
	cmd(0x01);
	delay(50000);
	
	cmd(0x0e);
	delay(50000);
	
	cmd(0x80);
	delay(50000);
}

string(unsigned char *p ) 
{
	while(*p!='\0')
	{
		dat(*p);
		p++;
	}
}

	

int main()
{
PINSEL0=0X06;
	PINSEL2=0X00000000;
	
	IODIR0=0XFFFFFFFF;
	IODIR1=0XFFFFFFFF;
		
VPBDIV=0X01;
IODIR0=0XFFF0;

U0FCR=0x07;	
	
U0LCR=0X83;
	
U0DLL=0X41;
U0DLM=0X00;
	
U0LCR=0X03;
lcd();
while(1)	
{
while((U0LSR&(0X01))==0);
dat(U0RBR);
}
}