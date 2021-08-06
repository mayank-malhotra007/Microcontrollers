#include<avr/io.h>
#include<util/delay.h>

void main()
{
 int i;
 DDRC=0xff;
 while(1)
   {
      for(i=0;i<13;i++)
	     {
		    PORTC=0x03;
			_delay_ms(500);

			PORTC=0x06;
			_delay_ms(500);

			PORTC=0x0c;
			_delay_ms(500);

			PORTC=0x09;
			_delay_ms(500);
		}

		for(i=0;i<13;i++)
	     {
		    PORTC=0x09;
			_delay_ms(500);

			PORTC=0x0c;
			_delay_ms(500);

			PORTC=0x06;
			_delay_ms(500);

			PORTC=0x03;
			_delay_ms(500);
		}
	}
}
