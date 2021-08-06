//................MASTER.............//
#include<avr/io.h>
#include<util/delay.h>

int main()
{

 DDRD=0xFF;
 DDRB=( (1<<DDB2) | (1<<DDB3) | (1<<DDB5) );
 SPCR=( (1<<SPE) | (1<<MSTR) );

 while(1)
  {
   SPDR=0x07;
   while(!(SPSR & (1<<SPIF)));
   PORTD=SPDR;

  }
}
