#include<avr/io.h>
//#include<util/delay.h>
void wait()
{
    //time for 1sec(HEX CODE)
 int i;
 for(i=0;i<3906;i++)
  {
    
 
 while((TIFR & (1<<TOV0))==0);  //polling for 3906 bits
 TIFR=(1<<TOV0);                //reset
  }
 TCNT0=0xc0;
 while((TIFR & (1<<TOV0))==0);  // for for remaing 64 bits
 TIFR=(1<<TOV0); 
 
}
int main()
{

 DDRD=0xff;
 TCCR0=1<<CS00;
 TCNT0=0x00;  //empty the register
 while(1)
   {
     PORTD=0xff;
	 wait();
	 PORTD=0x00;
	 wait();
     }

 
}
