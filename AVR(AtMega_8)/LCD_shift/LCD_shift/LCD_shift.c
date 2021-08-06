#include<avr/io.h>
#include<util/delay.h>

void cmd(unsigned char c)
{
	PORTD=c;
	PORTC=0x04;
	_delay_ms(5);
	PORTC=0x00;
}

void dat( unsigned char c )
{
	PORTD=c;
	PORTC=0x05;
	_delay_ms(5);
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

 void string(char *p)
 {
   while(*p!='\0')
     {
	    dat(*p);
		p++;
		_delay_ms(10);
	}
}

void main()
{

  
  
  DDRC=0xff;
  DDRD=0xff;
  lcd();

  while(1)
    {
	  cmd(0x8f);
	  string("mayank");
	  cmd(0x1c);             // 0x1c for left to right , 0x18 for right to left
      _delay_ms(10);
	  cmd(0xcf);
	  string("malhotra");
	  cmd(0x1c);
    }
}
