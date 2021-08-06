#include<avr/io.h>
#include<util/delay.h>
// only PIN 15 and 16 give PWM

int main()
{ static int t=0;
DDRC=0x00;
DDRB=0XFF;
DDRD=0xFF;

while(1)
 {

 TCCR1A = ((1<<COM1A1) | (1<<COM1B1) | (1<<WGM11)  );    // mode 14
 TCCR1B = ( (1<<WGM12) | (1<<WGM13) | (1<<CS10) );                // for pwm and NO PRESCALING
 TCNT1=0x00;
 ICR1=15000;  //time taken
  OCR1A=0x00;

 while (PINC&(1<<PINC0)==1)
	   {

     	     PORTD=0x01;   // to check button,led fixed
             t+=70;
			 OCR1A=t;
            _delay_ms(500);     
	     
           
		 
          }
 
 PORTD=0x00;
 t-=70;
 OCR1A=t;

 // OCR1B=8000;           
              
 }

}
 
