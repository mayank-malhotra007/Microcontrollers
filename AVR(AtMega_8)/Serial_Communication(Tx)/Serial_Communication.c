#include<avr/io.h>
#include<util/delay.h>

void string(unsigned char *p)
{
while(*p!='\0')
{
_delay_ms(600);
UDR=*p;
p++;
}
}

void main()
{

UBRRL=51;
UCSRB=(1<<TXEN);
UCSRC=(1<<URSEL)|(1<<UCSZ1)|(1<<UCSZ0);

while(1)
{
string("Mayank");
while((UCSRA & (1<<TXC))==0);
UCSRA=(1<<TXC);
_delay_ms(50);
while(1);
}

}
