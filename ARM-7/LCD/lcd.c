#include <LPC21xx.h>
void delay(int t)
{
	while(t--);
}

void cmd(unsigned char c)
{
	IOSET0=c;  // IOSET1=(c<<16); if LCD connected at PORT1 through pin 16.
        IOCLR1=1<<16;        // RS off       IOCLR0=1<<8;  for connection with PORT0
	IOCLR1=1<<17;        //RW off        IOCLR0=1<<9;
	IOSET1=1<<18;       //E on           IOCLR0=1<<10;
	delay(10000);
	IOCLR1=1<<18;      //E off
	IOCLR0=0XFFFFFFFF;
	
}

void dat( unsigned char c )
{
	
	IOSET0=c;
        IOSET1=1<<16;      //RS on         IOSET0=1<<8;   for connection with PORT0
	IOCLR1=1<<17;      //RW off        IOCLR0=1<<9;
	IOSET1=1<<18;      //E  on         IOSET1=1<<10;
	delay(10000);
	IOCLR1=1<<18;      // E off
	IOCLR0=0XFFFFFFFF;
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

	IODIR0=0xFFFFFFFF;  //port0 as output
	IODIR1=0xFFFFFFFF;  //port1 as output
	lcd();
	while(1)
	{ 
		cmd(0x80);
	  dat('M');
		delay(1000);
		dat('A');
		delay(1000);
		dat('Y');
		delay(1000);
		dat('A');
		delay(1000);
		dat('N');
		delay(1000);
		dat('K');
	}

}