#include<avr/io.h>
#include<util/delay.h>




int arr[8]={0x3f,0x06,0x5b,0x4f,0x66,0x6d,0x7d,0x07,0x67};

int main()
{
 int i;
//char arr[10]={'0x3f','0x06','0x5b','0x4f','0x66','0x6d','0x7d','0x07','0x67'};
 
  DDRD=0xff;

 while(1)
{
 for (i=0;i<8;i++)
   {
     PORTD=arr[i];
	
     _delay_ms(500);

    }


 }
}
 
