#include<reg51.h>

sbit rs=P1^4;
sbit rw=P1^0;
sbit e=P1^5;

void delay( unsigned int i)
{
	while(i--);
}
void cmd(unsigned char c)
{
	P3=c;
	rs=0;
	e=1;
	rw=0;
	delay(50);
	e=0;
}

void dat( unsigned char c )
{
	P3=c;
	rs=1;
	e=1;
	rw=0;
	delay(50);
	e=0;
}

void lcd()
{
	cmd(0x38);
	delay(200);
	cmd(0x01);
	delay(200);
	cmd(0x0e);
	delay(200);
	cmd(0x80);
	delay(200);
	
}
void string(unsigned char *p)
{
	while(*p!='\0')
	{
		dat(*p);
		cmd(0x1c);
		delay(9000);
		p++;
	}
}
void main()
{
	lcd();
	
	while(1)
	{
			cmd(0x8f);
		string("HCL CDC NEW DELHI");
			
			
		}
		
		
	}

		
	
