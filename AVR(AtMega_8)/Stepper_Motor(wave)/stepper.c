#include<avr/io.h>
#include<util/delay.h>

void main()
{
 int i,j;
 DDRC=0xff;
 while(1)
   {
     for(i=0;i<50;i++)
	 { 
      PORTC=0x08>>j;
	  _delay_ms(500);
	  j++;

	  if(j==4)
	   {
	     j=0;
	   }
	 
	 }

	 for(i=0;i<50;i++)
	 { 
      PORTC=0x01<<j;
	  _delay_ms(500);
	  j++;

	  if(j==4)
	   {
	     j=0;
	   }
		
}
}
}
