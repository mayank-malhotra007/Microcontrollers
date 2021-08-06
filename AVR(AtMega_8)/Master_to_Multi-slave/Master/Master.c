//.............MASTER TO MULTI SLAVE...........//

#include<avr/io.h>
#include<util/delay.h>

int main()
 {

   DDRB=0xFF;
   DDRC=0XFF;
   SPCR = ( (1<<SPE) | (1<<MSTR)   );
   
   while(1)
    {
	 PORTC=0x0E;
	 SPDR='A';
	 while( (SPSR&(1<<SPIF))==0 );   //poll;
     _delay_ms(500);

	 PORTC=0x0D;
	 SPDR='B';
     while( (SPSR&(1<<SPIF))==0 );
     _delay_ms(500);

	 PORTC=0x0B;
	 SPDR='C';
	 while( (SPSR&(1<<SPIF))==0 );
     _delay_ms(500);
     


	 while(1);
	 }

 } 
