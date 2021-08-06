#include <LPC21xx.h>

int main()
{
	//int x=0;
	IODIR0=0xFFFFFFFF;	// port 0 as output
	IOCLR0=0xFFFFFFFF;
	IOCLR1=0xFFFFFFFF;
	IODIR1&=~(1<<16);   // pin 16 port 1 as input
	
	while(1)
	{
		if(IOPIN1&0x00010000)
		{
			IOSET0|=(1<<0);
			IOCLR0|=(1<<1);
			
			IOSET0|=(1<<2);
			IOCLR0|=(1<<3);
			//x++;
			//IOSET0=0xFFFFFFFF;
			while(IOPIN1&0x00010000);
		}
	/*
	 if(x==1)
		{
			IOSET0|=(1<<0);
			IOCLR0|=(1<<1);
			
			IOSET0|=(1<<2);
			IOCLR0|=(1<<3);
		}
		*/
	 IOCLR0=0xFFFFFFFF;
	}
}