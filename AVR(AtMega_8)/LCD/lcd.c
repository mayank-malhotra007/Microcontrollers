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
	_delay_ms(200);
	cmd(0x01);
	_delay_ms(200);
	cmd(0x0e);
	_delay_ms(200);
	cmd(0x80);
	_delay_ms(200);
	
}

int main()
{
  int i;
  DDRD=0xff;
  DDRC=0xff;
  lcd();
  char arr[6]={'H','E','L','L','O'};
  while(1)
         {
		   cmd(0x80);
		   for(i=0;i<5;i++)
		     {
			     dat(arr[i]);
				_delay_ms(500);
              }
          }
}
