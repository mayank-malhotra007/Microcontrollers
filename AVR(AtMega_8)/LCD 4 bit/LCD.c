#include<avr/io.h>
#include<util/delay.h>

void cmd(unsigned char c)
{
unsigned int l,h;
l=c & 0x0f;
h=c>>4;

PORTD=h|0x40;
_delay_ms(10);

PORTD=h|0x00;

PORTD=l|0x40;
_delay_ms(10);

PORTD=l|0x00;
}

void dat(unsigned char c)
{
unsigned int l,h;
l=c & 0x0f;
h=c>>4;

PORTD=h|0x50;
_delay_ms(10);

PORTD=h|0x10;

PORTD=l|0x50;
_delay_ms(10);

PORTD=l|0x10;
}

void lcd()
{
cmd(0x02);
_delay_ms(100);

cmd(0x28);
_delay_ms(100);

cmd(0x01);
_delay_ms(100);

cmd(0x0e);
_delay_ms(100);

cmd(0x80);
_delay_ms(100);
}

void string(unsigned char *p)
{
while(*p!='\0')
{
dat(*p);
p++;
}
}

void main()
{
DDRD=0xff;
lcd();
while(1)
{
cmd(0x80);
string("HCL CDC");
}
}
