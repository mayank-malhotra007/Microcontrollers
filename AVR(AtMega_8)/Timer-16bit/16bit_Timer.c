#include<avr/io.h>

void wait()
{
 int i;
 for(i=1;i<=15;i++)
   {
     while((TIFR & (1<<TOV1))==0);
	 TIFR=(1<<TOV1);

   }

 TCNT1H=0xBD;
 TCNT1L=0xC0;
 
 while((TIFR & (1<<TOV1))==0);
 TIFR=(1<<TOV1);


}

int main()
{
 DDRD=0xff;
 TCCR1B=1<<CS10;   //page 100
 while(1)
   {
     PORTD=0xff;
	 wait();
	 PORTD=0x00;
     wait();
   }
}

    
