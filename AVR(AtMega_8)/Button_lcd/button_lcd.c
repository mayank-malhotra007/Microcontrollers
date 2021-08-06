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

  int i=0;
  DDRB=0x00;
  DDRC=0xff;
  DDRD=0xff;
  lcd();

  while(1)
   {
     while(PINB&(1<<PINB0)==1)
	   {
	     i++;
		 while(PINB&(1<<PINB0)==1);
		}
   

	 if(i==1)
 	   {
	     cmd(0x80);
	     string("mayank");
		}

	 if(i==2)
	    {
		   cmd(0x80);
		   string("Gulani  ");
		}
	 if(i==3)
	    {
		  cmd(0x80);
		  string("Rohan  ");
		}
		  if(i>3)
	   i=0;

	}
}
