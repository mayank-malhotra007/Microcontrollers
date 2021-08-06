#include <LPC21xx.h>

void delay(unsigned int i)
{
	while(i--);
}
int main()
{
	int arr[]={0x3f,0x06,0x5b,0x4f,0x66,0x6d,0x7d,0x07,0x7f,0x67};
	int x=0;
	IODIR0=0xFFFFFFFF;
	
	IODIR1|=(1<<16);     //output
	IODIR1&=~(1<<17);    //input
	
	while(1)
	{
		if( (IOPIN1&0x00020000))
		{
			x++;
			IOSET1=0x00010000;            //LED
			while((IOPIN1&0x00020000));
		}
		IOCLR1=0x00010000;
		IOSET0=arr[x];                //7 segment
		delay(30000);
		IOCLR0=0XFFFFFFFF;
		
		/*
		if(x==1)
		{
			IOSET1=0x00010000;
			IOSET0=arr[0];
		}
		
			if(x==2)
		{
			IOSET1=0x00010000;
			IOSET0=arr[1];
		}
		*/
		
		 
 }
}
	
	