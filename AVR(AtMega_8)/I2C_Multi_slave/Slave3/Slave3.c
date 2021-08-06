#include<avr/io.h>
#include<util/delay.h>
unsigned int x;

void cmd(unsigned char c)
{
unsigned int l,h;
l=c &0X0F;
h=c>>4;


PORTD=h|0X40;
_delay_ms(20);
PORTD=h|0X00;

PORTD=l|0X40;
_delay_ms(20);
PORTD=l|0X00;
}


void dat (unsigned char c)
{
unsigned int l,h;
l=c &0X0F;
h=c>>4;

PORTD=h|0X50;	
_delay_ms(20);				
PORTD=h|0X10;

PORTD=l|0X50;
_delay_ms(20);
PORTD=l|0X10;
}


void lcd_init()
{
cmd(0x02);
_delay_ms(10);
cmd(0x28);
_delay_ms(10);
cmd(0x01);
_delay_ms(10);
cmd(0x80);
_delay_ms(10);
cmd(0x0e);
_delay_ms(10);
}


void string(unsigned char *p)
{
while(*p!='\0')
{
TWDR=*p;
while((TWCR&(1<<TWINT))==0);
p++;

}
}



int main()
{
DDRD=0XFF;
TWAR=0X70;        // slave3 address
lcd_init();

while(1)
{

TWCR=(1<<TWINT)|(1<<TWEA)|(1<<TWEN);
while((TWCR&(1<<TWINT))==0);


TWCR|=1<<TWINT;
while((TWCR&(1<<TWINT))==0);
x=TWDR;
dat(x);

}
}
