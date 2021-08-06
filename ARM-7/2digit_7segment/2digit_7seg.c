#include <LPC21xx.h>

void delay(int t)
{
	while(t--);
}


int main()
{
	int i;
	int arr[10]={0x3f,0x06,0x5b,0x4f,0x66,0x6d,0x7d,0x07,0x7f,0x67};
	IODIR0=0xFFFFFFFF;   // port0 as output
	IODIR1=0xFFFFFFFF;   // port1 as output
	
	
	for(i=99;i>=0;i--)
  {
  IOSET1|=(1<<16);        //pin 16 port 1 high
	IOCLR1|=(1<<17);        // pin 17 port 1 low
  IOSET0=arr[i%10];
	
    delay(10000);
		delay(10000);
		delay(10000);
		delay(10000);
		delay(10000);
		delay(10000);
	IOCLR0=0xFFFFFFFF;
		
  IOCLR1=(1<<16);   //pin 16 port1 low
	IOSET1=(1<<17);   // pin 17 port 1 high
  IOSET0=arr[i/10];
    delay(100000);
		delay(100000);
		delay(100000);
		delay(10000);
		delay(10000);
		delay(10000);
	
	IOCLR0=0xFFFFFFFF;
  }
	
}