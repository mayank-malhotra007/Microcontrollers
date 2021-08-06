#include<reg51.h>


void main()
{

 TMOD=0x50;			   //counter 16 bit
 TR1=1;
 TH1=0;
 TL1=0;
 P2=0x00;
 P1=0x00;
 while(1)
      {
	    while(TF1==1);	  // for counter
	

		P2=TL1;
		P1=TH1;
	    TF1=0;
	 }

}