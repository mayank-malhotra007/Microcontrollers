#include<LPC21xx.h>

void delay(int t)
{
	while(t--);
}

void cmd(unsigned char c)
{
	IOSET1=(c<<16);             // IOSET1=(c<<16); if LCD connected at PORT1 through pin 16.
  IOCLR1=1<<24;        // RS off       IOCLR0=1<<8;  for connection with PORT0
	IOCLR1=1<<25;        //RW off        IOCLR0=1<<9;
	IOSET1=1<<26;       //E on           IOCLR0=1<<10;
	delay(10000);
	IOCLR1=1<<26;      //E off
	IOCLR1=0XFFFFFFFF;
}

void dat( unsigned char c )
{
	IOSET1=(c<<16);
  IOSET1=1<<24;      //RS on         IOSET0=1<<8;   for connection with PORT0
	IOCLR1=1<<25;      //RW off        IOCLR0=1<<9;
	IOSET1=1<<26;      //E  on         IOSET1=1<<10;
	delay(10000);
	IOCLR1=1<<26;      // E off
	IOCLR1=0XFFFFFFFF;
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







int main()
{
PINSEL0=0X06;
VPBDIV=0X01;
	PINSEL0=0X00000000;
	PINSEL1=0X00000000;
	PINSEL2=0X00000000;
IODIR0=0X0000FFF0;
IODIR1=0xFFFFFFFF;
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
