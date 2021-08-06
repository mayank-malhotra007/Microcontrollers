#include<avr/io.h>
#include<util/delay.h>
void cmd(unsigned char c)
{
	PORTB=c;
	PORTC=0x04;
	_delay_ms(5);
	PORTC=0x00;
}

void dat( unsigned char c )
{
	PORTB=c;
	PORTC=0x05;
	_delay_ms(5);
	PORTC=0x01;
}

void num(unsigned int p)
 {
   unsigned int k,w,b=1;
   k=p;
   while(k>=10)
    {
	  b=b*10;
	  k=k/10;
	}
	while(b>=1)
	{
	  w=p/b;
	  p=p%b;
	  b=b/10;
	  _delay_ms(100);
	  dat(w+48);
	}
}

void lcd()
{
	cmd(0x38);
	_delay_ms(100);
	cmd(0x01);
	_delay_ms(100);
	cmd(0x0e);
	_delay_ms(100);
	cmd(0x80);
	_delay_ms(100);
	
}

 void string(char *p)
 {
   while(*p!='\0')
     {
	    dat(*p);
		p++;
		_delay_ms(10);
	}
}

int main()
{
 static int i=0;
 DDRD=0x00;
 DDRB=0xff;
 DDRC=0xff;
 lcd();
 TCCR1B=((1<<CS00) | (1<<CS01) | (1<<CS02));
 TCNT1=0x00;
 while(1)
  {
   
 
   while((TIFR & (1<<TOV1))==1);
   {
	cmd(0x80);
    num(TCNT1);  // or num(TCNT1L);
   }
    TIFR=(1<<TOV1);

   }  
}
