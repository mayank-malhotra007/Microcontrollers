#include<avr/io.h>
#include<util/delay.h>

void cmd(unsigned char c)
{
	PORTD=c;
	PORTC=0x04;
	_delay_ms(50);
	PORTC=0x00;
}

void dat( unsigned char c )
{
	PORTD=c;
	PORTC=0x05;
	_delay_ms(50);
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
		_delay_ms(100);
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

int main()
{
  int i,j,k;
  DDRC=0xff;
  DDRD=0xff;
  lcd();
  
  cmd(0x80);
  string("  H : M : S ");
  for(i=0;i<12;i++)
   {
     cmd(0xc2);
	 if(i<10)
	  {
	     dat('0');
	  }


	  num(i);
	  for(j=0;j<59;j++)
	     {
		   cmd(0xc6);
		   if(j<10)
		    {
			   dat('0');
			}
		num(j);

		     for(k=0;k<59;k++)
			  {
			    cmd(0xc9);
				if(k<10)
				 {
				   dat('0');
				}
			    num(k);
			   }
			}
		}
	}
