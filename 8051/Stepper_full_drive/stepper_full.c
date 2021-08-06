#include<reg51.h>

void delay(int t)
{
  while(t--);
}

void main()
{
 int i;
 P2=0x00;
 while(1)
   {
      for(i=0;i<13;i++)
	     {
		    P2=0x03;
			delay(50000);

			P2=0x06;
			delay(50000);

			P2=0x0c;
			delay(50000);

			P2=0x09;
			delay(50000);
		}

		for(i=0;i<13;i++)
	     {
		    P2=0x09;
			delay(50000);

			P2=0x0c;
			delay(50000);

			P2=0x06;
			delay(50000);

			P2=0x03;
			delay(50000);
		}
	}
}
		    