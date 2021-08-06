#include<avr/io.h>
#include<util/delay.h>



void string(unsigned char *p)
{
while(*p!='\0')
{
_delay_ms(100);
TWDR=*p;
while((TWCR&(1<<TWINT))==0);
p++;
}
}

int main()
{
DDRD=0XFF;

_delay_ms(1000);

TWBR=255;

TWCR=(1<<TWINT)|(1<<TWSTA)|(1<<TWEN);
while((TWCR&(1<<TWINT))==0);

TWDR=0X50;
TWCR=(1<<TWINT)|(1<<TWEN);
while((TWCR&(1<<TWINT))==0);

string("RAJNEESH");

TWCR=(1<<TWINT)|(1<<TWEN)|(1<<TWSTO);
while((TWCR&(1<<TWSTO)));
while(1);
}
