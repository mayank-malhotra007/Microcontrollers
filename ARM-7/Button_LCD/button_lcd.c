#include <LPC21xx.h>
void delay(int t)
{
	while(t--);
}

void cmd(unsigned char c)
{
	IOSET0=c;
        IOCLR1=1<<16;        // RS off       IOCLR0=1<<8;  for connection with PORT0
	IOCLR1=1<<17;        //RW off        IOCLR0=1<<9;
	IOSET1=1<<18;       //E on           IOCLR0=1<<10;
	delay(10000);
	IOCLR1=1<<18;      //E off
	IOCLR0=0XFFFFFFFF; // port0 cleared
	
}

void dat( unsigned char c )
{
	
	IOSET0=c;
        IOSET1=1<<16;      //RS on         IOSET0=1<<8;   for connection with PORT0
	IOCLR1=1<<17;      //RW off        IOCLR0=1<<9;
	IOSET1=1<<18;      //E  on         IOSET1=1<<10;
	delay(10000);
	IOCLR1=1<<18;      //E off
	IOCLR0=0XFFFFFFFF; // port0 cleared
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
  int x=0;
	IODIR0=0xFF;          //port0 as output
	IODIR1=0xFFFFFFFF;   //port1 as output
	IODIR0&=~(1<<15);   //pin 15 of PORT0 declared as Input.
	lcd();
	while(1)
	{ 
		
		if((IOPIN0&0x00008000))
		{
			x++;
			while( (IOPIN0&0x00008000));
		}
		if(x==1)
		{
	   cmd(0x80);
	   dat('1');
		}
		if(x==2)
		{
			cmd(0x80);
			dat('2');
		}
		if(x==3)
		{
			cmd(0x80);
			dat('3');
		}
			if(x==4)
		{
			cmd(0x80);
			dat('4');
		}
			if(x==5)
		{
			cmd(0x80);
			dat('5');
		}
		
	}

}