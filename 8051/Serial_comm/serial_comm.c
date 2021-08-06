#include<reg51.h>

void string(char *p)
 {
   while(*p!='\0')
     {
	    //dat(*p);
		SBUF = *p;
		while(TI==0);
		TI=0;
		p++;
	//	delay(9000);
	 }
}


void main()
{
 TMOD=0x20;			 //to set timer 1 to 8 bit mode
 SCON=0x40;			 // to set serial register to mode 1 i.e 8 bit
 TR1=1;				 //to set timer 1
 TH1=0xfd;			// to set TH register of timer 1
 //P3=0x00; P2=0x00; P1=0x00;
 while(1)
   {
     SBUF='M';
	 while(TI==0);	//polling
	 TI=0;


	  SBUF='A';
	  while(TI==0);	//polling
	  TI=0;
	  //while(1);

	 SBUF='Y';
	  while(TI==0);	//polling
	  TI=0;
	  //while(1);


      SBUF='A';
	  while(TI==0);	//polling
	  TI=0;
	  //while(1);


	  SBUF='N';
	  while(TI==0);	//polling
	  TI=0;
	  //while(1);

	  SBUF='K';
	  while(TI==0);	//polling
	  TI=0;
	//  while(1);

	 string("  MALHOTRA");

	 while(1);


   }

}

