#include<avr/io.h>

int main()
{

 DDRB=0xff;
 TCCR0=((1<<CS00) | (1<<CS01) | (1<<CS02));
TCNT0=0x00;
 while(1)
  {

   while((TIFR & (1<<TOV0))==1);
   {
   TIFR=(1<<TOV0);
   PORTB=TCNT0;
   
   }
   
   }
   
 } 
