#include<avr/io.h>
#include<util/delay.h>


void cmd(unsigned char c)
{
	PORTB=c;
	PORTD=0x04;
	_delay_ms(5);
	PORTD=0x00;
}

void dat( unsigned char c )
{
	PORTB=c;
	PORTD=0x05;
	_delay_ms(5);
	PORTD=0x01;
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
		dat(w+48);
	}
}






int main()
{
 DDRB=0xff;
 DDRC=0x00;
 DDRD=0xff;
 lcd();
 ADMUX=0xc0;
 ADCSRA=0xd3;
 
 cmd(0x80);


// ADMUX=(1<<REFS1) | (1<<REFS0);
while(1)
{
 ADCSRA |=(1<<ADSC);    // for analog to digital conversion

 while((ADCSRA & 0x10)==0);   //polling
// ADCSRA|=0x10;               //same as above
 num(ADC/4);
 cmd(0x80);
}
}


