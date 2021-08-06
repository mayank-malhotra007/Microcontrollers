#include<avr/io.h>
#include<util/delay.h>
#include<string.h>



void cmd(unsigned char c)
{
	PORTB=c;
	PORTC=0x04;
	_delay_ms(5);
	PORTC=0x00;
}

void dat( unsigned char c )
{
	PORTB=c;
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


void num(unsigned int p)
 {
   unsigned int k,w,b=1;
   k=p;
   while(k>=10)
    {
	  b=b*10;
	  k=k/10;
	}
	while(b>=1)
	{
	  w=p/b;
	  p=p%b;
	  b=b/10;
	  _delay_ms(100);
	  dat(w+48);
	}
}

//char x='1';
//char z;
char arr[3]="ON";
char A[3];
int i=0;
int main()
{

  DDRB=0xff;
  DDRC=0xff;
  DDRD=0xff;
  lcd();
  UBRRL=51;                                                    //setting baud rate
  UCSRB=(1<<RXCIE);
  UCSRB=(1<<RXEN);                              //receiver enable
  UCSRC=((1<<URSEL) | (1<<UCSZ0) | (1<<UCSZ1)); // for 8 bit character size
  cmd(0x80);

  //_delay_ms(500000000);

while(1)
{
  //cmd(0x80);
  while((UCSRA & (1<<RXC)==0));    // while is terminated only when entire string arrives!!
  {
    _delay_ms(350);
    A[i]=UDR;
	//dat(A[i]);
	i++;
	
  // UCSRA|=(1<<RXC);               // to check for data again on buffer (set & reset)
  }


  _delay_ms(350);

 if(strcmp(A,arr)==0)
   {
     cmd(0x80);
     dat('O');
	 cmd(0x81);
	 dat('N');
     PORTD=0x80;            // lights up the LED!!
   }
  

}

 
}
