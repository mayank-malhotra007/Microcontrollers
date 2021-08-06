//.....................SLAVE.................//
#include<avr/io.h>
#include<util/delay.h>

void cmd(unsigned char c)
{
	PORTD=c;
	PORTC=0x04;
	_delay_ms(50);
	PORTC=0x00;
}

void dat( unsigned char c )
{
	PORTD=c;
	PORTC=0x05;
	_delay_ms(50);
	PORTC=0x01;
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





int main()
{
 DDRC=0xFF;
 DDRD=0xFF;
 //DDRB=0xFF;
 SPCR = (1<<SPE);
 lcd();

 while(1)
   {
    while( (SPSR&(1<<SPIF))==0);
	//PORTD=SPDR;
	dat(SPDR);
	}

}
