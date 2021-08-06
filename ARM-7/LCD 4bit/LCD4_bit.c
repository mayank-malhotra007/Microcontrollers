#include <LPC21xx.h>

void delay( long unsigned int t)
{
	while(t--);
}




void cmd(unsigned char c)
{
unsigned int l,h;
l=c & 0x0f;
h=c>>4;
	
	
	
	IOPIN0=h|0x00000040;
	delay(10000);
  IOPIN0=h|0x00000000;
	delay(10000);
	
	IOPIN0=l|0x00000040;
	delay(10000);
  IOPIN0=l|0x00000000;
	delay(10000);
	
	/*
//IOCLR0=0xFFFFFFFF;
	IOCLR0=h|(1<<4)|(1<<5);
  IOSET0=h|(1<<6);

	delay(10000);
  IOCLR0=h|(1<<4)|(1<<5)|(1<<6);
	delay(10000);
	
  IOSET0=l|(1<<6);
  IOCLR0=l|(1<<4)|(1<<5);
	delay(10000);
  IOCLR0=l|(1<<4)|(1<<5)|(1<<6);
	delay(10000);	

	*/
  IOCLR0=0xFFFFFFFF;
	
}

void dat(unsigned char c)
{
unsigned int l,h;
l=c & 0x0f;
h=c>>4;
IOPIN0=h|0x00000050;
	delay(10000);
  IOPIN0=h|0x00000010;
	delay(10000);
	
	IOPIN0=l|0x00000050;
	delay(10000);
  IOPIN0=l|0x00000010;
	delay(10000);

	
/*	
IOSET0=h|(1<<6)|(1<<4);
IOCLR0=h|(1<<5);
	delay(10000);
IOCLR0=h|(1<<4)|(1<<5)|(1<<6);
	delay(10000);
	
IOSET0=l|(1<<6)|(1<<4);
IOCLR0=l|(1<<5);
	delay(10000);
IOCLR0=l|(1<<4)|(1<<5)|(1<<6);
	delay(10000);
*/
IOCLR0=0xFFFFFFFF;
}

void lcd()
{
cmd(0x02);
delay(50000);

cmd(0x28);
delay(50000);

cmd(0x01);
delay(50000);

cmd(0x0e);
delay(50000);

cmd(0x80);
delay(50000);
}

void string(unsigned char *p)
{
while(*p!='\0')
{
dat(*p);
p++;
}
}

int main()
{
	
IODIR0=0xFFFFFFFF;
lcd();
while(1)
{	
 cmd(0x80);
 dat('A');
}

}
