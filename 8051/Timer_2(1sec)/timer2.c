#include<reg51.h>
void wait()
{
int i;
for(i=1;i<=15;i++)
{
    while(TF1==0);	 //polling
    TF1=0;

}
 TL1=0x40;		   //for 50ms
 TH1=0x42;
 while(TF1==0);	 //polling
  TF1=0;		 //polling

}



void main()
{

 TMOD=0x10;
 TR1=1;
 TH1=0;
 TL1=0;
 while(1)
      {
	    P2=0xff;
		wait();
		P2=0x00;
		wait();
	  }

}