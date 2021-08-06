#include<avr/io.h>
#include<stdio.h>
#include<util/delay.h>

void cmd(unsigned char c)
{
	PORTD=c;
	PORTB=0x04;
	_delay_ms(5);
	PORTB=0x00;
}

void dat( unsigned char c )
{
	PORTD=c;
	PORTB=0x05;
	_delay_ms(5);
	PORTB=0x01;
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


int adc(char ch)
{

ADMUX=((1<<REFS0)|(1<<REFS1)|ch);
ADCSRA=((1<<ADEN)|(1<<ADPS2)|(1<<ADPS0)|(1<<ADSC));

while((ADCSRA & (1<<ADIF))==0);  //polling
ADCSRA|=1<<ADIF;
return ADC;                     // ADC is a register
}


int main()
{
 char a,b,c;
 char z[30];

 DDRD=0xff;
 DDRB=0xff;

 lcd();


 while(1)
  {

        a=adc(0x00);
	b=adc(0x01);
	c=adc(0x02);

	sprintf(z,"%-4d %-4d %-4d",a,b,c); 
	cmd(0x80);
	string(z);
	//num(a);
	//cmd(0x84);
	//num(b);
	//cmd(0x89);
	//num(c);
                 
  }
}
