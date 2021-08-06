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

void slave1()
{
  TWCR=(1<<TWINT)|(1<<TWSTA)|(1<<TWEN);  //start  
while((TWCR&(1<<TWINT))==0);          //poll
if((TWSR & 0XF8)!=0X08)
{
error(1);
}

TWDR=0X50;                     //address
//TWCR=(1<<TWINT)|(1<<TWEN);     
while((TWCR&(1<<TWINT))==0);  //poll
if((TWSR & 0XF8)!=0X18)
{
error(2);
}

string("Mayank");  //data

TWCR=(1<<TWINT)|(1<<TWEN)|(1<<TWSTO);   //stop
while((TWCR&(1<<TWSTO)));             //poll

}


void slave2()
{
  TWCR=(1<<TWINT)|(1<<TWSTA)|(1<<TWEN);  //start  
while((TWCR&(1<<TWINT))==0);          //poll
if((TWSR & 0XF8)!=0X08)
{
error(1);
}

TWDR=0X60;                     //address
//TWCR=(1<<TWINT)|(1<<TWEN);     
while((TWCR&(1<<TWINT))==0);  //poll
if((TWSR & 0XF8)!=0X18)
{
error(2);
}

string("Mayank");  //data

TWCR=(1<<TWINT)|(1<<TWEN)|(1<<TWSTO);   //stop
while((TWCR&(1<<TWSTO)));             //poll

}


void slave3()
{
  TWCR=(1<<TWINT)|(1<<TWSTA)|(1<<TWEN);  //start  
while((TWCR&(1<<TWINT))==0);          //poll
if((TWSR & 0XF8)!=0X08)
{
error(1);
}

TWDR=0X70;                     //address
//TWCR=(1<<TWINT)|(1<<TWEN);     
while((TWCR&(1<<TWINT))==0);  //poll
if((TWSR & 0XF8)!=0X18)
{
error(2);
}

string("Mayank");  //data

TWCR=(1<<TWINT)|(1<<TWEN)|(1<<TWSTO);   //stop
while((TWCR&(1<<TWSTO)));             //poll

}




int main()
{
  DDRD=0XFF;

  _delay_ms(1000);
  TWBR=255;                     //bit rate
  slave1();
  _delay_ms(1000);
  slave2();
  _delay_ms(1000);
  slave3();
}

/*
TWCR=(1<<TWINT)|(1<<TWSTA)|(1<<TWEN);  //start  
while((TWCR&(1<<TWINT))==0);          //poll
if((TWSR & 0XF8)!=0X08)
{
error(1);
}

TWDR=0X50;                     //address
//TWCR=(1<<TWINT)|(1<<TWEN);     
while((TWCR&(1<<TWINT))==0);  //poll
if((TWSR & 0XF8)!=0X18)
{
error(2);
}

string("Mayank");  //data

TWCR=(1<<TWINT)|(1<<TWEN)|(1<<TWSTO);   //stop
while((TWCR&(1<<TWSTO)));               //poll

while(1);
*/


