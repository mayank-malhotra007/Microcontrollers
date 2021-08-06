//..................SLAVE.............//
#include<avr/io.h>
#include<util/delay.h>

int main()
{
 DDRB=(1<<DDB4);
 DDRC=0xFF;
 SPCR=(1<<SPE);

 while(1)
  {
   while(!(SPSR & (1<<SPIF)));
   SPDR=0x06;
   PORTC=SPDR;
   }
}
