#include<reg51.h>

sbit sw=P1^0;

void main()
{
while(1)
{
//P1=0x00;
P2=0x00;
 if(sw==0)
	{
	  P2=0x01; 

}	}
}