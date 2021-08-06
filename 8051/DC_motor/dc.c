#include<reg51.h>
sbit sw=P0^0;
void delay(long unsigned int t)
{
 while(t--);
}


void main()
{
  int x=0;
  P3=0x00;
  while(1)
    {
	 
	 while(sw==0)
	 {
	  x++;
	  while(sw==0);
	 }

	 if(x==1)
	 {
	   P2=0x01;
	   P3=0x01;
	   P1=0x3f;
	  }

	  	 if(x==2)
	 {
	   P2=0x00;
	   P3=0x00;
	   P1=0x06;
	  }

	  if(x==3)
	  {
	   P2=0x02;
	   P3=0x02;
	   P1=0x5b;
	  }

	  if(x==4)
	   {
	     P2=0x00;
		 P3=0x00;
		 P1=0x4f;
		}

	}

}