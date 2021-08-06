#include<avr/io.h>
#include<util/delay.h>


void main()
{
  int x=0;
  DDRB=0x00;
  DDRC=0xff;
  DDRD=0xff;
  while(1)
    {
	 
	 while( (PINB&(1<<PINB0)) ==0)
	 {
	  x++;
	  while( (PINB&(1<<PINB0)) ==0);
	 }


	 if(x==1)
	 {
	   PORTC=0x01;
	   PORTD=0x01;
	  
	  }


	  	 if(x==2)
	 {
	   PORTC=0x00;
	   PORTD=0x00;
	   //P1=0x06;
	  }

	  if(x==3)
	  {
	   PORTC=0x02;
	   PORTD=0x02;
	   //P1=0x5b;
	  }

	  if(x==4)
	   {
	     PORTC=0x00;
		 PORTD=0x00;
		 //P1=0x4f;
		}

	}

}
