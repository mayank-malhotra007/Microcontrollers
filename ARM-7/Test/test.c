//.....PORT BLINKING.......//


#include <LPC21xx.h>

void delay(int t)
{
	while(t--);
}

int main()
{
	IODIR0=0xFFFFFFFF;   //port 0 as output
	IODIR1=0xFFFFFFFF;   //port 1 as output
	PINSEL1=0x00000000;
	while(1)
	{
	  IOSET0=0xFFFFFFFF;        // to give a value to a port (in this case port0) ,just as PORTD in AVR
	  IOSET1=0xFFFFFFFF;
		delay(500);
		IOCLR0=0xFFFFFFFF;       // to clear port0 or reset port0
		IOCLR1=0xFFFFFFFF;
		delay(500);
	}
}
  	
// PINSEL0 and PINSEL1 for PORT0 , PINSEL2 for PORT1