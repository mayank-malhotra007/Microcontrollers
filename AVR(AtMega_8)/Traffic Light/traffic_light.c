#include<avr/io.h>
#include<util/delay.h>

//#define red (PINC&(1<<PINC0))

int main()
{
int i,j;
int arr[10]={0x3f,0x06,0x5b,0x4f,0x66,0x6d,0x7d,0x07,0x7f,0x67};
DDRB=0xff; DDRC=0xff; DDRD=0xff;
while(1)
{
  PORTC=0x01;
  for(i=9;i>=0;i--)
  {
   PORTB=arr[i];
    for(j=9;j>=0;j--)
       {
	    
		PORTD=arr[j];
		_delay_ms(500);
        if(i==3 && j==0)
		  {
		    PORTC=0x02;
          }
        if(i==2 && j==0)
		  {
		   PORTC=0x04;
           }
       }
}

}
}
