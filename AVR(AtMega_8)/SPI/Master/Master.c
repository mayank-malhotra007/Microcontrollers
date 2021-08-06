//..................MASTER..............//

#include<avr/io.h>
#include<util/delay.h>

int main()
 {

   DDRB=0xFF;
   SPCR = ( (1<<SPE) | (1<<MSTR)   );
   
   while(1)
    {
	 SPDR='A';
	 //poll
	 while( (SPSR&(1<<SPIF))==0 );
	 while(1);
	 }

 } 
