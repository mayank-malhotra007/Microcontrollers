#include<avr/io.h>
#include<util/delay.h>

void error(unsigned char a)
{
PORTD=a;
while(1);
}


void string(unsigned char *p)
{
while(*p!='\0')
{
_delay_ms(100);
TWDR=*p;
TWCR=(1<<TWINT)|(1<<TWEN);
while((TWCR&(1<<TWINT))==0);
p++;
if((TWSR & 0XF8)!=0X28)
error(3);
}
}

int main()
{
DDRD=0XFF;

_delay_ms(1000);

TWBR=255;
TWCR=(1<<TWINT)|(1<<TWSTA)|(1<<TWEN);
while((TWCR&(1<<TWINT))==0);
if((TWSR & 0XF8)!=0X08)
{
error(1);
}

TWDR=0X50;
TWCR=(1<<TWINT)|(1<<TWEN);
while((TWCR&(1<<TWINT))==0);
if((TWSR & 0XF8)!=0X18)
{
error(2);
}

string("RAJNEESH");

TWCR=(1<<TWINT)|(1<<TWEN)|(1<<TWSTO);
while((TWCR&(1<<TWSTO)));
while(1);
}
