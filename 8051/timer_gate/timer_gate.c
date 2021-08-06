#include<reg51.h>
void wait()
{
 TL1=0xb0;		   //for 50ms
 TH1=0x3c;
 while(TF1==0);
 TF1=0;

}



void main()
{

 TMOD=0xA0;
 TR1=1;
 TH1=0;
 TL1=0;
 P3=0x00;
 while(1)
      {
	    P2=0xff;
		wait();
		P2=0x00;
		wait();
	  }

}